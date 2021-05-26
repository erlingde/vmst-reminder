import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import mjml from 'mjml'
import mustache from 'mustache'

import connectToDatabase from 'utils/mongodb'
import authMiddleware from 'utils/authMiddleware'
import reminderTemplate from 'email/reminder'

import { EmailsCollection } from 'interfaces/dbCollections'

const remindHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    NEXT_PUBLIC_API_KEY,
    API_CRON_KEY,
    GMAIL_PASSWORD,
    GMAIL_USER,
    NODE_ENV,
    HOST_URL,
  } = process.env
  const { method, headers } = req

  if (
    headers['x-api-key'] !== NEXT_PUBLIC_API_KEY ||
    headers['x-api-cron-key'] !== API_CRON_KEY
  )
    return res.status(401).end('Not Authorized')

  switch (method) {
    case 'GET': {
      const { db } = await connectToDatabase()
      const collection = db.collection('emails')

      const emails: Array<EmailsCollection> = await collection
        .find({ enabled: true })
        .toArray()

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: GMAIL_USER,
          pass: GMAIL_PASSWORD,
        },
      })

      emails.forEach(async (item: EmailsCollection) => {
        const renderedMJML = mustache.render(reminderTemplate, {
          // eslint-disable-next-line no-underscore-dangle
          id: item._id,
          host: NODE_ENV === 'development' ? 'localhost:3000' : HOST_URL,
        })
        const { html } = mjml(renderedMJML)

        await transporter.sendMail({
          from: `"Vinnumálastofnun Reminder" <${GMAIL_USER}>`,
          to: item.email,
          subject: 'Vinnumálastofnun Reminder',
          text: 'Hello world?', // TODO
          html,
        })
      })

      transporter.close()

      return res.status(200).end()
    }
    default:
      res.setHeader('Allow', ['GET'])
      return res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default authMiddleware(remindHandler)
