import { NextPageContext } from 'next'
import { useRouter } from 'next/router'
import axios from 'axios'

import connectToDatabase from 'util/mongodb'

// import NotFound from 'assets/svg/NotFound.svg'

type Props = {
  validId: boolean
}

const Unsubscribe = ({ validId }: Props): JSX.Element => {
  const router = useRouter()
  const { id } = router.query

  // const handleUnsubscribe = async () => {
  //   try {
  //     await axios.post(`/api/unsubscribe?id=${id}`)
  //   } catch {
  //     toast.error('Error occurred while unsubscribing!')
  //   }
  // }

  // TODO
  return (
    <>
      {validId ? (
        // <Button color="info" outlined onClick={() => handleUnsubscribe()}>
        //   Subscribe
        // </Button>
        <h1>Found!</h1>
      ) : (
        <h1>Not Found!</h1>
      )}
    </>
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
