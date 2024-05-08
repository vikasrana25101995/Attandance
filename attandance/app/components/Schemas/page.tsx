import * as Yup from 'yup';

export const LoginSchema = Yup.object({
    name : Yup.string().min(2, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Please Enter Your Username'),

    password : Yup.string().min(6)
    .required('Please Enter Your Password')
});