import SupabaseAuthGuard from '@/guards/SupabaseAuthGuard'
import Dashboard from '@/layouts/Dashboard'
import { Stack, Typography } from '@mui/material'
import axios from 'axios'
import { GetStaticProps } from 'next'
import { Coda } from 'next/font/google'
import Head from 'next/head'

interface FaqProps {
  questions: Array<{
    question: string
    answer: string
  }>
}

const coda = Coda({
  weight: '400',
  subsets: ['latin'],
})

export default function Faq({ questions }: FaqProps) {
  return (
    <>
      <Head>
        <title>Pilotas.Co | FAQ</title>
        <meta name="description" content="pilotas co website FAQ page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/wheel.ico" />
      </Head>
      <SupabaseAuthGuard>
        <Dashboard>
          <Stack spacing={3} py={2}>
            <Typography
              variant="h3"
              fontSize={{ md: '40px', xs: '25px' }}
              className={coda.className}
            >
              Dúvidas mais comuns
            </Typography>
            <Stack spacing={3} justifyContent="center">
              {questions.length &&
                questions.map((item, index) => (
                  <Stack key={index} spacing={1}>
                    <Typography className={coda.className} variant="h6">
                      {item.question}
                    </Typography>
                    <Typography className={coda.className}>
                      {item.answer}
                    </Typography>
                  </Stack>
                ))}
            </Stack>
          </Stack>
        </Dashboard>
      </SupabaseAuthGuard>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/car-troubleshooting-answers`,
  )
  console.log(response.data)

  return {
    props: {
      questions: response.data.questions,
    },
  }
}
