import React, { createContext, useState } from 'react'

const TeacherContext = createContext()

// We use Context because all of React components, will need some global data
// Doing so, we avoid the prop spreading

function TeacherContextProvider(props) {
  const [selected, setSelected] = useState({ ratings: [] })

  return (
    <TeacherContext.Provider
      value={{
        selected,
        setSelected,
      }}
    >
      {props.children}
    </TeacherContext.Provider>
  )
}

export default TeacherContext
export { TeacherContextProvider }
