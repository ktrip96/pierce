import styles from '../styles/Rating.module.css'
import { FaStar } from 'react-icons/fa'
import { useState, useContext } from 'react'
import TeacherContext from '../context/TeacherContext'

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
  const [menu, setMenu] = useState(1)

  const { selected } = useContext(TeacherContext)

  console.log({ selected })

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
            src={`/${selected.avatar}.webp`}
            alt='teacher'
            className={styles.image}
          />
          <h1 className={styles.teacher_name}>{selected.name}</h1>
          <p className={styles.teacher_score}>Overall score: 4.5</p>
        </div>

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
          <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
            <button
              className={styles.mini_button}
              style={{ backgroundColor: '#4285F4' }}
              onClick={() => setMenu(1)}
            >
              New comment
            </button>
            <button
              className={styles.mini_button}
              style={{ backgroundColor: '#DB4437' }}
              onClick={() => setMenu(2)}
            >
              All comments
            </button>
          </div>

          {menu === 2 ? (
            <div>
              {selected.comments.map((item) => (
                <div className={styles.same_line}>
                  <img
                    src={`/${selected.avatar}.webp`}
                    alt='teacher'
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                    }}
                  />
                  <textarea
                    readOnly
                    className={styles.text_area}
                    id='comment'
                    name='comment'
                    style={{ width: '200px', height: '100px' }}
                    value={item.comment}
                  ></textarea>
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className={styles.same_line}>
                <img
                  src={`/${selected.avatar}.webp`}
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
            </>
          )}
        </div>

        <div className={styles.teacher_rating}>
          <h1 className={styles.teacher_title}>Teacher's rating</h1>

          <br />
          <h1
            className={styles.teacher_subtitle}
            style={{ fontSize: '1.4rem' }}
          >
            Funny: <span> {selected.ratings[0].funny}/5</span>
          </h1>
          <h1
            className={styles.teacher_subtitle}
            style={{ fontSize: '1.4rem' }}
          >
            Fair: <span> {selected.ratings[0].fair}/5</span>
          </h1>
          <h1
            className={styles.teacher_subtitle}
            style={{ fontSize: '1.4rem' }}
          >
            Strict: <span> {selected.ratings[0].strict}/5</span>
          </h1>
          <h1
            className={styles.teacher_subtitle}
            style={{ fontSize: '1.4rem' }}
          >
            Homework: <span> {selected.ratings[0].homework}/5</span>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Rating
