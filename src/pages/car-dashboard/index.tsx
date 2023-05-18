import SupabaseAuthGuard from '@/guards/SupabaseAuthGuard'
import Dashboard from '@/layouts/Dashboard'
import { Box, Stack, TextField, Typography } from '@mui/material'
import { Rubik } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

const rubik = Rubik({
  weight: '400',
  subsets: ['latin'],
})

export default function CarDashboard() {
  const [carImage, setCarImage] = useState('/painel.png')

  const toggleCarImage = () => {
    if (carImage === '/painel.png') {
      setCarImage('/painel-detalhes.png')
      return
    }
    setCarImage('/painel.png')
  }

  return (
    <>
      <Head>
        <title>Pilotas.Co | Painel</title>
        <meta
          name="description"
          content="pilotas co website car dashboard page"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/wheel.ico" />
      </Head>
      <SupabaseAuthGuard>
        <Dashboard>
          <Stack spacing={3} justifyContent="center" pb={2}>
            <Box gap={2} display="flex" alignItems="center" flexWrap="wrap">
              <TextField
                variant="standard"
                label="Fabricante"
                select
                sx={{ width: { md: '200px', xs: '100%' } }}
              />
              <TextField
                variant="standard"
                label="Modelo"
                select
                sx={{ width: { md: '200px', xs: '100%' } }}
              />
              <TextField
                variant="standard"
                label="Ano"
                select
                sx={{ width: { md: '200px', xs: '100%' } }}
              />
            </Box>
            <Stack>
              <Typography fontSize="30px" className={rubik.className}>
                Hyundai HB20
              </Typography>
              <Typography fontSize="15px" className={rubik.className}>
                ano: 2022/2023
              </Typography>
            </Stack>
            <Stack>
              <Box
                component="img"
                src={carImage}
                alt="car dashboard"
                onClick={toggleCarImage}
                sx={{ cursor: 'pointer' }}
              />
            </Stack>
            <Link href="/manual">
              <Typography className={rubik.className}>
                Manual do proprietário
              </Typography>
            </Link>
          </Stack>
        </Dashboard>
      </SupabaseAuthGuard>
    </>
  )
}
