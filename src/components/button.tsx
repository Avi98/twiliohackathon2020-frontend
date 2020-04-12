import React from 'react'
import { SubmitButton } from './styles'
import { IButton } from './types'
import { useUITrigger } from '../context/uiTrigger'
import { CircularProgress } from '@material-ui/core'

export const Button = ({ label, onClick, type = 'submit' }:IButton) =>{ 
    const {loading} = useUITrigger()
return<SubmitButton type={type} onClick={onClick} disabled={loading}>{loading ? <CircularProgress size={20} /> :label}</SubmitButton>
}