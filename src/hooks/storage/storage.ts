
import Cookie from 'js-cookie'

const storage = {
    set: (key: string, value: string) => {
        // console.log('set')
    },

    get: (key: string) => {
        // console.log('get')
    },

    remove: (key: string) => {
        // console.log('remove')
        // console.log('remove')
    }
}

// Safari in incognito has local storage, but size 0

// This system falls back to cookies in that situation

try {
    if (!window.localStorage) {
        throw Error('no local storage')
    }

    storage.set = (key, value) => localStorage.setItem(key, JSON.stringify(value))

    storage.get = (key) => {
        const item = localStorage.getItem(key)

        try {
            return item !== null && JSON.parse(item)
        } catch (e) {
            return null
        }
    }

    storage.remove = (key: string) => localStorage.removeItem(key)
} catch (e) {
    storage.set = Cookie.set

    storage.get = Cookie.get

    storage.remove = Cookie.remove
}

export default storage
