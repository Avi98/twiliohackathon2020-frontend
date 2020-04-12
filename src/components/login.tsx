import React, { FC } from 'react'
import { SubmitButton } from './styles';
import TextField from '@material-ui/core/TextField';
import { ILogIn } from './types';
import { Button } from './button';

export const Login: FC<ILogIn> = ({
    updatePassword,
    updateUsername,
    updateShowSignUp,
    state,
    submitSignIn
}) =>
    <>
        <TextField id="userName" label="User Name" value={state.username} onChange={(e:any)=>updateUsername(e.target.value)} />
        <TextField id="password" label="Password" type='password'  value={state.password} onChange={(e:any)=>updatePassword(e.target.value)}/>
        <Button label="Log In" onClick={submitSignIn} />
        <p className='message'>Don't have Account? <span className='link' onClick={updateShowSignUp}>Sign Up</span> </p>

    </>
