import Logo from '@/components/Logo'
import { useAuth } from '@/hooks/useAuth'
import {
  Book,
  ControlPoint,
  MenuOutlined,
  QuestionAnswer,
} from '@mui/icons-material'
import {
  AppBar,
  Avatar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material'
import { Coda } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const coda = Coda({
  weight: '400',
  subsets: ['latin'],
})

export default function Navbar() {
  const { user, logout } = useAuth()
  const router = useRouter()

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
  const [openDrawer, setOpenDrawer] = useState(false)

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  return (
    <>
      <AppBar
        variant="outlined"
        position="relative"
        color="transparent"
        sx={{ border: 'none' }}
      >
        <Toolbar>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Logo
              sx={{ display: { xs: 'none', md: 'flex' }, color: '#fff', ml: 5 }}
            />
            <Box display="flex">
              <IconButton
                onClick={() => setOpenDrawer(true)}
                sx={{ display: { md: 'none', xs: 'flex' } }}
              >
                <MenuOutlined />
              </IconButton>
            </Box>
            <Logo sx={{ display: { xs: 'flex', md: 'none' } }} />
            <Box display="flex">
              <Box
                sx={{
                  display: { md: 'flex', xs: 'none' },
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                  width: '300px',
                }}
              >
                <Link
                  href="/fac"
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <Typography
                    sx={{ fontSize: '15px', letterSpacing: '0.3em' }}
                    className={coda.className}
                  >
                    FAC
                  </Typography>
                </Link>
                <Link
                  href="/manual"
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <Typography
                    sx={{ fontSize: '15px', letterSpacing: '0.3em' }}
                    className={coda.className}
                  >
                    MANUAL
                  </Typography>
                </Link>
                <Link
                  href="/painel"
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <Typography
                    sx={{ fontSize: '15px', letterSpacing: '0.3em' }}
                    className={coda.className}
                  >
                    PAINEL
                  </Typography>
                </Link>
              </Box>
              <IconButton onClick={handleOpenUserMenu}>
                <Avatar
                  variant="circular"
                  src={user?.avatar_url}
                  alt={user?.name ?? 'L'}
                />
              </IconButton>
            </Box>
            <Menu
              open={!!anchorElUser}
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              onClose={handleCloseUserMenu}
            >
              {user ? (
                <MenuItem onClick={logout}>Sair</MenuItem>
              ) : (
                <MenuItem onClick={() => router.push('/signIn')}>
                  Entrar
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box width={300}>
          <List>
            <ListItem>
              <ListItemIcon>
                <QuestionAnswer />
              </ListItemIcon>
              <Link href="/fac">FAC</Link>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Book />
              </ListItemIcon>
              <Link href="/faq">Manual</Link>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ControlPoint />
              </ListItemIcon>
              <Link href="/faq">Painel</Link>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  )
}
