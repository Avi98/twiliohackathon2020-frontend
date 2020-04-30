import React, { createContext, ReactChild, useReducer, useContext } from 'react'
import { userState, user, UserStoreContextType, userStateAction, userProfile } from './types'

const userInitialState: userState = {
    user: {
        id: localStorage.getItem('user_id'),
        email: '',
        userName: ''
    },
    user_profile: {}
}
const StoreContext = createContext<Partial<UserStoreContextType>>({ userSession: userInitialState, updateUserSession: undefined, saveUserProfile: undefined })

StoreContext.displayName = 'Store'

const userReducer = (state: userState, action: userStateAction) => {
    switch (action.type) {
        case 'SET_USER': return { ...state, user: action.value }
        case 'SET_USER_PROFILE': return { ...state, profile: action.value }

        default: return state
    }
}
export const Store = ({ children }: { children: ReactChild }) => {
    const [user, setUserState] = useReducer(userReducer, userInitialState)

    const updateUserSession = (value: user) => {
        localStorage.setItem('user_id', String(value.id))
        setUserState({ type: 'SET_USER', value })
    }
    const saveUserProfile = (value: userProfile) => {
        setUserState({ type: 'SET_USER_PROFILE', value })
    }
    return <StoreContext.Provider value={{
        userSession: user,
        //@ts-ignore
        updateUserSession, saveUserProfile
    }}>
        {children}
    </StoreContext.Provider>
}

export const useStore = () => {
    const { userSession, updateUserSession, saveUserProfile } = useContext(StoreContext)
        return {
            userSession,
            updateUserSession,
            saveUserProfile
        }

}
