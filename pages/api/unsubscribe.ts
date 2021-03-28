import { NextApiRequest, NextApiResponse } from 'next'
import authMiddleware from 'util/authMiddleware'

import connectToDatabase from 'util/mongodb'

const unsubscribeHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const {
    method,
    query: { id },
  } = req

  switch (method) {
    case 'POST': {
      const { db } = await connectToDatabase()

      const result = await db.collection('emails').updateOne(
        {
          id,
        },
        {
          $set: {
            enabled: false,
          },
        }
      )

      return res.status(result.modifiedCount ? 200 : 400).end()
    }
    default:
      res.setHeader('Allow', ['POST'])
      return res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default authMiddleware(unsubscribeHandler)
