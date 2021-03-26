import type { AppProps } from 'next/app'

import 'bulma-pro/css/bulma.css'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
