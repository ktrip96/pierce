// pages/_app.js
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { TeacherContextProvider } from '../context/TeacherContext'
import { SessionProvider } from 'next-auth/react'
import Head from 'next/head'

function MyApp({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <TeacherContextProvider>
        <ChakraProvider>
          <Head>
            <title>Schooligangs | Rate your teachers</title>
          </Head>
          <Component {...pageProps} />
        </ChakraProvider>
      </TeacherContextProvider>
    </SessionProvider>
  )
}

export default MyApp
