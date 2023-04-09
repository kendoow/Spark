package cfg

import (
	"os"
	"path/filepath"
	"strings"

	"github.com/joho/godotenv"
	"github.com/kelseyhightower/envconfig"
)

type Config struct {
	RedisUrl                 string  `required:"true"  default:"redis://localhost:6379/0"    envconfig:"REDIS_URL"`
	DatabaseUrl              string  `required:"true"                                        envconfig:"DATABASE_URL"`
	AppEnv                   string  `required:"true"  default:"development"                 envconfig:"APP_ENV"`
}

func New() (*Config, error) {
	var newCfg Config

	var err error

	wd, err := os.Getwd()
	if err != nil {
		return nil, err
	}

	if strings.HasPrefix(wd, "/workspace") {
		wd = "/workspace"
	} else {
		wd = filepath.Join(wd, "..", "..")
	}

	envPath := filepath.Join(wd, ".env")
	_ = godotenv.Load(envPath)

	if err = envconfig.Process("", &newCfg); err != nil {
		return nil, err
	}

	return &newCfg, nil
}