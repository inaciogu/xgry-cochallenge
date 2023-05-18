import { GetCarTroubleshootingAnswers } from '@/useCases/getCarTroubleshootingAnswers'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const getCarTroubleshootingAnswers = new GetCarTroubleshootingAnswers()
  const response = await getCarTroubleshootingAnswers.execute()

  res.status(200).json(response)
}
