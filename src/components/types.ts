import { FormikValues } from "formik"

type UPDATE_EMAIL = 'UPDATE_EMAIL'
type UPDATE_PASSWORD = 'UPDATE_PASSWORD'
type UPDATE_CONFIRM_PASSWORD = 'UPDATE_CONFIRM_PASSWORD'
type UPDATE_USERNAME = 'UPDATE_USERNAME'
type SHOW_LOGIN = 'SHOW_LOGIN'
type SHOW_SIGNUP = 'SHOW_SIGNUP'
type RESET_FORM = 'RESET_FORM'

type CommonUpdaterType<T> = (value: T) => void;

type SpamOnClick = React.MouseEvent<HTMLSpanElement>
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
    SHOW_SIGNUP | RESET_FORM

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
    updateShowLogin: CommonUpdaterType<SpamOnClick>
    updateShowSignUp: CommonUpdaterType<SpamOnClick>
}
export interface ISignUp extends ILoginSignUp {
    submitLoginForm: () => void
}
export interface ILogIn extends ILoginSignUp {
    submitSignIn: () => void
}

type buttonType = 'submit' | 'button'
export interface IButton {
    onClick?: () => void
    label: string,
    type?: buttonType
}

export interface IProfileProps {
    formik: FormikValues
}

export interface IImageUpload extends IProfileProps{
    
}


export type profileData = {
    current_location: string
    description: string
    first_name: string
    id: number
    image: string
    last_name: string
    mobile: string
    user: number
    user_id: number
  }