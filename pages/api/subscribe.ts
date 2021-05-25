import { NextApiRequest, NextApiResponse } from 'next'
import { nanoid } from 'nanoid'
import nodemailer from 'nodemailer'
import mjml from 'mjml'
import mustache from 'mustache'

import connectToDatabase, {
  checkExistingEmailVerification,
  checkExistingEmailSubscription,
} from 'utils/mongodb'
import authMiddleware from 'utils/authMiddleware'

import verifyTemplate from 'email/verify'

import { VerificationsCollection } from 'interfaces/dbCollections'

const verifyHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    NEXT_PUBLIC_API_KEY,
    GMAIL_PASSWORD,
    GMAIL_USER,
    NODE_ENV,
    HOST_URL,
  } = process.env
  const {
    body: { email },
    method,
    headers,
  } = req

  if (headers['x-api-key'] !== NEXT_PUBLIC_API_KEY)
    return res.status(401).end('Not Authorized')

  if (!email) return res.status(400).end('E-mail missing')

  switch (method) {
    case 'POST': {
      const { db } = await connectToDatabase()
      const verificationCollection = db.collection<VerificationsCollection>(
        'verification'
      )

      if (await checkExistingEmailVerification(email)) {
        return res.status(400).end('E-mail already on verification list')
      }

      if (await checkExistingEmailSubscription(email)) {
        return res.status(400).end('E-mail already on subscription list')
      }

      const id = nanoid(12)

      verificationCollection.insertOne({
        _id: id,
        email,
        createdAt: new Date(),
      })

      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        secure: true,
        port: 465,
        auth: {
          user: GMAIL_USER,
          pass: GMAIL_PASSWORD,
        },
      })

      const renderedMJML = mustache.render(verifyTemplate, {
        id,
        host: NODE_ENV === 'development' ? 'localhost:3000' : HOST_URL,
      })

      const { html } = mjml(renderedMJML)

      await transporter.sendMail({
        from: `"Vinnumálastofnun Reminder" <${GMAIL_USER}>`,
        to: email,
        subject: 'Verify your e-mail',
        text: 'E-mail verification', // TODO
        html,
      })

      return res
        .status(200)
        .end('E-mail successfully added to verification list')
    }
    default:
      res.setHeader('Allow', ['POST'])
      return res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default authMiddleware(verifyHandler)
