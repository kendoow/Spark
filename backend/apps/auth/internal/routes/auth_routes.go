package routes

import (
	"https/github.com/kendoow/Spark/tree/trunk/backend/apps/auth/internal/controllers"

	"github.com/gorilla/mux"
)

var AuthRoutes = func(router *mux.Router) {
	router.HandleFunc("/login", controllers.Login).Methods("POST")
	router.HandleFunc("/signup", controllers.SignUp).Methods("POST")
	router.HandleFunc("/logout", controllers.Logout).Methods("POST")
}