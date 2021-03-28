import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import mjml from 'mjml'
import mustache from 'mustache'

import connectToDatabase from 'util/mongodb'
import mjmlTemplate from 'email/reminder'

type Email = {
  id: string
  email: string
  enabled: boolean
}

const remindHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { NEXT_PUBLIC_API_KEY, GMAIL_PASSWORD, GMAIL_USER } = process.env
  const { method, headers } = req

  if (headers['x-api-key'] !== NEXT_PUBLIC_API_KEY)
    return res.status(401).end('Not Authorized')

  switch (method) {
    case 'GET': {
      const { db } = await connectToDatabase()
      const collection = db.collection('emails')

      const emails: Array<Email> = await collection
        .find({ enabled: true })
        .toArray()

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: GMAIL_USER,
          pass: GMAIL_PASSWORD,
        },
      })

      emails.forEach(async (item: Email) => {
        const renderedMJML = mustache.render(mjmlTemplate, { id: item.id })
        const { html } = mjml(renderedMJML)

        await transporter.sendMail({
          from: `"Vinnumálastofnun Reminder" <${GMAIL_USER}>`,
          to: item.email,
          subject: 'Vinnumálastofnun Reminder',
          text: 'Hello world?',
          html,
        })
      })
      return res.status(200).end()
    }
    default:
      res.setHeader('Allow', ['GET'])
      return res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default remindHandler
