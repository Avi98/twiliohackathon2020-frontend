import React,{FC} from 'react';
import { Container, Section, ImageSection, FormCol } from '../components/styles';
import { SignUp } from '../components/signUp';
import { Login } from '../components/logIn';
import { useLoginSignUp } from '../hooks/useAuth';
import { useStore } from '../context/store';

export const LoginSignUp:FC<{path:string}> = () => {
    const { updateEmail,
        updatePassword,
        updateConfirmPassWord,
        updateUsername,
        updateShowLogin,
        updateShowSignUp, state, submitLoginForm, submitSignIn } = useLoginSignUp()
    return (<Container>
        <ImageSection />
        <Section>
            <FormCol>
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
                    submitLoginForm={submitLoginForm}

                /> : <Login
                        state={state}
                        updateEmail={updateEmail}
                        updatePassword={updatePassword}
                        updateConfirmPassWord={updateConfirmPassWord}
                        updateUsername={updateUsername}
                        updateShowLogin={updateShowLogin}
                        updateShowSignUp={updateShowSignUp}
                        submitSignIn={submitSignIn}

                    />}
            </FormCol>
        </Section>
    </Container>)
}