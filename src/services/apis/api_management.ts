import axios from 'axios'
import { localStorageToken } from 'utils/constants'

export const apiManagement = axios.create({
    baseURL: process.env.NEXT_PUBLIC_MANAGEMENT,

    headers: {
        'Access-Control-Allow-Origin': '*',

        'Content-Type': 'application/json'
    }
})

apiManagement.interceptors.request.use(
    (config) => {
        let token

        const localToken = localStorage.getItem(localStorageToken)

        if (localToken) {
            token = localToken.replaceAll('"', '')
        }

        if (token && config.headers !== undefined) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    },

    (error) => Promise.reject(error)
)
