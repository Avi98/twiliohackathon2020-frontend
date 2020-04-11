import React from 'react'
import { SubmitButton } from './styles';
import TextField from '@material-ui/core/TextField';
import { ILoginSignUp } from './types';

export const SignUp: React.FC<ILoginSignUp> = ({
    updateEmail,
    updatePassword,
    updateConfirmPassWord,
    updateUsername,
    updateShowLogin,
    updateShowSignUp,
    state }) =>
    <>
        <TextField id="e-mail" label="User Name" />
        <TextField id="e-mail" label="E-mail address" />
        <TextField id="password" label="Password" />
        <TextField id="password" label="confirm Password" />
        <SubmitButton type='submit'>Sing Up</SubmitButton>
        <p className='message'>Already have an account? <span className='link'>Log in</span> </p>
    </>