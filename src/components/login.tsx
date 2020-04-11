import React, { FC } from 'react'
import { SubmitButton } from './styles';
import TextField from '@material-ui/core/TextField';
import { ILoginSignUp } from './types';

export const Login: FC<ILoginSignUp> = ({
    updateEmail,
    updatePassword,
    updateConfirmPassWord,
    updateUsername,
    updateShowLogin,
    updateShowSignUp,
    state
}) =>
    <>
        <TextField id="userName" label="User Name" />
        <TextField id="password" label="Password" />
        <SubmitButton type='submit'>Login</SubmitButton>
        <p className='message'>Don't have Account? <span className='link'>Sign Up</span> </p>
    </>
