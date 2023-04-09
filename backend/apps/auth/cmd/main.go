package main

import (
	"log"
	"net/http"


	"https/github.com/kendoow/Spark/tree/trunk/backend/apps/auth/internal/routes"

	"github.com/gorilla/mux"
	// "github.com/graphql-go/graphql"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"

	config "https/github.com/kendoow/Spark/tree/trunk/backend/config"
)

func main() {		
    r := mux.NewRouter()
    routes.AuthRoutes(r)

    cfg, err := config.New()

    if err != nil || cfg == nil {
        log.Println(err)
        panic("Cannot load config of application")
    }

    db, err := gorm.Open(postgres.Open(cfg.DatabaseUrl), &gorm.Config{
        Logger: logger.Default.LogMode(logger.Silent),
    })

	if err != nil {
		log.Println(err)
		panic("failed to connect database")
	}

	d, _ := db.DB()

    if err != nil {
        log.Println(err)
        panic("failed to connect database")
    }

    http.Handle("/", r)
    log.Fatal(http.ListenAndServe("localhost:9010", r))
}
