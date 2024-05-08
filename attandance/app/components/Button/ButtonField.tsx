import { buttonfieldprops } from '../Button/Button.d';
import styles from './StyleSheet/index.module.scss';


const ButtonField = ({ text, color, size, width} : buttonfieldprops) => {
    // const styles = {
    //     backgroundColor: color || 'blue',
    //     fontSize: size === 'large' ? '22px' : size === 'medium' ? '18px' : size === 'small' ? '10px' : '14px',
    //     padding: size === 'medium' ? '18px' : '26px',
    //     color: 'white',
    //     border: 'none',
    //     borderRadius: '5px',
    //     cursor: 'pointer',
    // };
    const buttonStyle = {
            backgroundColor: color || 'blue',
            width: width,                       
        };

    const sizeClass = size ? styles[size] : '';

    return (
        <div className={`ButtonContainer ${styles.ButtonContainer}`}>
            <button type='submit' style={buttonStyle} className={`CustomButton ${styles.CustomButton} ${sizeClass}`}>{text || 'Login'}</button>
        </div>
    )
}

export default ButtonField;