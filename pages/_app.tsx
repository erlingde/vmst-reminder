import type { AppProps } from 'next/app'
import axios from 'axios'

// import 'bulma-pro/css/bulma.css'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'

axios.defaults.headers = {
  'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
