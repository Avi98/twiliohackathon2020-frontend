import React from 'react'

import { ISignUp } from './types';
import { InputField } from './inputField';

export const SignUp: React.FC<ISignUp> = ({
    updateEmail,
    updatePassword,
    updateConfirmPassWord,
    updateUsername,
    state }) => {
    
 
    return (<>
        <InputField  id="username" label="User Name" value={state.username} onChange={(e: any) => updateUsername(e.target.value)} />
        <InputField  id="email" label="E-mail address" type='email' value={state.email} onChange={(e: any) => updateEmail(e.target.value)} />
        <InputField  id="password" label="Password" type='password' value={state.password} onChange={(e: any) => updatePassword(e.target.value)} />
        <InputField  id="password" label="confirm Password" value={state.confirmPassword} onChange={(e: any) => updateConfirmPassWord(e.target.value)} />
    </>)
}