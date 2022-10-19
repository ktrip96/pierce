import React, { useState } from 'react'
import styles from './TeacherStars.module.css'
import axios from 'axios'
import { FaStar } from 'react-icons/fa'

function TeacherStars({
  selected,
  setSelected,
  session,
  teacherNames,
  setTeacherNames,
}) {
  const [funnyRating, setFunnyRating] = useState(null)
  const [funnyHover, setFunnyHover] = useState(null)

  const [fairRating, setFairRating] = useState(null)
  const [fairHover, setFairHover] = useState(null)

  const [strictRating, setStrictRating] = useState(null)
  const [strictHover, setStrictHover] = useState(null)

  const [homeworkRating, setHomeworkRating] = useState(null)
  const [homeworkHover, setHomeworkHover] = useState(null)

  const handleRatingSubmit = (event) => {
    const data = {
      name: selected.name,
      rating: {
        funny: funnyRating + 1,
        strict: strictRating + 1,
        fair: fairRating + 1,
        homework: homeworkRating + 1,
      },
    }

    console.log('teacherNames', teacherNames)
    console.log('selected name', selected.name)

    if (teacherNames.includes(selected.name)) {
      alert("You can't rate the same teacher twice")
      return
    }

    // Αν είναι η πρώτη φορά που κάνεις κριτική τότε
    // α) Πέρνα την κριτική στη βάση δεδομένων
    axios
      .post(`http://${location.hostname}:3000/api/teacher/ratings`, data)
      .then(function (response) {
        axios
          .get(`http://${location.hostname}:3000/api/teacher/single`, {
            params: {
              name: data.name,
            },
          })
          .then(function (response) {
            setSelected(response.data.message[0])
          })
          .catch((e) => console.error(e))

        // β) Κάνε update τον πίνακα
        axios
          .put(`http://${location.hostname}:3000/api/user`, {
            email: session.user.email,
            teacherName: selected.name,
          })
          .then(function (response) {
            setTeacherNames((prev) => [...prev, selected.name])
          })
          .catch((e) => console.error(e))
        alert('Successfully added your rating')
      })
  }

  return (
    <div className={styles.user_feedback}>
      <div className={styles.rating_line}>
        <h1 className={styles.rating_title}>Funny:</h1>
        <div className={styles.stars}>
          {[...Array(5)].map((star, i) => (
            <label key={i}>
              <input
                type='radio'
                name='funnyRating'
                value={i}
                onClick={() => setFunnyRating(i)}
                style={{ display: 'none' }}
              />
              <FaStar
                key={i}
                size={30}
                color={i <= (funnyHover || funnyRating) ? '#ffc107' : '#e4e5e9'}
                onMouseEnter={() => setFunnyHover(i)}
                onMouseLeave={() => setFunnyHover(null)}
                className={styles.single_star}
              />
            </label>
          ))}
        </div>
      </div>

      <div className={styles.rating_line}>
        <h1 className={styles.rating_title}>Fair:</h1>
        <div className={styles.stars}>
          {[...Array(5)].map((star, i) => (
            <label key={i}>
              <input
                type='radio'
                name='fairRating'
                value={i}
                onClick={() => setFairRating(i)}
                style={{ display: 'none' }}
              />
              <FaStar
                key={i}
                size={30}
                color={i <= (fairHover || fairRating) ? '#ffc107' : '#e4e5e9'}
                onMouseEnter={() => setFairHover(i)}
                onMouseLeave={() => setFairHover(null)}
                className={styles.single_star}
              />
            </label>
          ))}
        </div>
      </div>

      <div className={styles.rating_line}>
        <h1 className={styles.rating_title}>Strict:</h1>
        <div className={styles.stars}>
          {[...Array(5)].map((star, i) => (
            <label key={i}>
              <input
                type='radio'
                name='strictRating'
                value={i}
                onClick={() => setStrictRating(i)}
                style={{ display: 'none' }}
              />
              <FaStar
                key={i}
                size={30}
                color={
                  i <= (strictHover || strictRating) ? '#ffc107' : '#e4e5e9'
                }
                onMouseEnter={() => setStrictHover(i)}
                onMouseLeave={() => setStrictHover(null)}
                className={styles.single_star}
              />
            </label>
          ))}
        </div>
      </div>

      <div className={styles.rating_line}>
        <h1 className={styles.rating_title}>Homework:</h1>
        <div className={styles.stars}>
          {[...Array(5)].map((star, i) => (
            <label key={i}>
              <input
                type='radio'
                name='homeworkRating'
                value={i}
                onClick={() => setHomeworkRating(i)}
                style={{ display: 'none' }}
              />
              <FaStar
                key={i}
                size={30}
                color={
                  i <= (homeworkHover || homeworkRating) ? '#ffc107' : '#e4e5e9'
                }
                onMouseEnter={() => setHomeworkHover(i)}
                onMouseLeave={() => setHomeworkHover(null)}
                className={styles.single_star}
              />
            </label>
          ))}
        </div>
      </div>

      <div className={styles.button} onClick={handleRatingSubmit}>
        <p
          style={{
            color: 'white',
            fontWeight: 'bold',
            letterSpacing: '1px',
          }}
        >
          Submit
        </p>
      </div>
    </div>
  )
}

export default TeacherStars
