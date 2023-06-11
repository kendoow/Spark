package store

import (
	"log"
	"os"

	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var (
	db *gorm.DB
)

func Connect() {


	err := godotenv.Load(".env")
    if err != nil {
        log.Fatal(err)
    }
    // Использование переменных окружения
    postgres_url := os.Getenv("POSTGRES_URL")	

	d, err := gorm.Open(postgres.Open(postgres_url), &gorm.Config{})

	if err != nil {
		log.Println(err)
		panic("failed to connect database")
	}
	if err != nil {
		panic(err)
	}
	
	db = d
}

func GetBD() *gorm.DB {
	return db
}
