import React, { useReducer } from 'react'
import { Form, LoginSingToggleType, LoginSingUpAction } from '../components/types'
import { BASE_URL } from '../config'
import axios from 'axios'
import { Api } from '../server/api'


const initialState = {
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
    showLogin: false,
    showSignUp: true
}
function reducer(state: Form & LoginSingToggleType, action: LoginSingUpAction) {
    switch (action.type) {
        // form state
        case 'UPDATE_EMAIL': return { ...state, email: action.value }
        case 'UPDATE_PASSWORD': return { ...state, password: action.value }
        case 'UPDATE_CONFIRM_PASSWORD': return { ...state, confirmPassword: action.value }
        case 'UPDATE_USERNAME': return { ...state, username: action.value }

        //login or Signup
        case 'SHOW_LOGIN': return { ...state, showLogin: true, showSignUp: false }
        case 'SHOW_SIGNUP': return { ...state, showSignUp: true, showLogin: false }


        default: return state
    }
}

export const useLoginSignUp = () => {
    
    const [state, dispatch] = useReducer(reducer, initialState)

    const submitLoginForm = async () => {
        const { username, email, password } = state
        const payload = { username, email, password }
        try {
            await Api.post('/register', payload)
        } catch (e) {
            console.error('api request error', e)
        }
    }
    const submitSignIn = async () => {
        debugger
        const { username, email, password } = state
        const payload = { username, password }
        try {
            const data = await Api.post('/login', payload)
        } catch (e) {
            console.error('api login error', e)
        }
    }

    const updateEmail = (value: string) => dispatch({ type: 'UPDATE_EMAIL', value })
    const updatePassword = (value: string) => dispatch({ type: 'UPDATE_PASSWORD', value })
    const updateConfirmPassWord = (value: string) => dispatch({ type: 'UPDATE_CONFIRM_PASSWORD', value })
    const updateUsername = (value: string) => dispatch({ type: 'UPDATE_USERNAME', value })

    const updateShowLogin = () => dispatch({ type: 'SHOW_LOGIN', value: null })
    const updateShowSignUp = () => dispatch({ type: 'SHOW_SIGNUP', value: null })

    return {
        state,
        updateEmail,
        updatePassword,
        updateConfirmPassWord,
        updateUsername,
        updateShowLogin,
        updateShowSignUp,
        submitLoginForm,
        submitSignIn
    }


}