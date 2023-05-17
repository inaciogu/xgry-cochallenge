import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import Logo from '@/components/Logo'
import { Coda } from 'next/font/google'
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MenuOutlined } from '@mui/icons-material'
import { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'

const options = [
  { text: 'FAC', href: '/fac' },
  { text: 'MANUAL', href: '/manual' },
  { text: 'PAINEL CARRO', href: '/painel' },
  { text: 'PROBLEMAS EXTERNOS', href: '/problemas-externos' },
  { text: 'OFICINAS PRÓXIMAS', href: '' },
  { text: 'SUPORTE', href: '' },
]

const coda = Coda({
  weight: '400',
  subsets: ['latin'],
})

export default function Dashboard() {
  const { palette, breakpoints } = useTheme()
  const router = useRouter()
  const { logout, user } = useAuth()

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
  const [openDrawer, setOpenDrawer] = useState(false)

  const isMobile = useMediaQuery(breakpoints.down('md'))

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="absolute"
        sx={{
          width: '100%',
          zIndex: 99999,
        }}
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
                <MenuItem onClick={async () => await router.push('/signIn')}>
                  Entrar
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: isMobile ? '100%' : '354px',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 354,
            boxSizing: 'border-box',
            background: '#110F0F',
          },
        }}
        variant={isMobile ? 'temporary' : 'permanent'}
        open={openDrawer}
        anchor="left"
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {options.map((option) => {
            const isSelected = router.pathname === option.href

            const optionColor = isSelected
              ? palette.secondary.main
              : palette.primary.main
            return (
              <ListItem key={option.text}>
                <ListItemButton>
                  <Link
                    href={option.href}
                    style={{ textDecoration: 'none', color: optionColor }}
                  >
                    <Typography
                      className={coda.className}
                      sx={{ letterSpacing: '0.3em', lineHeight: '21px' }}
                    >
                      {option.text}
                    </Typography>
                  </Link>
                </ListItemButton>
              </ListItem>
            )
          })}
        </List>
      </Drawer>
    </Box>
  )
}
