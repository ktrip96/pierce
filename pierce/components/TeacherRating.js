import React from 'react'
import styles from './TeacherRating.module.css'

function TeacherRating({ selected }) {
  return (
    <div className={styles.teacher_rating}>
      <h1 className={styles.teacher_title}>Teacher's rating</h1>

      {selected.ratings.length === 0 ? (
        <h2 className={styles.teacher_subtitle}>
          This teacher hasn't been rated yet
        </h2>
      ) : (
        <div>
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
      )}
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

export default TeacherRating
