const setSession = (key: string, value: string) => {
    return sessionStorage.setItem(key, value)
}

const getSession = (key: string) => {
    return sessionStorage.getItem(key)
}

const removeSession = (key: string) => {
    return sessionStorage.removeItem(key)
}

export { setSession, getSession, removeSession }