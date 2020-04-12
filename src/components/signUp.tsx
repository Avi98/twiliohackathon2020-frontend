import React from 'react'
import { SubmitButton, FormCol } from './styles';
import TextField from '@material-ui/core/TextField';
import { ISignUp } from './types';
import { Button } from './button';

export const SignUp: React.FC<ISignUp> = ({
    updateEmail,
    updatePassword,
    updateConfirmPassWord,
    updateUsername,
    updateShowLogin,
    submitLoginForm,
    state }) =>
    <>
        <TextField id="e-mail" label="User Name" value={state.username} onChange={(e: any) => updateUsername(e.target.value)} />
        <TextField id="e-mail" label="E-mail address" value={state.email} onChange={(e: any) => updateEmail(e.target.value)} />
        <TextField id="password" label="Password" value={state.password} onChange={(e: any) => updatePassword(e.target.value)} />
        <TextField id="password" label="confirm Password" value={state.confirmPassword} onChange={(e: any) => updateConfirmPassWord(e.target.value)} />
        <Button label="Sign Up" onClick={submitLoginForm} />
        <p className='message'>Already have an account? <span className='link' onClick={updateShowLogin}>Log in</span> </p>
    </>