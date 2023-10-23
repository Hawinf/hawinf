import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// import React from 'react'
// import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { LoadingScreen } from '@/components/loading/LoadingScreen';



export default function App({ Component, pageProps }: AppProps) {
  	const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => setLoading(false), 3500)
    }, [])

  return (
  <>
      {
        !loading ? (
          <Component {...pageProps} />
        ) : (
          <LoadingScreen />
        )
      }
      
  </>
  )
}
