'use client'
import { useState } from "react";
import '../Input/input.d.ts'
import { inputfieldprops } from "../Input/input.d";
import styles from '../Input/StyleSheet/index.module.scss'


const InputField = ({ label, inputType, placeholder, eyeIcon, eyeSlashIcon} :inputfieldprops) => {


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
                <input
                    type={currentInputType}
                    placeholder={placeholder}
                    // value="admin@dreamstechnologies.com"
                />
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