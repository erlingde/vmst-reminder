import type { AppProps } from 'next/app'
import axios from 'axios'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

// import 'bulma-pro/css/bulma.css'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'

axios.defaults.headers = {
  'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
}

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
    font-family: 'Poppins', sans-serif !important;
    /* min-height: 100vh; */
    color: #333;
    line-height: 1.6;
    }
    h1 {
  font-size: clamp(40px, 5vw, 70px);
}
html {
  background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
}
h1,
h2 {
  font-weight: 300;
  line-height: 1.2;
  margin: 10px 0;
}

p {
  font-size: clamp(1em, 2vw, 2em);
  font-weight: 400;
  margin: 10px 0;
}
`

const theme = {
  colors: {
    primary: '#3498db',
  },
}

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
