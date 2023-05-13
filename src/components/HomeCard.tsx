import { Card, Typography } from '@mui/material'
import { Coda, Rubik } from 'next/font/google'

interface HomeCardProps {
  head: string
  text: string
}

const coda = Coda({
  weight: '400',
  subsets: ['latin'],
})

const rubik = Rubik({
  weight: '400',
  subsets: ['latin'],
})

export default function HomeCard({ head, text }: HomeCardProps) {
  return (
    <Card
      sx={{
        background: '#2F4858',
        borderRadius: '30px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(2px)',
        width: '190px',
        height: '157px',
        p: 1,
      }}
    >
      <Typography
        className={coda.className}
        fontSize="15px"
        letterSpacing="0.3em"
        lineHeight="21px"
        textAlign="center"
        mt={1}
        color="#fff"
        sx={{ textDecoration: 'underline' }}
      >
        {head}
      </Typography>
      <Typography
        className={rubik.className}
        textAlign="center"
        fontSize="13px"
        lineHeight="15px"
        mt={1}
        color="#fff"
      >
        {text}
      </Typography>
    </Card>
  )
}
