import React, { createContext, useState } from 'react'

const teacherContext = createContext()

// We use Context because all of React components, will need some global data
// Doing so, we avoid the prop spreading

function teacherContextProvider(props) {
  const [selected, setSelected] = useState('')

  return (
    <teacherContext.Provider
      value={{
        selected,
        setSelected,
      }}
    >
      {props.children}
    </teacherContext.Provider>
  )
}

export default teacherContext
export { teacherContextProvider }
