'use client'
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import '../Input/input.d.ts'
import { inputfieldprops } from "../Input/input.d";
import styles from '../Input/StyleSheet/index.module.scss'


const InputField = ({ label, inputType, value} :inputfieldprops) => {

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

        <div  className={`InputLabels ${styles.InputLabels}`}>
            <label>{label}</label>
            <div className={`InputWithIcon ${styles.InputWithIcon}`}>
                <input
                    type={currentInputType}
                    value={value}
                    // value="admin@dreamstechnologies.com"

                />
                {inputType === 'password' && (
                    <span  onClick={togglePasswordVisibility}>
                    {isPasswordHidden ? <FaEyeSlash /> : <FaEye />}
                    </span>
                )}
            </div>
            
        </div>
        </>
        
    )
};

export default InputField;