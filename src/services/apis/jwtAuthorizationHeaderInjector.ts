import { localStorageToken } from 'src/utils/constants'

const ambienteDEV = process.env.NEXT_PUBLIC_DEV

export const jwtAuthorizationHeaderInjector = (requestHandler) => {
    let token
    const localToken = localStorage.getItem(localStorageToken)
    if (localToken) {
        token = localToken.replaceAll('"', '')
    }
    if (token) {
        requestHandler.headers.Authorization = `Bearer ${token}`
    } else {
        if (!ambienteDEV) window.location.href = process.env.NEXT_PUBLIC_SSO
    }
    return requestHandler
}
