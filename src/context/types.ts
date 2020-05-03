import { Dispatch, SetStateAction } from "react";
import { Severity } from "../components/tosterFactory";

type actions<T> = Dispatch<SetStateAction<T>>
type dispatch<A> = Dispatch<A>

export type toasterType = Severity | ''
export type UITriggerContextType = {
    loading: boolean,
    showLoading?: actions<boolean>,
    showSuccessMessage: string,
    setShowSuccessMessage?: actions<string>,
    toasterType: toasterType,
    setToasterType?: actions<toasterType>
    setFullPageLoader?: actions<boolean>
    fullPageLoader: boolean

}

export type PorfileData = {
    "user": number,
    "image": null | string,
    "first_name": string,
    "last_name": string,
    "description": string,
    "mobile": string,
    "current_location": string,
    "user_id": number
}

// store types 


export type user = {
    id: null | number | string,
    email: string,
    userName: string,
}
export type userProfile ={
    
}
type userActionType<V> = {
    // as its generic add types here using or operator
    type: 'SET_USER',
    value: V
}

export type userStateAction = { type: string, value: any }
export type UserStoreContextType = {
    userSession: userState,
    updateUserSession: (user: user) => void
    saveUserProfile: (profile: userProfile) => void
}

export type userState = {
    user: user
    user_profile: {}
}

export type userAction = userActionType<user>