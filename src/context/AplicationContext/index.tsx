/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from 'react'
export const AplicationContext = createContext({} as any)
import useStorage from 'src/hooks/storage/useStorage'
import { getProfile } from 'src/services/managementUser'
import { localStorageToken, localStorageUserData } from 'src/utils/constants'

type StateProviderProps = {
    children?: React.ReactNode
}

const AplicationProvider = ({ children }: StateProviderProps) => {
    const ambienteDEV = process.env.NEXT_PUBLIC_DEV

    const [data, setData, removeData] = useStorage(localStorageUserData)
    const [dataUser, setDataUser] = useState(data)
    const [loading, setLoading] = useState(true)
    const [dataToken, setDataToken, removeDataToken] = useStorage(localStorageToken)

    function logout() {
        removeDataToken()

        removeData()
    }

    function isTokenExpired(token: string) {
        const payloadBase64 = token.split('.')[1]

        const decodedJson = Buffer.from(payloadBase64, 'base64').toString()

        const decoded = JSON.parse(decodedJson)

        const exp = decoded.exp

        const expired = Date.now() >= exp * 1000
        return expired
    }

    useEffect(() => {
        setLoading(true)
        if (!ambienteDEV) {
            if (!dataToken) {
                localStorage.clear()

                window.location.href = process.env.NEXT_PUBLIC_SSO
            }

            if (isTokenExpired(dataToken)) {
                localStorage.clear()
                window.location.href = process.env.NEXT_PUBLIC_SSO

                return
            }
        }

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
                    // console.log(error);
                })
        }
        setLoading(false)
    }, [])

    useEffect(() => {
        setData(dataUser)
    }, [dataUser])

    return (
        <AplicationContext.Provider
            value={{
                data,
                setData,
                removeData,
                dataToken,
                setDataToken,
                removeDataToken,
                logout,
                dataUser,
                setDataUser
            }}
        >
            {!loading ? children : <></>}
        </AplicationContext.Provider>
    )
}

export default AplicationProvider
