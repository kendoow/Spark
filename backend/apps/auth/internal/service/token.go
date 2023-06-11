package service

import (
	"time"
	"github.com/golang-jwt/jwt/v5"
	"strconv"
	"gorm.io/gorm"
)

type Token struct {
	ID           uint   `gorm:"primaryKey"`
	Token_ID     uint   `gorm:"unique;not null"`
	RefreshToken string `gorm:"unique;not null"`
}

// возвращает 2 токена в виде объекта
func createTokens(email string, id uint) (map[string]interface{}, error) {
	accessClaims := jwt.MapClaims{
		"email": email,
		"id":    strconv.Itoa(int(id)),
		"exp":   time.Now().Add(time.Hour).Unix(),
	}

	refreshClaims := jwt.MapClaims{
		"email": email,
		"id":    strconv.Itoa(int(id)),
		"exp":   time.Now().Add(30 * 24 * time.Hour).Unix(),
	}

	accessTokenCreated := jwt.NewWithClaims(jwt.SigningMethodHS256, accessClaims)
	refreshTokenCreated := jwt.NewWithClaims(jwt.SigningMethodHS256, refreshClaims)


	accessToken, err := accessTokenCreated.SignedString([]byte("секретный_ключ")) // надо прокинуть секрет из env
	if err != nil {
		return nil, err
	}
	
	refreshToken, err := refreshTokenCreated.SignedString([]byte("секретный_ключ")) // надо прокинуть секрет из env
	if err != nil {
		return nil, err
	}

	tokens := map[string]interface{}{
		"refreshToken": refreshToken,
		"accessToken":  accessToken,
	}

	return tokens, nil
}

// зачем тут аксес токен я прокинул, я пока не понимаю
func saveTokens(user_ID uint, refreshToken string) error {
	token := &Token{
		Token_ID:     user_ID,
		RefreshToken: refreshToken,
	}

	if err := db.Table("tokens").Create(&token).Error; err != nil {
		return err
	}

	return nil
}

func deleteToken(refreshToken string) error {
	return db.Where("refresh_token = ?", refreshToken).Delete(&Token{}).Error
}

func tokenExist(userId uint) (string, error) {
	var tokens Token
	result := db.Where("token_id = ?", userId).First(&tokens)
	if result.Error != nil {
		if result.Error == gorm.ErrRecordNotFound {
			return "", nil
		}
		return "", result.Error
	}
	return tokens.RefreshToken, nil
}
