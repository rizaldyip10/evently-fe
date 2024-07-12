"use client"

import { setCookie, getCookie } from 'cookies-next'

const setCookiesClient = (key: string, token: string) => {
    return setCookie(key, token, {
        httpOnly: true,
        secure: false,
        maxAge: 3600,
        path: "/"
    })
}

const getCookieClient = (key: string) => {
    return getCookie(key)
}

const removeCookieClient = (key: string) => {
    return setCookie(key, "", {
        httpOnly: true,
        secure: false,
        maxAge: 0,
        path: "/"
    })
}

export { setCookiesClient, getCookieClient, removeCookieClient }