// pages/_app.js
import '../styles/globals.css'
import { TeacherContextProvider } from '../context/TeacherContext'
import { SessionProvider } from 'next-auth/react'
import Head from 'next/head'

function MyApp({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <TeacherContextProvider>
        <Head>
          <title>Schooligangs | Rate your teachers</title>
        </Head>
        <Component {...pageProps} />
      </TeacherContextProvider>
    </SessionProvider>
  )
}

export default MyApp
