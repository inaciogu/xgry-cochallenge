import { Google } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useState } from 'react'
import { SignInWithGoogle } from '../../useCases/signInWithGoogle'
import { useSnackbar } from 'notistack'
import Header from './Header'

export default function SignIn() {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    try {
      await axios({
        method: 'POST',
        url: '/api/auth/normal',
        data: formData,
      })
      router.push('/dashboard')
    } catch (error) {
      enqueueSnackbar({ variant: 'error', message: 'Erro ao efetuar o login' })
    } finally {
      setLoading(false)
    }
  }

  const handleSignInWithGoogle = async () => {
    const signInWithGoogle = new SignInWithGoogle()
    await signInWithGoogle.execute()
  }

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Header />
      <Grid
        item
        md={6}
        sx={{
          backgroundImage: 'url(/driver.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />
      <Grid item xs={12} sm={12} md={6} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 15,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1, p: 2 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              onChange={handleChange}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              onChange={handleChange}
              autoComplete="current-password"
            />
            <LoadingButton
              type="submit"
              loading={loading}
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                border: '1px solid #00000033',
                fontSize: '13px',
                letterSpacing: '0.3em',
                fontWeight: 400,
              }}
            >
              Login
            </LoadingButton>
            <Box
              display="flex"
              width="100%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box border="1px solid grey" width="40%" height="0" />
              <Typography>Ou</Typography>
              <Box border="1px solid grey" width="40%" height="0" />
            </Box>
          </Box>
          <Button
            startIcon={<Google />}
            onClick={handleSignInWithGoogle}
            variant="outlined"
          >
            Entrar com google
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}
