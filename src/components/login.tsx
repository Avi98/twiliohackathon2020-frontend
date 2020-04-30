import React, { FC } from 'react'
import { ILogIn } from './types';
import { InputField } from './inputField';


export const Login: FC<ILogIn> = ({
    updatePassword,
    updateUsername,
    state,
}) =>
    <>
        <InputField id="userName" label="User Name" value={state.username} onChange={(e: any) => updateUsername(e.target.value)} />
        <InputField id="password" label="Password" type='password' value={state.password} onChange={(e: any) => updatePassword(e.target.value)} />
    </>


