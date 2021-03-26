import Link from 'next/link'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import * as EmailValidator from 'email-validator'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'
import {
  Section,
  Card,
  Content,
  Title,
  Input,
  Field,
  Control,
  Icon,
  Button,
  Level,
} from 'rbx'

import Layout from 'components/Layout'

import connectToDatabase from 'util/mongodb'

type Props = {
  isConnected: boolean
}

const Home = ({ isConnected }: Props): JSX.Element => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubscribe = () => {
    if (EmailValidator.validate(email)) {
      axios.post('/api/subscribe', { email }).then((res) => console.log(res))
    } else {
      toast.error('Invalid e-mail!')
    }
  }

  return (
    <Layout>
      <Section>
        <Card>
          <Card.Content>
            <Content>
              <Link href="https://github.com/vercel/next.js#getting-started">
                <a>
                  <Title as="h3">Getting Started &rarr;</Title>
                  <p>Learn more about Next on Github and in their examples</p>
                </a>
              </Link>
              <h1>Is connected: {isConnected ? 'True' : 'False'}</h1>
            </Content>
          </Card.Content>
        </Card>

        <Field>
          <Control iconLeft>
            <Input
              size="large"
              type="email"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
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
    </Layout>
  )
}

export async function getServerSideProps() {
  const { client } = await connectToDatabase()

  const isConnected = await client.isConnected()

  return {
    props: { isConnected },
  }
}

export default Home
