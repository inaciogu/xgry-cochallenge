// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { SignInWithPassword } from '../../../useCases/signInWithPassword'

type Data = {
  token?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { email, password } = req.body

  const signInWithPassword = new SignInWithPassword()

  const { token } = await signInWithPassword.execute({ email, password })

  res.status(200).json({ token })
}
