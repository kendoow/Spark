# Используйте базовый образ, содержащий Go
FROM golang:latest

# Установка рабочей директории
WORKDIR /app

# Копирование зависимостей
COPY go.mod .
COPY go.sum .
RUN go mod download

# Копирование исходного кода
COPY . .

# Компиляция приложения
RUN go build -o main .

# Команда запуска приложения
CMD ["./main"]
