'use client'
import { useState } from "react";
import '../Input/input.d.ts'
import { inputfieldprops } from "../Input/input.d";
import styles from '../Input/StyleSheet/index.module.scss'


const InputField = ({ label, inputType, value, eyeIcon, eyeSlashIcon} :inputfieldprops) => {

    // Manage the visibility state for password inputs
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);

    // Toggle visibility of password input
    const togglePasswordVisibility = () => {
        setIsPasswordHidden((prev) => !prev);
    };

     // Determine the input type based on props
        const currentInputType = inputType === 'password' && isPasswordHidden ? 'password' : 'text';
    return (
        <>

        <div  className={`InputContainer ${styles.InputContainer}`}>
            <label>{label}</label>
            <div className={`InputField ${styles.InputField}`}>
                <input
                    type={currentInputType}
                    value={value}
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