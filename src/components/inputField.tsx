import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles, TextFieldProps } from '@material-ui/core';


const useStyle = makeStyles({
    root: {
        margin: '2% 0',
    }
})

export const InputField = (props: TextFieldProps) =>{
    const classes = useStyle()
    return <TextField className={classes.root} {...props} />
}