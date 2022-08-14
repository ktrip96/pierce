import styles from '../styles/Rating.module.css'
import { FaStar } from 'react-icons/fa'
import { useState } from 'react'

function Rating() {
  const [funnyRating, setFunnyRating] = useState(null)
  const [funnyHover, setFunnyHover] = useState(null)

  const [fairRating, setFairRating] = useState(null)
  const [fairHover, setFairHover] = useState(null)

  const [strictRating, setStrictRating] = useState(null)
  const [strictHover, setStrictHover] = useState(null)

  const [homeworkRating, setHomeworkRating] = useState(null)
  const [homeworkHover, setHomeworkHover] = useState(null)

  // funny , fair , strict, homework

  return (
    <div className={styles.outter_container}>
      <div className={styles.container}>
        <img src={'/male_avatar.webp'} alt='teacher' className={styles.image} />
        <h1>Maximus Vasileiou</h1>
        <br />
        <div className={styles.rating_line}>
          <h1 className={styles.rating_title}>Funny:</h1>
          <div className={styles.stars}>
            {[...Array(5)].map((star, i) => (
              <label>
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
                  color={
                    i <= (funnyHover || funnyRating) ? '#ffc107' : '#e4e5e9'
                  }
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
              <label>
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
              <label>
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
              <label>
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
                    i <= (homeworkHover || homeworkRating)
                      ? '#ffc107'
                      : '#e4e5e9'
                  }
                  onMouseEnter={() => setHomeworkHover(i)}
                  onMouseLeave={() => setHomeworkHover(null)}
                  className={styles.single_star}
                />
              </label>
            ))}
          </div>
        </div>

        <div className={styles.button}>
          <p
            style={{ color: 'white', fontWeight: 'bold', letterSpacing: '1px' }}
          >
            Submit
          </p>
        </div>
      </div>
    </div>
  )
}

export default Rating
