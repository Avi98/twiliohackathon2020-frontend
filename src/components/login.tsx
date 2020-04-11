import React from 'react'
import {  SubmitButton } from './styles';
import TextField from '@material-ui/core/TextField';

export const Login = () =>
    <>
        <TextField id="userName" label="User Name" />
        <TextField id="password" label="Password" />
        <SubmitButton type='submit'>Login</SubmitButton>
        <p className='message'>Don't have Account? <span className='link'>Sign Up</span> </p>
    </>
