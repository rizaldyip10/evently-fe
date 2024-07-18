"use server"

import { cookies } from "next/headers"

const getCookiesServer = (key: string) => {
    return cookies().get(key)
}

const setCookiesServer = (key: string, token: string) => {
    return cookies().set(key, token, {
        httpOnly: true,
        secure: false,
        maxAge: 3600,
        path: "/"
    })
}

const removeCookiesServer = (key: string) => {
    return cookies().set(key, "", {
        httpOnly: true,
        secure: false,
        maxAge: 0,
        path: "/"
    })
}

export { getCookiesServer, setCookiesServer, removeCookiesServer }