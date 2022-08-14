import styles from '../styles/Main.module.css'
import { useState } from 'react'
import Router from 'next/router'

function main() {
  const [teacher, setTeacher] = useState('')
  return (
    <div className={styles.outter_container}>
      <div className={styles.container}>
        <img
          src={'/angry_teacher.webp'}
          alt='Students'
          className={styles.image}
        />
        <h1 className={styles.header}>Select your teachers name</h1>
        <select
          id='teacher'
          value={teacher}
          onChange={(e) => setTeacher(e.target.value)}
        >
          <option value=''>-- Choose Teacher --</option>
          <option value='Jerry'>Jerry</option>
          <option value='Vasiliki'>Vasiliki</option>
          <option value='Kostadinos'>Kostadinos</option>
        </select>
        <div
          className={styles.button}
          onClick={() => {
            if (teacher === '') alert('Please select teacher first')
            else Router.push(`/${teacher}`)
          }}
        >
          <p
            style={{ color: 'white', fontWeight: 'bold', letterSpacing: '1px' }}
          >
            Continue
          </p>
        </div>
      </div>
    </div>
  )
}

export default main
