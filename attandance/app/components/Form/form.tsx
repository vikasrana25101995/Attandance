import ButtonField from "../Button/ButtonField";
import InputField from "../Input/InputField";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {useFormik} from 'formik';
import {LoginSchema} from '../Schemas/page'


const initialValues = {
        username: '',
        password: '',
    };
const From = () => {
    const  {values, errors, touched, handleChange, handleBlur, handleSubmit} =  useFormik({
        initialValues : initialValues,
        validationSchema : LoginSchema,
        onSubmit :  (values, action) => {
            console.log(values);
            action.resetForm();
        }
        
    });
    console.log(errors);
    console.log(values);

    return(
        <>
            <form action="" onSubmit={handleSubmit}>
            <InputField label="Username:"
                inputType="text"
                // value='admin@dreamstechnologies.com'
                placeholder='admin@dreamstechnologies.com'
                eyeIcon={<FaEye />}
                eyeSlashIcon={<FaEyeSlash />}
                name='username'
                values={values.username}
                onChange={handleChange}
                onBlur={handleBlur}                />
                {errors.name && touched.username ? <p>{errors.name}</p> : null}

                <InputField
                    label="Password:"
                    inputType="password"
                    placeholder="123456"
                    // value='123456'
                    eyeIcon={<FaEye />}
                    eyeSlashIcon={<FaEyeSlash />}
                    name='password'
                    values={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}                />
                {errors.password && touched.password ? <p>{errors.password}</p> : null}

                <ButtonField text={undefined} color={undefined} size={undefined} width={undefined} />
            </form>
        </>
    )
};

export default From;