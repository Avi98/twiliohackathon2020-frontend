import React, { useReducer } from 'react';
import { Container, Section, ImageSection, FormCol } from './styles';
import { SignUp } from './signUp';
import { Login } from './logIn';
import { Form, LoginSingUpAction, LoginSingToggleType } from './types';


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

const useLoginSignUp = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

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
    }


}
export const LoginSignUp = () => {
    const { updateEmail,
        updatePassword,
        updateConfirmPassWord,
        updateUsername,
        updateShowLogin,
        updateShowSignUp, state } = useLoginSignUp()
    return (<Container>
        <ImageSection />
        <Section>
            <FormCol onSubmit={() => { }}>
                <h2>Welcome to our community</h2>
                <h3>Lets create an account</h3>
                {state.showSignUp ? <SignUp
                    state={state}
                    updateEmail={updateEmail}
                    updatePassword={updatePassword}
                    updateConfirmPassWord={updateConfirmPassWord}
                    updateUsername={updateUsername}
                    updateShowLogin={updateShowLogin}
                    updateShowSignUp={updateShowSignUp}

                /> : <Login
                        state={state}
                        updateEmail={updateEmail}
                        updatePassword={updatePassword}
                        updateConfirmPassWord={updateConfirmPassWord}
                        updateUsername={updateUsername}
                        updateShowLogin={updateShowLogin}
                        updateShowSignUp={updateShowSignUp}

                    />}
            </FormCol>
        </Section>
    </Container>)
}