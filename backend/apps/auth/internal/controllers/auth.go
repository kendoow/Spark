package controllers

import (
	"encoding/json"
	"fmt"
	"net/http"

	"https/github.com/kendoow/Spark/tree/trunk/backend/apps/auth/internal/service"
	"https/github.com/kendoow/Spark/tree/trunk/backend/apps/auth/internal/utils"
)


func SignUp(w http.ResponseWriter, r *http.Request) {
	var user service.User

	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	tokens, err := service.SignUp(&user)

	if err != nil {
		w.WriteHeader(http.StatusUnauthorized)
		w.Write([]byte(fmt.Sprintf("Auth Controller Error Sign up - %v", err)))
		return
	}

	cookie := http.Cookie{
		Name:     "refreshToken",
		Value:    tokens["refreshToken"].(string),
		MaxAge:   30 * 24 * 60 * 60,
		HttpOnly: true,
	}

	http.SetCookie(w, &cookie)

	response, _ := json.Marshal(tokens)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(response)
}

func Login(w http.ResponseWriter, r *http.Request) {
	var user service.User
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	loginUser, err := service.Login(&user)

	if err != nil {
		http.Error(w, err.Error(), http.StatusUnauthorized)
		return
	}

	cookie := http.Cookie{
		Name:     "refreshToken",
		Value:    loginUser["refreshToken"].(string),
		MaxAge:   30 * 24 * 60 * 60,
		HttpOnly: true,
	}

	http.SetCookie(w, &cookie)

	response, _ := json.Marshal(loginUser)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(response)
}

func Logout(w http.ResponseWriter, r *http.Request) {
	refreshToken, _ := r.Cookie("refreshToken")
	err := service.Logout(refreshToken.Value)
	if err != nil {
		w.WriteHeader(http.StatusUnauthorized)
		json.NewEncoder(w).Encode(map[string]string{"message": fmt.Sprintf("Auth Controller Error Logout - %v", err)})
		return
	}

	utils.DeleteCookie(w, "refreshToken")
}
