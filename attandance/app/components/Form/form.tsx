import ButtonField from "../Button/ButtonField";
import InputField from "../Input/InputField";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginValidationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required').min(6, 'Minimum 6 characters'),
});

const From = () => {

    const initialValues = {
        username: '',
        password: '',
    };

    const handleSubmit = (values) => {
        console.log('Form submitted with:', values);
    };
    
    return(
        <>
        <Formik
            initialValues={initialValues}
            validationSchema={LoginValidationSchema}
            onSubmit={handleSubmit}
        >
            {(formikProps) => ( 
            <form onSubmit={formikProps.handleSubmit}>
                <InputField label="Username:"
                    inputType="text"
                  // value='admin@dreamstechnologies.com'
                    placeholder= 'admin@dreamstechnologies.com'
                    eyeIcon={<FaEye/>}
                    eyeSlashIcon={<FaEyeSlash/>}
                    {...formikProps.getFieldProps('username')}
                />
                <ErrorMessage name="username" component="div" />

                <InputField
                    label="Password:"
                    inputType="password"
                    placeholder="123456"
                    // value='123456'
                    eyeIcon={<FaEye/>}
                    eyeSlashIcon={<FaEyeSlash/>}
                    {...formikProps.getFieldProps('password')}
                />

                <ErrorMessage name="password" component="div" />

                <ButtonField text={undefined} color={undefined} size={undefined} width={undefined} />
            </form>
            )}
        </Formik>
        </>
    )
};

export default From;