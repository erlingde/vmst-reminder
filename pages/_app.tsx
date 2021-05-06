import type { AppProps } from 'next/app'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import axios from 'axios'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import 'react-toastify/dist/ReactToastify.css'
import './index.css'

import { globalStyles, theme } from 'theme'

axios.defaults.headers = {
  'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
}

const GlobalStyle = createGlobalStyle`${globalStyles}`

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NextSeo
        title="VMST Reminder"
        description="Get a monthly reminder when to verify job search."
      />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
