import { AppBar, Box, Typography, useTheme } from '@mui/material'
import { Coda } from 'next/font/google'
import Image from 'next/image'

const coda = Coda({
  weight: '400',
  subsets: ['latin'],
})

export default function Header() {
  const { palette } = useTheme()

  return (
    <AppBar sx={{ py: 2, pl: 10, height: '65px' }}>
      <Box display="flex" alignItems="center">
        <Typography
          letterSpacing="0.3em"
          display="inline-flex"
          fontSize="21px"
          className={coda.className}
        >
          PILOTAS.
        </Typography>
        <Typography
          display="flex"
          alignItems="center"
          color={palette.secondary.main}
          className={coda.className}
          fontSize="21px"
        >
          C
          <Image
            src="/wheel.svg"
            width={40}
            height={25}
            alt="steering wheel"
            style={{
              padding: 0,
              marginLeft: 10,
              marginBottom: 2,
              position: 'absolute',
            }}
          />
        </Typography>
      </Box>
    </AppBar>
  )
}
