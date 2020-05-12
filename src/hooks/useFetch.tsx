import React, { useState, useEffect } from "react"
import { AuthApi } from "../server/api";

export const useFetch = (url: string) => {
    const [data, setData] = useState<object>({})
    const [error, setError] = useState<string>('')
    const [status, setStatus] = useState<'start_loading' | 'pending' | 'done_loading'>('done_loading')

    useEffect(() => {
        const controller = new AbortController()
        const fetch = async () => {
            try {
                setStatus('start_loading')
                const data = await AuthApi.get(url)
                if (!controller.signal.aborted) {
                    debugger
                    setData(data.data)
                    setStatus('done_loading')
                }
            } catch (error) {
                debugger
                if (!controller.signal.aborted) {
                    setError(error)
                    setStatus('done_loading')
                }
            }
        }
        fetch()
        return () => {
            controller.abort()
        }
    }, [])
    return {
        data,
        error,
        status
    }
}