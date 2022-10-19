import React, { useState } from 'react'
import styles from './TeacherComments.module.css'
import axios from 'axios'

function TeacherComments({ session, selected, setSelected }) {
  const [comment, setComment] = useState('')
  const [menu, setMenu] = useState(1)

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
        axios
          .get(`http://${location.hostname}:3000/api/teacher/single`, {
            params: {
              name: data.name,
            },
          })
          .then(function (response) {
            setSelected(response.data.message[0])
            setMenu(2)
          })
        alert('Successfully added your comment')
      })
  }

  return (
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
                referrerPolicy='no-referrer'
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
              referrerPolicy='no-referrer'
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
  )
}

export default TeacherComments
