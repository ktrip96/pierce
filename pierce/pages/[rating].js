import styles from '../styles/Rating.module.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { RiArrowGoBackFill } from 'react-icons/ri'
import { FiLogOut } from 'react-icons/fi'
import { signOut, useSession } from 'next-auth/react'
import TeacherInfo from '../components/TeacherInfo'
import TeacherRating from '../components/TeacherRating'
import TeacherComments from '../components/TeacherComments'
import TeacherStars from '../components/TeacherStars'
import axios from 'axios'

function Rating() {
  const router = useRouter()
  const { data: session } = useSession()
  const [isLoading, setIsLoading] = useState(true)
  const [selected, setSelected] = useState('')
  const [teacherNames, setTeacherNames] = useState([])

  // για να μην κρασάρει η σελίδα στα refresh, την πρώτη φορά που θα κάνει render η σελίδα
  // τράβα τα δεδομένα του καθηγητή
  useEffect(() => {
    if (router.isReady) {
      const teacherName = router.query.rating

      // Get Teacher Info
      axios
        .get(
          `http://${location.hostname}/api/teacher/single?name=${teacherName}`
        )
        .then(function (response) {
          setSelected(response.data.message[0])
          setIsLoading(false)
        })
        .catch((error) => console.error(error))
    }
  }, [router.isReady])

  // Πάρε τον πίνακα με τις κριτικές του κάθε Μαθητή
  // τις χρειαζόμαστε, για να μην αφήνουμε έναν μαθητή να κάνει κριτική 2 φορές σε έναν καθηγητή.

  useEffect(() => {
    if (session) {
      const email = session.user.email

      axios
        .get(`http://${location.hostname}/api/user/single/?name=${email}`)
        .then(function (response) {
          setTeacherNames(response.data.data[0].teacherNames)
        })
        .catch((error) => console.error(error))
    }
  }, [session])

  if (isLoading || !session) {
    return <h1>Loading...</h1>
  }

  return (
    <div className={styles.outter_container}>
      <div className={styles.container}>
        <FiLogOut
          size={40}
          className={styles.logoutIcon}
          onClick={() =>
            signOut({
              callbackUrl: `${window.location.origin}`,
            })
          }
        />

        <RiArrowGoBackFill
          size={40}
          className={styles.backIcon}
          onClick={() => router.push('/main')}
        />

        <TeacherInfo selected={selected} />
        <TeacherRating selected={selected} />
        <TeacherComments
          selected={selected}
          session={session}
          setSelected={setSelected}
        />
        <TeacherStars
          teacherNames={teacherNames}
          selected={selected}
          session={session}
          setSelected={setSelected}
          setTeacherNames={setTeacherNames}
        />
      </div>
    </div>
  )
}

export default Rating
