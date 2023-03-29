/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react'

type SubscribeHandler = <T = any>(data?: T) => Promise<void> | void
type Subscriber = { event: string; handler: SubscribeHandler }

const makeGetEventName = (eventPrefix: string) => (event: string) => `${eventPrefix}.${event}`

let subscriptions: Subscriber[] = []

const useGlobalEvents = (eventPrefix = 'default') => {
    const getEventName = makeGetEventName(eventPrefix)

    const unsubscribe = useCallback((event: string, handler: SubscribeHandler) => {
        const finalEventName = getEventName(event)
        window.removeEventListener(finalEventName, handler)

        subscriptions = [...subscriptions.filter((sub) => sub.event !== finalEventName && sub.handler !== handler)]
    }, [])

    const subscribe = useCallback((event: string, handler: SubscribeHandler) => {
        const finalEventName = getEventName(event)
        window.addEventListener(finalEventName, handler)
        subscriptions = [...subscriptions, { event: finalEventName, handler }]
        return () => unsubscribe(event, handler)
    }, [])

    const unsubscribeAll = useCallback(() => {
        subscriptions.map(({ event, handler }) => window.removeEventListener(event, handler))
        subscriptions = []
    }, [])

    const publish = useCallback((event: string, data?: any) => {
        window.dispatchEvent(new Event(getEventName(event), data))
    }, [])

    return {
        subscribe,
        unsubscribe,
        unsubscribeAll,
        publish
    }
}

export { useGlobalEvents }
