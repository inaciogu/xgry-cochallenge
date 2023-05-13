import { useAuth } from '@/hooks/useAuth'
import Navbar from '@/layouts/NavBar'
import { Stack } from '@mui/material'
import queryString from 'query-string'
import { useEffect } from 'react'

export default function Dashboard() {
  const { setIsAuthenticated } = useAuth()

  useEffect(() => {
    const url = new URL(window.location.href)
    const params = queryString.parse(url.hash)
    const accessToken = params.access_token

    if (accessToken) {
      window.localStorage.setItem('token', accessToken as string)
      setIsAuthenticated(true)
    }
  }, [setIsAuthenticated])

  return (
    <Stack>
      <Navbar />
      <h1>dashboard</h1>
    </Stack>
  )
}
