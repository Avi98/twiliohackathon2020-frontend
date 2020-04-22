import React from 'react';
import { useFormik } from 'formik';

import { ProfileForm } from '../components/profileForm';
import {ProfileSchema} from "../schema"


export interface ProfileProps {
    path: string
}

const Profile: React.SFC<ProfileProps> = () => {
    const formik = useFormik({
        initialValues:{
            first_name: '',
            last_name: '',
            mobile:'',
            current_location:'',
            description:''
        },
        validationSchema: ProfileSchema,
        onSubmit:(values)=>{console.log('forms', values)}
    })
    return (
        <ProfileForm 
          formik={formik}
          
        />
    );
}

export { Profile };