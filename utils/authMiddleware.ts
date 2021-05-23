import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next'

const authMiddleware = (handler: NextApiHandler) => (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { NEXT_PUBLIC_API_KEY } = process.env
  const { headers } = req

  if (headers['x-api-key'] !== NEXT_PUBLIC_API_KEY)
    return res.status(401).end('Not Authorized')

  return handler(req, res)
}

export default authMiddleware
