import { NextPageContext } from 'next'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'
import { Section, Field, Button, Level } from 'rbx'

import connectToDatabase from 'util/mongodb'

import NotFound from 'assets/svg/NotFound.svg'

type Props = {
  validId: boolean
}

const Unsubscribe = ({ validId }: Props): JSX.Element => {
  const router = useRouter()
  const { id } = router.query

  const handleUnsubscribe = async () => {
    try {
      await axios.post(`/api/unsubscribe?id=${id}`)
    } catch {
      toast.error('Error occurred while unsubscribing!')
    }
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
