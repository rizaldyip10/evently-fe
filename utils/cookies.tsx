import { cookies } from "next/headers"

let key = process.env.COOKIE_KEY ? process.env.COOKIE_KEY : ''

const getCookies = () => {
    return cookies().get(key)
}

const removeCookies = () => {
    return cookies().delete(key)
}

export { getCookies, removeCookies }