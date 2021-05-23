import type { AppProps } from 'next/app'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import axios from 'axios'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'

import Header from 'components/molecules/Header'

import Logo from 'assets/svg/Logo'

import 'react-toastify/dist/ReactToastify.css'

import { globalStyles, theme } from 'theme'

const Main = styled.main`
  /* filter: invert(1) hue-rotate(180deg); */
  position: relative;
  overflow: hidden;
  min-height: 100%;
  overflow: visible;

  // Dark theme
  /* &:before {
    content: '';
    display: block;
    position: absolute;
    width: 50px;
    height: 50px; */
  /* background-color: ${(props) => props.theme.colors.secondary}; */
  /* filter: invert(1) hue-rotate(180deg);
    border-radius: 50%;
    animation:  1s ease forwards;
  } */
`

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
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NextSeo
        title="VMST Reminder"
        description="Get a monthly reminder when to verify job search."
      />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header>
          <a href="/">
            <Logo width="60" height="60" color={theme.colors.primary} />
          </a>
        </Header>
        <Main>
          <Component {...pageProps} />
        </Main>
      </ThemeProvider>
      <ToastContainer />
    </>
  )
}

export default App
