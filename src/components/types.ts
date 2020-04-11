type UPDATE_EMAIL = 'UPDATE_EMAIL'
type UPDATE_PASSWORD = 'UPDATE_PASSWORD'
type UPDATE_CONFIRM_PASSWORD = 'UPDATE_CONFIRM_PASSWORD'
type UPDATE_USERNAME = 'UPDATE_USERNAME'
type SHOW_LOGIN = 'SHOW_LOGIN'
type SHOW_SIGNUP = 'SHOW_SIGNUP'

type CommonUpdaterType<T> = (value: T) => void;

export type Form = {
    username: string
    email: string
    password: string
    confirmPassword: string
}

export type LoginSingToggleType = {
    showSignUp: boolean
    showLogin: boolean
}

export type SignUpLoginActionType =
    UPDATE_EMAIL |
    UPDATE_PASSWORD |
    UPDATE_CONFIRM_PASSWORD |
    UPDATE_USERNAME |
    SHOW_LOGIN |
    SHOW_SIGNUP

export type LoginSingUpAction = {
    type: SignUpLoginActionType,
    value: string | any
}

export interface ILoginSignUp {
    state: Form & LoginSingToggleType,
    updateEmail: CommonUpdaterType<string>
    updatePassword: CommonUpdaterType<string>
    updateConfirmPassWord: CommonUpdaterType<string>
    updateUsername: CommonUpdaterType<string>
    updateShowLogin: CommonUpdaterType<null>
    updateShowSignUp: CommonUpdaterType<null>
}