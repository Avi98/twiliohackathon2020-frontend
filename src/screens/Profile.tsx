import React from 'react';
import { useFormik } from 'formik';

import { ProfileForm } from '../components/profileForm';
import { ProfileSchema } from "../schema"
import { AuthApi } from '../server/api';
import { useStore } from '../context/store';


export interface ProfileProps {
    path: string
}

const Profile: React.SFC<ProfileProps> = () => {
    const {userSession} = useStore()
    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            mobile: '',
            current_location: '',
            description: '',
            image: ''
        },
        validationSchema: ProfileSchema,
        onSubmit: (values) => {
            const form_data:any = new FormData()
            //@ts-ignore
            values.image && form_data.append('image', values.image, values.image.name)
            form_data.append('first_name', values.first_name)
            form_data.append('last_name', values.last_name)
            form_data.append('mobile', values.mobile)            
            values.current_location && form_data.append('current_location', values.current_location)
            values.description && form_data.append('description', values.description)
            const payload = [...form_data].reduce((acc:any, [key, value]:any)=>{
                return{
                    ...acc,
                    [key]: value
                }
            },{})
            AuthApi.post(`/profile`, {...payload, user_id:  Number(userSession?.user.id)}, {
                    'content-type': 'multipart/form-data'
                
            })
                .then(res => console.log('res', res), error => console.log('error', error))
        }
    })
    return (
        <ProfileForm
            formik={formik}
        />
    );
}

export { Profile };