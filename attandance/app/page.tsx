import InputField from "./components/Input/InputField";
import Image from 'next/image'
import styles from '../app/components/Input/StyleSheet/index.module.scss';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ButtonField from './components/Button/ButtonField';

export default function Home() {
  return (
    <>
      <div className={styles.LoginApplyJob}>
          <a href="#"> Apply Job</a>
      </div>
      <div className='Main-Login'>
        
        <div className="LoginFrom">
          <Image
            src="/smarthr-dreamstechnologies.png"
            width={100}
            height={100}
            alt="Picture of the author"
          />
          <div className="">
            <h3>Login</h3>
            <p>Access to our dashboard</p>

            <div>
              
                <InputField
                  label="Username:"
                  inputType="text"
                  // value='admin@dreamstechnologies.com'
                  placeholder= 'admin@dreamstechnologies.com'
                  eyeIcon={<FaEye/>}
                  eyeSlashIcon={<FaEyeSlash/>}
                />
              
            </div>

            <div>
              
                <InputField
                  label="Password:"
                  inputType="password"
                  placeholder="123456"
                  // value='123456'
                  eyeIcon={<FaEye/>}
                  eyeSlashIcon={<FaEyeSlash/>}
                />
              
            </div>
            <ButtonField text={undefined} color={undefined} size={undefined} width={undefined} />
          </div>
        </div>
      </div>
    </>
  );
}

