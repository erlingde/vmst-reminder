import { useState, FormEvent } from 'react'
import { NextPageContext } from 'next'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'
import { Section, Input, Field, Control, Icon, Button, Level } from 'rbx'

import connectToDatabase from 'util/mongodb'

import NotFound from 'assets/svg/NotFound.svg'

type Props = {
  validId: boolean
}

const Unsubscribe = ({ validId }: Props): JSX.Element => {
  const router = useRouter()
  const { id } = router.query

  const handleUnsubscribe = () => {
    axios.post(`/api/unsubscribe?id=${id}`).then((res) => console.log(res))
  }

  return (
    <Section>
      <Field>
        <Level>
          <Level.Item>
            {validId && (
              <Button color="info" outlined onClick={() => handleUnsubscribe()}>
                Subscribe
              </Button>
            )}
            {!validId && <NotFound />}
          </Level.Item>
        </Level>
      </Field>
      <ToastContainer />
    </Section>
  )
}

export async function getServerSideProps(context: NextPageContext) {
  const { db } = await connectToDatabase()
  const { id } = context.query

  const checkExistingEmail = await db.collection('emails').findOne({
    id,
    enabled: true,
  })

  return {
    props: {
      validId: !!checkExistingEmail,
    },
  }
}

export default Unsubscribe
