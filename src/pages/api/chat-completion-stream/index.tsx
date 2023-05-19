import { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextRequest, context: any) {
  const { question } = await req.json()

  const completion = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      stream: true,
      messages: [
        {
          role: 'system',
          content:
            'Você se chama Bertha e é uma especialista em mecanica que ajuda a tirar dúvidas comuns sobre carros',
        },
        {
          role: 'user',
          content: question,
        },
      ],
    }),
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
  })
  return new Response(completion.body, {
    status: 200,
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
  })
}
