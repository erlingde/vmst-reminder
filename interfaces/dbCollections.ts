export type EmailsCollection = {
  email: string
  enabled: boolean
  _id: string
}

export type VerificationsCollection = {
  email: string
  _id: string
  createdAt: Date
}
