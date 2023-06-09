import CarIssues from '@/components/CarIssues'
import SupabaseAuthGuard from '@/guards/SupabaseAuthGuard'
import Dashboard from '@/layouts/Dashboard'
import Head from 'next/head'
import { useState } from 'react'

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
          <CarIssues carImage={carImage} toggleCarImage={toggleCarImage} />
        </Dashboard>
      </SupabaseAuthGuard>
    </>
  )
}
