import React from 'react';
import { Container, Section, ImageSection, FormCol } from '../components/styles';
import { SignUp } from '../components/signUp';
import { Login } from '../components/logIn';
import { useLoginSignUp } from '../hooks/useAuth';

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