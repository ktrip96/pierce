import styles from '../styles/Main.module.css'
import { useContext, useEffect, useState } from 'react'
import Router from 'next/router'
import ComboBox from '../components/ComboBox'
import TeacherContext from '../context/TeacherContext'
import axios from 'axios'

function main() {
  const { setSelected, selected } = useContext(TeacherContext)
  const [teachers, setTeachers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`http://${location.hostname}:3000/api/teacher`)
      .then(function (response) {
        setTeachers(response.data.data)
        setIsLoading(false)
      })
  }, [])

  return (
    <div className={styles.outter_container}>
      {isLoading ? (
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Loading ...</h1>
      ) : (
        <div className={styles.container}>
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
          <div
            className={styles.button}
            onClick={() => {
              if (selected === '') alert('Please select teacher first')
              else Router.push(`/${selected.name}`)
            }}
          >
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
      )}
    </div>
  )
}

export default main
