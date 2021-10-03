import { useStore } from '@redux/store'
import { Provider } from 'react-redux'
import Head from 'next/head'
import '../styles/globals.css'
import initiator from 'helpers/initiator'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  
  useEffect(() => {
    initiator()
  }, []);
  
  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link 
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer" 
        />
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
