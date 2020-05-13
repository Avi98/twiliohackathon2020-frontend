import React, { useState, useEffect } from "react"
import { AuthApi } from "../server/api";

type status = 'start_loading' | 'pending' | 'done_loading' | ''
export const useFetch = (url: string): { data: any, error: string, status: status } => {
    const [data, setData] = useState<object>({})
    const [error, setError] = useState<string>('')
    const [status, setStatus] = useState<status>('')

    useEffect(() => {
        const controller = new AbortController()
        const fetch = async () => {
            try {
                setStatus('start_loading')
                const data = await AuthApi.get(url)
                if (!controller.signal.aborted) {
                    setData(data)
                    setStatus('done_loading')
                }
            } catch (error) {
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