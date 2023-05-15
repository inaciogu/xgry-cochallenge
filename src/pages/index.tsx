import Navbar from '@/layouts/NavBar'
import { Box, Button, Stack, Typography, useTheme } from '@mui/material'
import Head from 'next/head'
import DarkWheelIcon from '../../public/DarkWheelIcon'
import { Coda, Rubik } from 'next/font/google'
import Overlay from '@/layouts/Overlay'
import HomeCard from '@/components/HomeCard'
import Footer from '@/layouts/Footer'

const rubik = Rubik({
  subsets: ['latin'],
  weight: '400',
})

const coda = Coda({
  subsets: ['latin'],
  weight: '400',
})

const cardData = [
  {
    key: 1,
    head: 'BIBLIOTECAS TÉCNICAS',
    text: 'Cada detalhe sobre seu véiculo explicado de forma simples',
  },
  {
    key: 2,
    head: 'PASSO A PASSO DE REPAROS',
    text: 'Realize você mesma reparos simples no seu carro',
  },
  {
    key: 3,
    head: 'ATENDIMENTO ESPECIALIZADO',
    text: 'Indicamos as melhores oficinas mecânicas perto da sua casa',
  },
  {
    key: 4,
    head: 'MULHERES INSPIRADORAS',
    text: 'Valorizamos a história de mulheres no segmento automotivo',
  },
]

export default function Home() {
  const { palette } = useTheme()

  return (
    <>
      <Head>
        <title>Pilotas.Co | Home</title>
        <meta name="description" content="pilotas co website home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/wheel.ico" />
      </Head>
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
        }}
      >
        <Stack
          width="100%"
          spacing={5}
          sx={{
            backgroundImage: 'url(/background.png)',
            backgroundSize: 'cover',
          }}
        >
          <Overlay />
          <Navbar />
          <Stack
            px={8}
            py={10}
            spacing={2}
            width={{ md: '524px', sm: '100%', xs: '100%' }}
            zIndex={9}
          >
            <Box className={rubik.className}>
              <Typography
                color="#fff"
                variant="h3"
                fontSize={{ md: '70px', sm: '60px', xs: '50px' }}
                lineHeight="80px"
                letterSpacing="0.1em"
              >
                Você no
              </Typography>
              <Box display="flex" alignItems="center">
                <Typography
                  color={palette.secondary.main}
                  variant="h3"
                  fontSize={{ md: '70px', sm: '60px', xs: '50px' }}
                  lineHeight="80px"
                >
                  C{' '}
                </Typography>
                <Box
                  component="img"
                  src="/wheel.png"
                  alt=""
                  width="90px"
                  height={{ md: '60px', sm: '50px', xs: '45px' }}
                  ml={-2}
                />
                <Typography
                  color="#fff"
                  variant="h3"
                  fontSize={{ md: '70px', sm: '60px', xs: '50px' }}
                  lineHeight="80px"
                  letterSpacing="0.1em"
                  ml={-2}
                >
                  .ntrole
                </Typography>
              </Box>
            </Box>
            <Typography color="#fff" className={rubik.className}>
              Ajudamos <b>mulheres</b> a saber o que fazer quando o carro
              precisa de reparo.
            </Typography>
            <Button
              variant="contained"
              startIcon={<DarkWheelIcon />}
              sx={{
                borderRadius: '30px',
                width: '233px',
                height: '41px',
              }}
            >
              <Typography className={coda.className} color="#2F4858">
                COMECE AGORA
              </Typography>
            </Button>
          </Stack>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-evenly"
            flexWrap="wrap"
            zIndex={9}
            gap={2}
          >
            {cardData.map((card) => (
              <HomeCard key={card.key} head={card.head} text={card.text} />
            ))}
          </Box>
        </Stack>
        <Box
          px={8}
          py={14}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack spacing={3} width="451px">
            <Typography
              variant="h4"
              className={rubik.className}
              fontSize="30px"
              lineHeight="35px"
              letterSpacing="0.1em"
              alignItems="center"
            >
              Facilitando sua <b>relação</b> com <b>seu carro</b>
            </Typography>
            <Typography className={rubik.className}>
              O Pilotas.Co nasceu com o objetivo de ajudar mulheres a entender
              mais sobre seus veículos e se sentirem seguras quando for
              necessário realizar alguma manutenção,{' '}
              <b>sem precisar de ninguém</b>.
            </Typography>
            <Typography className={rubik.className}>
              Aqui, você série de recursos para ajudar as mulheres a aprender
              sobre os diferentes sistemas do carro, como o motor, freios,
              transmissão e suspensão. Além disso, nossa plataforma fornece
              <b>tutoriais</b> passo a passo para as{' '}
              <b>mulheres executarem reparos</b> em seus carros, desde a troca
              de óleo até a substituição de peças.
            </Typography>
            <Button
              variant="contained"
              startIcon={<DarkWheelIcon />}
              sx={{
                borderRadius: '30px',
                width: '233px',
                height: '41px',
              }}
            >
              <Typography className={coda.className} color="#2F4858">
                COMECE AGORA
              </Typography>
            </Button>
          </Stack>
          <Box
            component="img"
            src="/mechanic.png"
            alt="mechanic"
            sx={{ display: { md: 'flex', xs: 'none' } }}
          />
        </Box>
      </main>
      <Footer />
    </>
  )
}
