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
} from '@mui/material'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const { user } = useAuth()

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
              <Box
                sx={{
                  display: { md: 'flex', xs: 'none' },
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                  width: '200px',
                }}
              >
                <Link href="/fac">FAC</Link>
                <Link href="/manual">Manual</Link>
                <Link href="/painel">Painel</Link>
              </Box>
            </Box>
            <Logo sx={{ display: { xs: 'flex', md: 'none' } }} />
            <IconButton onClick={handleOpenUserMenu}>
              <Avatar
                variant="circular"
                src={user?.avatar_url}
                alt={user?.name}
              />
            </IconButton>
            <Menu
              open={!!anchorElUser}
              anchorEl={anchorElUser}
              onClose={handleCloseUserMenu}
            >
              <MenuItem>Sair</MenuItem>
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
