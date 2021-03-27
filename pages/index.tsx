import { useState, FormEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import * as EmailValidator from 'email-validator'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'
import { Section, Input, Field, Control, Icon, Button, Level } from 'rbx'

const Home = ({ API_KEY }): JSX.Element => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubscribe = () => {
    if (EmailValidator.validate(email)) {
      axios
        .post(
          '/api/subscribe',
          { email },
          {
            headers: {
              'x-api-key': API_KEY,
            },
          }
        )
        .then((res) => console.log(res))
    } else {
      toast.error('Invalid e-mail!')
    }
  }

  return (
    <Section>
      <Field>
        <Control iconLeft>
          <Input
            size="large"
            type="email"
            placeholder="E-mail"
            onChange={(e: FormEvent<HTMLInputElement>) =>
              setEmail(e.currentTarget.value)
            }
          />
          <Icon size="medium" align="left">
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </Icon>
        </Control>
        <Level>
          <Level.Item>
            <Button color="info" outlined onClick={() => handleSubscribe()}>
              Subscribe
            </Button>
          </Level.Item>
        </Level>
      </Field>
      <ToastContainer />
    </Section>
  )
}

export async function getServerSideProps() {
  const { API_KEY } = process.env

  return {
    props: {
      API_KEY,
    },
  }
}

export default Home
