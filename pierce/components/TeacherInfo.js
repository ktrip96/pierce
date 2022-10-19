import React from 'react'
import styles from './TeacherInfo.module.css'

function TeacherInfo({ selected }) {
  return (
    <div className={styles.teacher_container}>
      <img
        src={`/${selected.avatar}.png`}
        alt='teacher'
        className={styles.image}
      />

      <h1 className={styles.teacher_name}>{selected.name}</h1>
      {selected.ratings.length !== 0 && (
        <p className={styles.teacher_score}>
          Overall score: {returnOverallScore(selected.ratings)}
        </p>
      )}
    </div>
  )
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

export default TeacherInfo
