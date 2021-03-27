import { NextApiRequest, NextApiResponse } from 'next'
import { nanoid } from 'nanoid'

import connectToDatabase from 'util/mongodb'

const subscribeHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { API_KEY } = process.env
  const {
    body: { email },
    headers,
    method,
  } = req

  if (headers['x-api-key'] !== API_KEY)
    return res.status(401).end('Not Authorized')

  switch (method) {
    case 'POST': {
      const { db } = await connectToDatabase()
      const collection = db.collection('emails')

      const checkExistingemail = await collection
        .findOne({
          email,
        })
        .then((result) => result)

      if (checkExistingemail) {
        return res.status(400).end('E-mail already signed up')
      }

      collection.insertOne({
        _id: nanoid(12),
        email,
        enabled: true,
      })

      return res.status(200).end()
    }
    default:
      res.setHeader('Allow', ['POST'])
      return res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default subscribeHandler
