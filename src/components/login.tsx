import React, { FC } from 'react'
import { SubmitButton } from './styles';
import TextField from '@material-ui/core/TextField';
import { ILoginSignUp } from './types';

export const Login: FC<ILoginSignUp> = ({
    updatePassword,
    updateUsername,
    updateShowLogin,
    state
}) =>
    <>
        <TextField id="userName" label="User Name" value={state.username} onChange={(e:any)=>updateUsername(e.target.value)} />
        <TextField id="password" label="Password"  value={state.password} onChange={(e:any)=>updatePassword(e.target.value)}/>
        <SubmitButton type='submit'>Login</SubmitButton>
        <p className='message'>Don't have Account? <span className='link' onClick={updateShowLogin}>Sign Up</span> </p>
    </>
