import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { ToastContainer, toast } from 'react-toastify'

import Form from 'components/molecules/Form'

const Home = (): JSX.Element => {
  const displayToast = {
    error: (label: string) => toast.error(label),
    success: (label: string) => toast.success(label),
  }

  return (
    <>
      <Head>
        <title>VMST Reminder</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header>
        <div className="container flex">
          <Link href="/">
            <Image
              src="/Logo.png"
              alt="Logo"
              width="100"
              height="74"
              className="header-item"
            />
          </Link>
          <Link href="https://github.com/erlingde/vmst-reminder">
            <FontAwesomeIcon icon={faGithub} className="header-item github" />
          </Link>
        </div>
      </header>
      <main>
        <div className="container grid">
          <div className="information">
            <h1>Sign up.</h1>
            <h1>
              Enjoy<span className="information--dot">.</span>
            </h1>
            <p>
              Sign up for a monthly e-mail reminder to verify job search on
              Vinnumálastofnun!
            </p>
          </div>
          <Form displayToast={displayToast} />
        </div>
      </main>
      <ToastContainer />
      <div className="box" />
    </>
  )
}

export default Home
