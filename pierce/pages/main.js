import styles from '../styles/Main.module.css'
import { useContext, useEffect, useState } from 'react'
import Router from 'next/router'
import ComboBox from '../components/ComboBox'
import TeacherContext from '../context/TeacherContext'
import axios from 'axios'
import { useSession } from 'next-auth/react'

function main() {
  const { setSelected, selected } = useContext(TeacherContext)
  const [teachers, setTeachers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { data: session } = useSession()

  const handleClick = () => {
    if (selected === '') alert('Please select teacher first')
    else {
      // Δες αν υπάρχει ο χρήστης στη βάση.
      // Αν υπάρχει απλά πήγαινε στην επόμενη σελίδα.
      // Αν δεν υπάρχει, βάλτον στην βάση και μετά πήγαινε στην επόμενη σελίδα.
      axios.post(`http://${location.hostname}/api/user`, session.user)
      Router.push(`/${selected.name}`)
    }
  }

  useEffect(() => {
    // Την πρώτη φορά που θα εκτελεστείς φέρε μου όλους τους καθηγητές,
    // για να τους βάλω στο dropdown
    axios
      .get(`http://${location.hostname}/api/teacher`)
      .then(function (response) {
        setTeachers(response.data.data)
        setIsLoading(false)
      })
  }, [])

  if (isLoading)
    return (
      <div className={styles.outter_container}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Loading</h1>
      </div>
    )

  if (!session)
    return (
      <div className={styles.outter_container}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Loggin in...</h1>
      </div>
    )
  return (
    <div className={styles.outter_container}>
      <div className={styles.container}>
        <img
          src={session.user.image}
          referrerPolicy='no-referrer'
          alt=''
          className={styles.mini_image}
        />
        <img
          src={'/angry_teacher.webp'}
          alt='Students'
          className={styles.image}
        />
        <h1 className={styles.header} style={{ marginBottom: '20px' }}>
          Select your teachers name
        </h1>

        <ComboBox
          setSelected={setSelected}
          selected={selected}
          teachers={teachers}
        />
        <div className={styles.button} onClick={handleClick}>
          <p
            style={{
              color: 'white',
              fontWeight: 'bold',
              letterSpacing: '1px',
            }}
          >
            Continue
          </p>
        </div>
      </div>
    </div>
  )
}

export default main
