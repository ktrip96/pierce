// pages/_app.js
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { TeacherContextProvider } from '../context/TeacherContext'

function MyApp({ Component, pageProps }) {
  return (
    <TeacherContextProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </TeacherContextProvider>
  )
}

export default MyApp
