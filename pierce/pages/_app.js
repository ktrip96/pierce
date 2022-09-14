// pages/_app.js
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { TeacherContextProvider } from '../context/TeacherContext'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <TeacherContextProvider>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </TeacherContextProvider>
    </SessionProvider>
  )
}

export default MyApp
