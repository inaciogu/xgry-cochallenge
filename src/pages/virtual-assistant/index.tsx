import SupabaseAuthGuard from '@/guards/SupabaseAuthGuard'
import Dashboard from '@/layouts/Dashboard'
import SendIcon from '@mui/icons-material/Send'
import { Box, IconButton, Stack, TextField, Typography } from '@mui/material'
import { createParser } from 'eventsource-parser'
import { Coda } from 'next/font/google'
import Head from 'next/head'
import { FormEvent, useState } from 'react'

const coda = Coda({
  weight: '400',
  subsets: ['latin'],
})

interface ChatCompletionStreamResponse {
  id: string
  choices: Array<{
    delta: {
      content: string
    }
  }>
  usage: {
    prompt_tokens: number
    completion_tokens: number
    total_tokens: number
  }
}

export default function VirtualAssistant() {
  const [chatQuestion, setChatQuestion] = useState('')
  const [chatAnswer, setChatAnswer] = useState('')

  const sendQuestion = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!chatQuestion) return

    setChatAnswer('')
    const res = await fetch('/api/chat-completion-stream', {
      method: 'POST',
      body: JSON.stringify({ question: chatQuestion }),
    })
    const reader = res.body?.getReader()
    const parser = createParser((event) => {
      if (event.type === 'event') {
        try {
          const data = JSON.parse(event.data) as ChatCompletionStreamResponse
          data.choices.forEach((choice) => {
            if (choice.delta.content) {
              console.log(choice.delta.content)
              setChatAnswer((prev) => `${prev}${choice.delta.content}`)
            }
          })
        } catch (error) {
          console.log(error)
          throw new Error('Error parsing event')
        }
      }
    })
    const decoder = new TextDecoder()
    while (true) {
      const { done, value } = (await reader?.read()) as any
      const dataString = decoder.decode(value)
      if (done || dataString.includes('[DONE]')) {
        break
      }
      parser.feed(decoder.decode(value))
    }
  }
  return (
    <>
      <Head>
        <title>Pilotas.Co | Assistente virtual</title>
        <meta
          name="description"
          content="pilotas co website virtual assistant page"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/wheel.ico" />
      </Head>
      <SupabaseAuthGuard>
        <Dashboard>
          <Stack spacing={3} component="form" onSubmit={sendQuestion}>
            <Typography
              className={coda.className}
              fontSize={{ md: '40px', xs: '25px' }}
            >
              Olá, eu me chamo <b>Bertha</b> e sou a sua{' '}
              <b>assistente virtual</b> especialista em mecânica! Qual a sua
              dúvida?
            </Typography>
            <TextField
              value={chatQuestion}
              variant="filled"
              onChange={(event) => setChatQuestion(event.target.value)}
              InputProps={{
                endAdornment: (
                  <IconButton
                    color="primary"
                    type="submit"
                    disabled={!chatQuestion}
                  >
                    <SendIcon />
                  </IconButton>
                ),
              }}
            />
          </Stack>
          <Box mt={5}>
            <Typography className={coda.className}>{chatAnswer}</Typography>
          </Box>
        </Dashboard>
      </SupabaseAuthGuard>
    </>
  )
}
