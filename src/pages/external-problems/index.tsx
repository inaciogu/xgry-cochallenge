import CarIssues from '@/components/CarIssues'
import SupabaseAuthGuard from '@/guards/SupabaseAuthGuard'
import Dashboard from '@/layouts/Dashboard'
import Head from 'next/head'
import { useState } from 'react'

export default function ExternalProblems() {
  const [carImage, setCarImage] = useState('/carro.png')

  const toggleCarImage = () => {
    if (carImage === '/carro.png') {
      setCarImage('/carro-detalhes.png')
      return
    }
    setCarImage('/carro.png')
  }

  return (
    <>
      <Head>
        <title>Pilotas.Co | Problemas externos</title>
        <meta
          name="description"
          content="pilotas co website external problems page"
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
