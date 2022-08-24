// pages/_app.js
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { teacherContextProvider } from '../context/teacherContext'

function MyApp({ Component, pageProps }) {
  return (
    <teacherContextProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </teacherContextProvider>
  )
}

export default MyApp
