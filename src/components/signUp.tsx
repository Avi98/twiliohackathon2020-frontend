import React from 'react'
import { SubmitButton } from './styles';
import TextField from '@material-ui/core/TextField';
import { ILoginSignUp } from './types';

export const SignUp: React.FC<ILoginSignUp> = ({
    updateEmail,
    updatePassword,
    updateConfirmPassWord,
    updateUsername,
    state }) =>
    <>
        <TextField id="e-mail" label="User Name" value={state.username} onChange={(e:any)=>updateUsername(e.target.value)} />
        <TextField id="e-mail" label="E-mail address" value={state.email} onChange={(e:any)=>updateEmail(e.target.value)} />
        <TextField id="password" label="Password" value={state.password} onChange={(e:any)=>updatePassword(e.target.value)}/>
        <TextField id="password" label="confirm Password" value={state.confirmPassword} onChange={(e:any)=>updateConfirmPassWord(e.target.value)}/>
        <SubmitButton type='submit'>Sing Up</SubmitButton>
        <p className='message'>Already have an account? <span className='link'>Log in</span> </p>
    </>