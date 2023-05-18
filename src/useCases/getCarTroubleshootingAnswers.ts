import axios from 'axios'

interface ChatCompletionResponse {
  id: string
  choices: Array<{
    message: {
      role: string
      content: string
    }
  }>
}

interface OutputDto {
  questions: Array<{
    question: string
    answer: string
  }>
}

export class GetCarTroubleshootingAnswers {
  async execute(): Promise<OutputDto> {
    const popularQuestions = [
      {
        question: 'Por que meu carro está fazendo um ruído estranho ao frear?',
        answer: '',
      },
      {
        question: 'Por que meu carro está consumindo muito combustível?',
        answer: '',
      },
      {
        question: 'Por que meu carro está falhando ou perdendo potência?',
        answer: '',
      },
    ]

    try {
      for (const question of popularQuestions) {
        const chatCompletion = await axios.post<ChatCompletionResponse>(
          'https://api.openai.com/v1/chat/completions',
          {
            model: 'gpt-3.5-turbo',
            messages: [
              {
                role: 'system',
                content:
                  'Você é um especialista em mecanica que ajuda a tirar dúvidas comuns sobre carros',
              },
              {
                role: 'user',
                content: question.question,
              },
            ],
          },
          {
            headers: {
              Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            },
          },
        )
        question.answer = chatCompletion.data.choices[0].message.content
      }
      return {
        questions: popularQuestions,
      }
    } catch (error: any) {
      console.log(error)
      throw new Error(
        `error getting car troubleshooting answers ${error.message}`,
      )
    }
  }
}
