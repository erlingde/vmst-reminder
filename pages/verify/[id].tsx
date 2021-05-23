import { useEffect, useState } from 'react'
import { NextPageContext } from 'next'
import { useRouter } from 'next/router'

import Container from 'components/atoms/Container'
import LoadingSpinner from 'components/atoms/LoadingSpinner'
import VerifyEmailCard from 'components/molecules/VerifyEmailCard'
import Card from 'components/organisms/Card'

import connectToDatabase from 'utils/mongodb'

import { VerificationsCollection } from 'interfaces/dbCollections'

type Props = {
  validId: boolean
  success: boolean
}

const Verify = ({ validId }: Props): JSX.Element => {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!validId) router.push('/')
  }, [])

  if (validId) {
    if (!loading) setLoading(false)
    return (
      <Container>
        <Card front={<VerifyEmailCard />} />
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

  const checkExistingEmail: VerificationsCollection = await db
    .collection('verification')
    .findOne({
      _id: id,
    })

  if (!checkExistingEmail) return { props: { validId: false } }

  await db.collection('verification').deleteOne({
    _id: id,
  })

  await db.collection('emails').insertOne({
    email: checkExistingEmail.email,
    enabled: true,
    _id: id,
  })

  return {
    props: {
      validId: !!checkExistingEmail,
    },
  }
}

export default Verify
