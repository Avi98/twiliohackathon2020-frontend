import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from '../config';

const Axios = axios.create({
    baseURL: `${BASE_URL}/api`,
    
    headers: { 
        'X-Custom-Header': 'foobar', 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
     }  
})

interface Fetch {
    header: any
    post: (url: string, data: object, param?: object) => Promise<AxiosResponse>
    get: (url: string, param?: object) => Promise<AxiosResponse>
    put: (url: string, data: object, param?: object) => Promise<AxiosResponse>
}
class fetch implements Fetch {
    header={}
    constructor(tokenHeaders?: any){
       this.header = tokenHeaders
    }
   
    getToken = () =>{
        if(this.header){
            this.header = localStorage.getItem('token') ? {
                headers: {
                    'Authorization': `token ${localStorage.getItem('token')}`
                }
            } : {}
        }
    }
    post(url: string, data: object, param = {}) {
        this.getToken()
        return Axios.post(url, data, { ...this.header,...param}).then((response) => response.data, (error) => console.error(error))
    }
    get(url: string, param = {}) {
        this.getToken()
        return Axios.get(url, { ...this.header,...param}).then((response) => response.data, (error) => error)
    }
    put(url: string, data: object, param = {}) {
        this.getToken()
        return Axios.put(url, data, { ...this.header,...param,}).then((response) => response.data, (error) => error)
    }

}

const tokenHeaders = localStorage.getItem('token') ? {
    headers: {
        'Authorization': `token ${localStorage.getItem('token')}`
    }
} : {}
export const Api = new fetch()
export const AuthApi = new fetch(true)