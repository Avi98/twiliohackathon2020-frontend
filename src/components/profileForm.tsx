import React, { SFC } from 'react'
import TextField from '@material-ui/core/TextField';
import { Container } from '../components/styles';
import styled from "styled-components"
import { ImageUpload } from '../components/imageUpload';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Button } from './button';
import {IProfileProps} from "./types"

const CardContainer = styled(Container)`
    padding: 10%;
    justify-content: center;
    color: var(--base-title-color);
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    align-self: center;
    @media only screen and (min-width: 600px) {
        width: 450px;
    }
    
`
const FomContainer = styled.form`
    display:grid;
    grid-template-rows: 2fr 1fr 1fr 1fr 1fr 1fr 2fr;
    justify-content:space-between;
    align-items:center;
    grid-gap: 20px;
    .image-position{
        margin-left: 20px;
    }
`

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: '650px',
        },
    }),
);


export const ProfileForm:SFC<IProfileProps> = ({formik}) => {
    const classes = useStyles();
    return (
        <CardContainer>
            <h2>Upload Your Profile</h2>
            <FomContainer className={classes.root} onSubmit={formik.handleSubmit}>
                <div className="image-position">
                    <ImageUpload formik={formik} />
                </div>

                <TextField  required id="standard-required" error={Boolean( formik.touched?.first_name &&  formik.errors?.first_name)} helperText={formik.touched?.first_name &&  formik.errors?.first_name}  fullWidth label="First Name" {...formik.getFieldProps('first_name')} />
                <TextField required id="standard-required2" error={Boolean(formik.touched?.last_name &&  formik.errors?.last_name)} helperText={formik.touched?.last_name &&  formik.errors?.last_name} fullWidth label="Last Name" {...formik.getFieldProps('last_name')} />
                <TextField required type="number" id="standard-required" error={Boolean(formik.touched?.mobile &&  formik.errors?.mobile)} helperText={ formik.touched?.mobile && formik.errors?.mobile} fullWidth label="Mobile" {...formik.getFieldProps('mobile')} />
                <TextField id="standard-required" fullWidth label="Current Location" error={formik.touched?.current_location &&  Boolean(formik.errors?.current_location)} helperText={formik.touched?.current_location &&  formik.errors?.current_location} {...formik.getFieldProps('current_location')} />
                <TextField id="standard-required2" fullWidth label="Description" error={Boolean(formik.touched?.description &&  formik.errors?.description)} helperText={formik.touched?.description &&  formik.errors?.description} {...formik.getFieldProps('description')} />
                <Button label="Submit" type='submit' />
            </FomContainer>

        </CardContainer>
    )
}