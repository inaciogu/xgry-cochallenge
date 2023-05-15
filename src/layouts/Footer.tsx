import Logo from '@/components/Logo'
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material'
import { Rubik } from 'next/font/google'

const rubik = Rubik({
  weight: '400',
  subsets: ['latin'],
})

export default function Footer() {
  const { palette } = useTheme()

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      flexDirection={{ xs: 'column', md: 'row', sm: 'row' }}
      px={2}
      py={3}
      component="footer"
      sx={{ background: palette.primary.main }}
    >
      <Logo sx={{ color: 'white' }} />
      <Stack spacing={2} color="white">
        <Typography
          className={rubik.className}
          alignSelf={{ xs: 'start', md: 'end', sm: 'end' }}
          letterSpacing="0.1em"
        >
          Fique por dentro das novidades
        </Typography>
        <TextField
          placeholder="E-mail"
          InputProps={{
            sx: {
              borderRadius: '30px',
              background: 'white',
              width: { xs: '100%', md: '451px', sm: '90%' },
              alignSelf: { xs: 'center', md: 'end', sm: 'end' },
              height: '41px',
              pr: 0,
            },
            endAdornment: (
              <Button
                variant="contained"
                sx={{ borderRadius: '30px', height: '100%', width: '137px' }}
              >
                Enviar
              </Button>
            ),
          }}
        />
        <Typography
          alignSelf={{ xs: 'start', md: 'end', sm: 'end' }}
          className={rubik.className}
          variant="caption"
        >
          © Pilotas.Co - Todos os direitos reservados
        </Typography>
      </Stack>
    </Box>
  )
}
