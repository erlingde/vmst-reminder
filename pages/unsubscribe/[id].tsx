import { useEffect, useState } from 'react'
import { NextPageContext } from 'next'
import { useRouter } from 'next/router'

import Container from 'components/atoms/Container'
import LoadingSpinner from 'components/atoms/LoadingSpinner'
import UnsubscribeCard from 'components/molecules/UnsubscribeCard'
import Card from 'components/organisms/Card'

import connectToDatabase, {
  checkExistingEmailSubscriptionById,
} from 'utils/mongodb'

type Props = {
  validId: boolean
}

const Unsubscribe = ({ validId }: Props): JSX.Element => {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!validId) router.push('/')
  }, [])

  if (validId) {
    if (!loading) setLoading(false)
    return (
      <Container>
        <Card front={<UnsubscribeCard />} />
      </Container>
    )
  }

  return (
    <Container>
      <LoadingSpinner />
    </Container>
  )
}

export async function getServerSideProps(context: NextPageContext) {
  const { db } = await connectToDatabase()
  const { id } = context.query

  const checkExistingEmail = await checkExistingEmailSubscriptionById(
    id as string
  )

  if (!checkExistingEmail) return { props: { validId: false } }

  const updateSuccess = await db.collection('emails').updateOne(
    {
      _id: id,
    },
    {
      $set: {
        enabled: false,
      },
    }
  )

  return {
    props: {
      validId: !!updateSuccess,
    },
  }
}

export default Unsubscribe
