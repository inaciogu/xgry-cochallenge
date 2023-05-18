import { Box, BoxProps, Typography, useTheme } from '@mui/material'
import { Coda } from 'next/font/google'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const coda = Coda({
  weight: '400',
  subsets: ['latin'],
})

export default function Logo({ ...props }: BoxProps) {
  const { palette } = useTheme()
  const router = useRouter()

  return (
    <Box
      display="flex"
      alignItems="center"
      onClick={() => router.push('/')}
      style={{ cursor: 'pointer' }}
      {...props}
    >
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
  )
}
