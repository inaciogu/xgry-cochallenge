import SupabaseAuthGuard from '@/guards/SupabaseAuthGuard'
import Dashboard from '@/layouts/Dashboard'
import { Stack, Typography } from '@mui/material'
import { Coda } from 'next/font/google'
import Head from 'next/head'

const coda = Coda({
  weight: '400',
  subsets: ['latin'],
})

export default function Manual() {
  return (
    <>
      <Head>
        <title>Pilotas.Co | Manual</title>
        <meta name="description" content="pilotas co website manual page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/wheel.ico" />
      </Head>
      <SupabaseAuthGuard>
        <Dashboard>
          <Stack spacing={5} justifyContent="center">
            <Typography
              className={coda.className}
              letterSpacing="0.1em"
              fontSize={{ md: '45px', xs: '30px' }}
              variant="h3"
            >
              O <b>manual</b> do <b>seu carro</b> com apenas um clique!
            </Typography>
            <Typography
              className={coda.className}
              letterSpacing="0.1em"
              fontSize="15px"
            >
              Faça download do manual do seu carro e fique por dentro de todas
              as informações sobre o seu veículo.
            </Typography>
            <Typography>
              <a
                download
                href="https://www.hyundai.com.br/content/dam/hmb/download-manuais/Manual_Proprietario_HB20_201907_A1SO_PB95A.pdf"
              >
                Baixar manual do proprietario
              </a>
            </Typography>
          </Stack>
        </Dashboard>
      </SupabaseAuthGuard>
    </>
  )
}
