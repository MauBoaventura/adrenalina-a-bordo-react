import { ClientEnum } from './client-enum'

export const switchAssetsClient = () => {
    return process.env.NEXT_PUBLIC_CLIENT_ASSETS || 'maida'
}

export const getCurrentClient = () => {
    return process.env.NEXT_PUBLIC_CLIENT || ClientEnum.MAIDA
}
