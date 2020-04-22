import * as Yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


export const ProfileSchema = Yup.object({
    first_name: Yup.string()
    .max(20, 'Must be not more than 20 letters')
    .required(),
    last_name: Yup.string()
    .max(20, 'Must be not more than 20 letters')
    .required(),
    mobile: Yup.string().matches(phoneRegExp, 'Invalid mobile number').required(),
    current_location: Yup.string(),
    description: Yup.string(),
})