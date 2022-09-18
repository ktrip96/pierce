import styles from '../styles/Rating.module.css'
import { FaStar } from 'react-icons/fa'
import { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { RiArrowGoBackFill } from 'react-icons/ri'
import { FiLogOut } from 'react-icons/fi'
import { signOut, useSession } from 'next-auth/react'
import axios from 'axios'
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

  const { selected, setSelected } = useContext(TeacherContext)
  const router = useRouter()
  const { data: session } = useSession()

  console.log({ selected })

  const handleCommentChange = (event) => {
    // 👇️ update textarea value
    setComment(event.target.value)
  }

  const handleCommentSubmit = (event) => {
    const data = {
      name: selected.name,
      comment: {
        user: session.user.name,
        comment: comment,
        userImage: session.user.image,
      },
    }
    axios
      .post(`http://${location.hostname}:3000/api/teacher/comments`, data)
      .then(function (response) {
        console.log(response)
        axios
          .get(`http://${location.hostname}:3000/api/teacher/single`, {
            params: {
              name: data.name,
            },
          })
          .then(function (response) {
            console.log(response.data)
            setSelected(response.data.message[0])
          })
        alert('Successfully added your comment')
      })
  }

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
    axios
      .post(`http://${location.hostname}:3000/api/teacher/ratings`, data)
      .then(function (response) {
        console.log(response)
        axios
          .get(`http://${location.hostname}:3000/api/teacher/single`, {
            params: {
              name: data.name,
            },
          })
          .then(function (response) {
            console.log(response.data)
            setSelected(response.data.message[0])
          })
        alert('Successfully added your rating')
      })
  }

  // funny , fair , strict, homework
  if (!session) {
    return <h1>Loading</h1>
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
        <div className={styles.teacher_container}>
          <img
            src={`/${selected.avatar}.webp`}
            alt='teacher'
            className={styles.image}
          />

          <h1 className={styles.teacher_name}>{selected.name}</h1>
          <p className={styles.teacher_score}>
            Overall score: {returnOverallScore(selected.ratings)}
          </p>
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
            <div
              style={{
                overflowY: 'scroll',
                height: '300px',
                width: '300px',
                marginTop: '10px',
                paddingRight: '30px',
              }}
            >
              {selected.comments.map((item) => (
                <div className={styles.same_line}>
                  <img
                    src={item.userImage}
                    alt='teacher'
                    style={{
                      width: '40px',
                      height: '40px',
                      marginRight: '10px',
                      marginTop: '5px',
                      borderRadius: '50%',
                    }}
                  />
                  <textarea
                    readOnly
                    className={styles.text_area}
                    id='comment'
                    name='comment'
                    value={item.comment}
                  ></textarea>
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className={styles.same_line}>
                <img
                  src={session.user.image}
                  alt={session.user.name}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    marginRight: '10px',
                  }}
                />
                <textarea
                  className={styles.text_area}
                  id='comment'
                  name='comment'
                  value={comment}
                  onChange={handleCommentChange}
                ></textarea>
              </div>
              <div className={styles.button} onClick={handleCommentSubmit}>
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
            Funny: <span> {calculateAverage(selected.ratings).funny}/5</span>
          </h1>
          <h1
            className={styles.teacher_subtitle}
            style={{ fontSize: '1.4rem' }}
          >
            Fair: <span> {calculateAverage(selected.ratings).fair}/5</span>
          </h1>
          <h1
            className={styles.teacher_subtitle}
            style={{ fontSize: '1.4rem' }}
          >
            Strict: <span> {calculateAverage(selected.ratings).strict}/5</span>
          </h1>
          <h1
            className={styles.teacher_subtitle}
            style={{ fontSize: '1.4rem' }}
          >
            Homework:{' '}
            <span> {calculateAverage(selected.ratings).homework}/5</span>
          </h1>
        </div>
      </div>
    </div>
  )
}

function calculateAverage(ratingArray) {
  const ratingsLength = ratingArray.length
  let finalFunny = 0
  let finalStrict = 0
  let finalFair = 0
  let finalHomework = 0

  for (let i = 0; i < ratingArray.length; i++) {
    finalFunny = finalFunny + ratingArray[i].funny
    finalStrict = finalStrict + ratingArray[i].strict
    finalFair = finalFair + ratingArray[i].fair
    finalHomework = finalHomework + ratingArray[i].funny
  }

  finalFunny = finalFunny / ratingArray.length
  finalStrict = finalStrict / ratingArray.length
  finalFair = finalFair / ratingArray.length
  finalHomework = finalHomework / ratingArray.length

  const finalObject = {
    funny: parseFloat(finalFunny.toPrecision(2)),
    strict: parseFloat(finalStrict.toPrecision(2)),
    fair: parseFloat(finalFair.toPrecision(2)),
    homework: parseFloat(finalHomework.toPrecision(2)),
  }
  return finalObject
}

function returnOverallScore(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum =
      sum + array[i].funny + array[i].strict + array[i].fair + array[i].homework
  }

  let average = sum / (array.length * 4)
  average = parseFloat(average.toPrecision(2))
  return average
}

export default Rating
