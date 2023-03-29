import axios from 'axios'
import { jwtAuthorizationHeaderInjector } from './jwtAuthorizationHeaderInjector'

export const apiGestao = axios.create({
    baseURL: process.env.NEXT_PUBLIC_MANAGEMENT,
    headers: {
        'Content-Type': 'application/json'
    }
})

apiGestao.interceptors.request.use(
    (config) => {
        return jwtAuthorizationHeaderInjector(config)
    },
    (error) => Promise.reject(error)
)
