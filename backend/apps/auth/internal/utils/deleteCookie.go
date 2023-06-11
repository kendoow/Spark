package utils

import "net/http"


func DeleteCookie(w http.ResponseWriter, name string) {
    cookie := &http.Cookie{
        Name:     name,
        Value:    "",
        Path:     "/",
        MaxAge:   -1,
        HttpOnly: true,
    }
    http.SetCookie(w, cookie)
}
