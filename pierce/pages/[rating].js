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

  const [comment, setComment] = useState('')

  const handleCommentChange = (event) => {
    // 👇️ update textarea value
    setComment(event.target.value)
  }

  // funny , fair , strict, homework

  return (
    <div className={styles.outter_container}>
      <div className={styles.container}>
        <div className={styles.teacher_container}>
          <img
            src={'/male/male_avatar.webp'}
            alt='teacher'
            className={styles.image}
          />
          <h1 className={styles.teacher_name}>Maximus Vasileiou</h1>
          <p className={styles.teacher_score}>Overall score: 4.5</p>
        </div>

        <div className={styles.user_feedback}>
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
                    color={
                      i <= (fairHover || fairRating) ? '#ffc107' : '#e4e5e9'
                    }
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

        <div className={styles.user_comment}>
          <div className={styles.same_line}>
            <img
              src={'/male/male_avatar.webp'}
              alt='teacher'
              style={{ width: '60px', height: '60px', borderRadius: '50%' }}
            />
            <textarea
              className={styles.text_area}
              id='comment'
              name='comment'
              value={comment}
              onChange={handleCommentChange}
            ></textarea>
          </div>
          <div className={styles.button}>
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

        <div className={styles.teacher_rating}>
          <h1 className={styles.teacher_title}>Teacher's rating</h1>

          <br />
          <h1
            className={styles.teacher_subtitle}
            style={{ fontSize: '1.4rem' }}
          >
            Funny: <span> 4.5/5</span>
          </h1>
          <h1
            className={styles.teacher_subtitle}
            style={{ fontSize: '1.4rem' }}
          >
            Fair: <span> 4.5/5</span>
          </h1>
          <h1
            className={styles.teacher_subtitle}
            style={{ fontSize: '1.4rem' }}
          >
            Strict: <span> 4.5/5</span>
          </h1>
          <h1
            className={styles.teacher_subtitle}
            style={{ fontSize: '1.4rem' }}
          >
            Homework: <span> 4.5/5</span>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Rating
