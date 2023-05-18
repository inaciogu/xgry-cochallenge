import { Box, Stack, TextField, Typography } from '@mui/material'
import { Rubik } from 'next/font/google'
import Link from 'next/link'

const rubik = Rubik({
  weight: '400',
  subsets: ['latin'],
})

interface CarIssuesProps {
  carImage: string
  toggleCarImage: () => void
}

export default function CarIssues({
  carImage,
  toggleCarImage,
}: CarIssuesProps) {
  return (
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
  )
}
