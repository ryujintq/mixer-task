const PREFIX = 'MIXER-TASK-'

export const localStorageGet = key => {
    const prefixedKey = PREFIX + key
    return localStorage.getItem(prefixedKey)
}

export const localStorageSet = (key, value) => {
    const prefixedKey = PREFIX + key
    localStorage.setItem(prefixedKey, value)
}