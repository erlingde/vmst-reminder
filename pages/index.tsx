import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import * as EmailValidator from 'email-validator'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'
import { Field, Control, Icon, Level, Column } from 'rbx'
import Image from 'next/image'

import Button from 'components/atoms/Button'
import EmailInput from 'components/atoms/EmailInput'

const Home = (): JSX.Element => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubscribe = async () => {
    if (EmailValidator.validate(email)) {
      setIsLoading(true)
      try {
        await axios.post('/api/subscribe', { email })
      } catch {
        setIsLoading(false)
        return toast.error('Invalid e-mail address!')
      }
      toast.success('Success!')
      setIsLoading(false)
    } else {
      toast.error('Invalid e-mail address!')
    }
  }

  return (
    <>
      <Head>
        <title>VMST Reminder</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap"
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
            <Icon size="medium" className="header-icon">
              <FontAwesomeIcon icon={faGithub} className="header-item" />
            </Icon>
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

          <Field>
            <Column.Group centered>
              <Column>
                <Control>
                  <EmailInput
                    size="large"
                    placeholder="E-mail"
                    onChange={setEmail}
                  />
                </Control>
              </Column>
            </Column.Group>
            <Level>
              <Level.Item>
                <Button
                  onClick={() => handleSubscribe()}
                  disabled={isLoading}
                  title="Subscribe"
                  isLoading={isLoading}
                />
              </Level.Item>
            </Level>
          </Field>
        </div>
      </main>
      <ToastContainer />
      <div className="box" />
    </>
  )
}

export default Home
