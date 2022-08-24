import styles from '../styles/Main.module.css'
import { useState } from 'react'
import Router from 'next/router'
import ComboBox from '../components/ComboBox'

function main() {
  const [selected, setSelected] = useState('')

  return (
    <div className={styles.outter_container}>
      <div className={styles.container}>
        <img
          src={'/angry_teacher.webp'}
          alt='Students'
          className={styles.image}
        />
        <h1 className={styles.header} style={{ marginBottom: '20px' }}>
          Select your teachers name
        </h1>

        <ComboBox setSelected={setSelected} selected={selected} />
        <div
          className={styles.button}
          onClick={() => {
            if (selected === '') alert('Please select teacher first')
            else Router.push(`/${selected.name}`)
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
