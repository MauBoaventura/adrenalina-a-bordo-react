/* eslint-disable react-hooks/exhaustive-deps */

import React, { createContext, useEffect, useState } from 'react'
import useStorage from 'src/hooks/storage/useStorage'
import { getProfile } from 'src/services/apis/managementUser'
import { localStorageToken, localStorageUserData } from 'src/utils/constants'
import { AxiosError } from 'axios'
import { useToast } from 'src/hooks/toast'
import jwt_decode from 'jwt-decode'

export const AuthContext = createContext({} as any)

type DecodedTypes = {
    sub: string
    permissions: string[]
    roles: string[]
    scopes: string[]
    exp: number
    type: string
}

type StateProviderProps = {
    children?: React.ReactNode
}

const AuthProvider = ({ children }: StateProviderProps) => {
    const { addToast } = useToast()

    const [data, setData, removeData] = useStorage(localStorageUserData)
    const [dataUser, setDataUser] = useState()
    const [isAdmin, setIsAdmin] = useState(false)
    const [dataToken, setDataToken, removeDataToken] = useStorage(localStorageToken)
    const [prestadorVinculado, setPrestadorVinculado] = useState<any>()

    function logout() {
        removeDataToken()
        removeData()
        setPrestadorVinculado(undefined)
    }

    function getPrestadorVinculado(uuidUsuario: string) {

    }

    useEffect(() => {
        if (data?.name === undefined || data?.email === undefined || data?.imageUrl === undefined) {
            getProfile()
                .then((response) => {
                    setDataUser({
                        ...data,

                        ['name']: response.name,

                        ['email']: response.email,

                        ['imageUrl']: response.imageUrl
                    })
                })

                .catch((error) => {
                    //   console.log(error);
                })
        } else {
            setDataUser(data)
        }

        const decoded = dataToken && (jwt_decode(dataToken) as DecodedTypes)

        if (decoded?.roles?.includes('ADMIN')) {
            setIsAdmin(true)
        } else {
            getPrestadorVinculado(decoded?.sub)
        }
    }, [])

    useEffect(() => {
        setData(dataUser)
    }, [dataUser])

    return (
        <AuthContext.Provider
            value={{
                data,
                setData,
                removeData,
                dataToken,
                setDataToken,
                removeDataToken,
                logout,
                dataUser,
                prestadorVinculado,
                setDataUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
