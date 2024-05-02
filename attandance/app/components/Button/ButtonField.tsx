import styles from './StyleSheet/index.module.scss';
const ButtonField = () => {
    return (
        <div className={`ButtonContainer ${styles.ButtonContainer}`}>
            <button>Login</button>
        </div>
    )
};

export default ButtonField;