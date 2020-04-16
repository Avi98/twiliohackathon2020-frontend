import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from '../config';

const Axios = axios.create({
    baseURL: `${BASE_URL}/api`,
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar', 'Content-Type': 'application/json'}
})

interface Fetch {
    post: (url: string, data: object, param?: object) => Promise<AxiosResponse>
    get: (url: string, param?: object) => Promise<AxiosResponse>
    put: (url: string, data: object, param?: object) => Promise<AxiosResponse>
}
class fetch implements Fetch {
    post(url: string, data: object, param = {}) {
        return Axios.post(url, data, param).then((response) => response.data, (error) => console.error(error))
    }
    get(url: string, param = {}) {
        return Axios.get(url, param).then((response) => response.data, (error) => error)
    }
    put(url: string, data: object, param = {}) {
        return Axios.put(url, data, param).then((response) => response.data, (error) => error)
    }

}

export const Api = new fetch()