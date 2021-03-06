import React, { useReducer, useState } from 'react'
import { Form, LoginSingToggleType, LoginSingUpAction } from '../components/types'
import { BASE_URL } from '../config'
import axios from 'axios'
import { Api, AuthApi } from '../server/api'
import { useUITrigger } from '../context/uiTrigger'
import { useNavigate } from '@reach/router'
import { PorfileData } from '../context/types'
import { useStore } from '../context/store'


const formInitalState = {
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
}
const initialState = {
    ...formInitalState,
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
        case 'RESET_FORM': return { ...state, ...formInitalState }


        default: return state
    }
}

export const useLoginSignUp = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const { toggleLoading, setToasterType, setShowSuccessMessage } = useUITrigger()
    const navigate = useNavigate()

    const {updateUserSession, saveUserProfile} = useStore()

    const updateEmail = (value: string) => dispatch({ type: 'UPDATE_EMAIL', value })
    const updatePassword = (value: string) => dispatch({ type: 'UPDATE_PASSWORD', value })
    const updateConfirmPassWord = (value: string) => dispatch({ type: 'UPDATE_CONFIRM_PASSWORD', value })
    const updateUsername = (value: string) => dispatch({ type: 'UPDATE_USERNAME', value })

    const updateShowLogin = () => dispatch({ type: 'SHOW_LOGIN', value: null })
    const updateShowSignUp = () => dispatch({ type: 'SHOW_SIGNUP', value: null })
    const resetForm = () => dispatch({ type: 'RESET_FORM', value: null })

    const submitLoginForm = async () => {
        toggleLoading(true)
        const { username, email, password } = state
        const payload = { username, email, password }
        try {
            const data = await Api.post('/register', payload)
            toggleLoading(false)
            if (data.token) { // user authenticated
                updateShowLogin()
                setToasterType && setToasterType('success')
                setShowSuccessMessage && setShowSuccessMessage('Account Created Successfully ')
                localStorage.setItem('token', data.token);
                resetForm()
            }
        } catch (e) {
            console.error('api request error', e)
            toggleLoading(false)
        }
    }
    const submitSignIn = async () => {
        toggleLoading(true)
        const { username, email, password } = state
        const payload = { username, password }
        try {
            toggleLoading(false)
            const data = await Api.post('/login', payload).then(async respose => {
                if (respose.token) {
                    const  param = {
                        headers: {
                            'Authorization': `token ${respose.token}`
                        }
                    }
                    updateUserSession && updateUserSession(respose.user)
                    localStorage.setItem('token', respose.token);
                    const profile = await Api.get('/profile', param)
                    if(profile.profile){
                        saveUserProfile && saveUserProfile(profile.profile)
                        // setProfileData(profile.profile)
                        navigate('user/home',{replace: true})
                    }else{
                        navigate('user/profile')
                    }
                }
            })
        } catch (e) {
            toggleLoading(false)
            console.error('api login error', e)
        }
    }
    return {
        state,
        updateEmail,
        updatePassword,
        updateConfirmPassWord,
        updateUsername,
        updateShowLogin,
        updateShowSignUp,
        submitLoginForm,
        submitSignIn,
    }


}