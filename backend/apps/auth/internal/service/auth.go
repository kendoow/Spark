package service

import (
	"errors"
	"fmt"

	"https/github.com/kendoow/Spark/tree/trunk/backend/apps/auth/internal/store"

	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

var db *gorm.DB

type User struct {
	User_ID  uint   `gorm:"primary_key"`
	Email    string `gorm:"unique;not null"`
	Password string `gorm:"not null"`
}

func init() {
	store.Connect()
	db = store.GetBD()
}

func SignUp(user *User) (map[string]interface{}, error) {
	existsUserError := db.Table("users").Where("email = ?", user.Email).First(&User{}).Error;
	
	if existsUserError == nil {
		fmt.Println("user with that email already exists")
		return nil, errors.New("user with that email already exists")
	}

	if existsUserError != nil && existsUserError != gorm.ErrRecordNotFound {
		return nil, errors.New(fmt.Sprintf("unknown error - %s", existsUserError))
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)

	if err != nil {
		return nil, err
	}

	newUser := &User{
		Email:    string(user.Email),
		Password: string(hashedPassword),
	}

	if err := db.Table("users").Create(&newUser).Error; err != nil {
		return nil, err
	}

	tokens, err := createTokens(user.Email, newUser.User_ID)

	if err != nil {
		return nil, err
	}

	TokenSaveError := saveTokens(newUser.User_ID, tokens["refreshToken"].(string))

	if TokenSaveError != nil {
		return nil, TokenSaveError
	}

	response := map[string]interface{}{
		"refreshToken": tokens["refreshToken"],
		"accessToken":  tokens["accessToken"],
	}

	return response, nil
}

func Login(user *User) (map[string]interface{}, error) {
	var dbUser User
	if err := db.Table("users").Where("email = ?", user.Email).First(&dbUser).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, err
		}
		return nil, err
	}

	if err := bcrypt.CompareHashAndPassword([]byte(dbUser.Password), []byte(user.Password)); err != nil {
		return nil, err
	}

	if refreshToken, err := tokenExist(dbUser.User_ID); err == nil && refreshToken != "" {
		deleteToken(refreshToken)
	}

	tokens, TokenCreateError := createTokens(user.Email, dbUser.User_ID)

	if TokenCreateError != nil {
		return nil, TokenCreateError
	}

	if err := saveTokens(dbUser.User_ID, tokens["refreshToken"].(string)); err != nil {
		return nil, err
	}

	response := map[string]interface{}{
		"user":         &dbUser,
		"refreshToken": tokens["refreshToken"].(string),
		"accessToken":  tokens["accessToken"].(string),
	}

	return response, nil
}

func Logout(refreshToken string) (err error) {
	if refreshToken == "" {
		return errors.New("Отсутствует refreshToken")
	}

	err = deleteToken(refreshToken)

	if err != nil {
		return err
	}

	return nil
}
