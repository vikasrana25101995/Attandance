import InputField from "./components/Input/InputField";
import Image from 'next/image'
import styles from '../app/components/Input/StyleSheet/index.module.scss';

export default function Home() {
  return (
    <>
    <div className={styles.InputFiled}>
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
                // placeholder="Enter your password"
                value='admin@dreamstechnologies.com'
              />
            
          </div>

          <div>
            
              <InputField
                label="Password:"
                inputType="password"
                // placeholder="123456"
                value='123456'
              />
            
          </div>
          <button type='submit'>Login</button>
        </div>
      </div>
    </div>
    </div>
    
    
  </>
  );
}
