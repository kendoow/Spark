package routes

import (
	"github.com/gorilla/mux"
)

var AuthRoutes = func(router *mux.Router) {
	router.HandleFunc("/login", controllers.CreateEntry).Methods("POST")
	router.HandleFunc("/registration", controllers.CreateEntry).Methods("POST")
	router.HandleFunc("/logout", controllers.CreateEntry).Methods("POST")
}