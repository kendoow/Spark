package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"https/github.com/kendoow/Spark/tree/trunk/backend/apps/auth/internal/routes"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
)

func main() {	
	err := godotenv.Load(".env")
	
    if err != nil {
        log.Fatal(err)
    }

    // Использование переменных окружения
    port := os.Getenv("PORT")	
	
	// объявление роутера
    r := mux.NewRouter()
    routes.AuthRoutes(r)
	
	fmt.Println("Opened")
    http.Handle("/", r)
    log.Fatal(http.ListenAndServe("localhost:" + port, r))
}
