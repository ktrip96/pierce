import styles from '../styles/Home.module.css'
import { FcGoogle } from 'react-icons/fc'

export default function Home() {
  return (
    <div className={styles.outter_container}>
      <div className={styles.container}>
        <h1 className={styles.welcome_text}>Welcome</h1>
        <h1 className={styles.description}>Your opinion matters</h1>

        <h3 className={styles.mini_description}>Evaluate your teachers </h3>
        <img
          src={'/students.png'}
          alt='Students'
          style={{
            width: '300px',
            height: '300px',
            objectFit: 'cover',
          }}
        />
        <div className={styles.google_button}>
          <FcGoogle
            style={{ width: '30px', height: '30px', marginRight: '10px' }}
          />
          Sign in with google
        </div>
      </div>
    </div>
  )
}
