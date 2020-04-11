
export type Form = {
    username: string
    email: string
    password: string
    confirmPassword: string
}
type UPDATE_EMAIL = 'UPDATE_EMAIL'
type UPDATE_PASSWORD = 'UPDATE_PASSWORD'
type UPDATE_CONFIRM_PASSWORD = 'UPDATE_CONFIRM_PASSWORD'
type UPDATE_USERNAME = 'UPDATE_USERNAME'
type SHOW_LOGIN = 'SHOW_LOGIN'
type SHOW_SIGNUP = 'SHOW_SIGNUP'

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
