import Logo from '@/components/Logo'
import { AppBar } from '@mui/material'

export default function Header() {
  return (
    <AppBar sx={{ py: 2, pl: 10, height: '65px' }}>
      <Logo />
    </AppBar>
  )
}
