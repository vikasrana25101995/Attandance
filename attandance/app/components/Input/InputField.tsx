'use client'
import { useState } from "react";
import '../Input/input.d.ts'
import { inputfieldprops } from "../Input/input.d";
import styles from '../Input/StyleSheet/index.module.scss'
import { ErrorMessage, Field, Form, Formik, FormikHelpers, FormikValues } from "formik";


const InputField = ({ label, inputType, eyeIcon, eyeSlashIcon, values, ...props} :inputfieldprops) => {


    const [isPasswordHidden, setIsPasswordHidden] = useState(true);

    const togglePasswordVisibility = () => {
        setIsPasswordHidden((prev) => !prev);
    };
    
    const currentInputType = inputType === 'password' && isPasswordHidden ? 'password' : 'text';
    return (
        <>
    
        <div  className={`InputContainer ${styles.InputContainer}`}>
            <label>{label}</label>
           
            <div className={`InputField ${styles.InputField}`}>
                <div>
                <Field
                    type={currentInputType}
                    value={values}
                    {...props}
                />
                <ErrorMessage  name={props.name} ></ErrorMessage>
                </div>
                {inputType === 'password' && (
                    <span  onClick={togglePasswordVisibility}>
                    {isPasswordHidden ? eyeSlashIcon : eyeIcon }
                    </span>
                )}
            </div>
        </div>

        </>
    )
};

export default InputField;