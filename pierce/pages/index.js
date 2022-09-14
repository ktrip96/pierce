import styles from '../styles/Home.module.css'
import { FcGoogle } from 'react-icons/fc'
import { motion } from 'framer-motion'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <div className={styles.outter_container}>
      <div className={styles.container}>
        <div
          className={styles.button}
          onClick={() => router.push('/learnMore')}
        >
          Learn More
        </div>
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: { delay: 0.4, duration: 0.6 },
          }}
          className={styles.welcome_text}
        >
          Welcome
        </motion.h1>
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: { delay: 1.5, duration: 0.6 },
          }}
          className={styles.description}
        >
          Your opinion matters
        </motion.h1>

        <motion.h3
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: { delay: 1.5, duration: 0.6 },
          }}
          className={styles.mini_description}
        >
          Evaluate your teachers{' '}
        </motion.h3>
        <img src={'/students.png'} alt='Students' className={styles.image} />
        <div
          className={styles.google_button}
          // onClick={() => Router.push('/main')}
          onClick={() =>
            signIn('google', { callbackUrl: 'http://localhost:3000/main' })
          }
        >
          <FcGoogle
            style={{ width: '30px', height: '30px', marginRight: '10px' }}
          />
          Sign in with google
        </div>
      </div>
    </div>
  )
}
