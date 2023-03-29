import React, { createContext, useCallback, useState } from 'react'

import { v4 as uuid } from 'uuid'

import ToastContainer from 'components/molecules/ToastContainer'

export type ToastMessage = {
    id: string

    type?: 'success' | 'error' | 'info'

    title: string

    description?: string

    duration?: number
}

export type ToastContextData = {
    addToast(message: Omit<ToastMessage, 'id'>): void

    removeToast(id: string): void
}

type Props = {
    children: React.ReactNode
}

export const ToastContext = createContext<ToastContextData>({} as ToastContextData)

export const ToastProvider = ({ children }: Props) => {
    const [messages, setMessages] = useState<ToastMessage[]>([])

    const addToast = useCallback(
        ({
            type,

            title,

            description,

            duration = 2000
        }: Omit<ToastMessage, 'id'>) => {
            const id = uuid()

            const toast = {
                id,

                type,

                title,

                description,

                duration
            }

            setMessages([...messages, toast])
        },

        [messages]
    )

    const removeToast = useCallback((id: string) => {
        setMessages((oldState) => oldState.filter((message) => message.id !== id))
    }, [])

    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            {children}

            <ToastContainer messages={messages} />
        </ToastContext.Provider>
    )
}
