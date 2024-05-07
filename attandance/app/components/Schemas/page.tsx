import * as Yup from 'yup';

export const LoginSchema = Yup.object({
    name : Yup.string().min(4).max(25).required('Please Enter Your Username'),
    password : Yup.string().min(6).required('Please Enter Your Password')
});