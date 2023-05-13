import Navbar from '@/layouts/NavBar'
import { Stack } from '@mui/material'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pilotas.co home page</title>
        <meta name="description" content="pilotas co website home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{
          backgroundImage: 'url(/background.png)',
        }}
      >
        <Stack width="100%" pt={5} height="200px" sx={{ background: '' }}>
          <Navbar />
        </Stack>
      </main>
    </>
  )
}
