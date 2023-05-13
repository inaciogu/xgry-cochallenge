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
      <AppBar>
        <Toolbar>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Typography
              fontWeight="bold"
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}
            >
              LOGO
            </Typography>
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
                <Link href="/faq">FAQ</Link>
                <Link href="/faq">Manual</Link>
                <Link href="/faq">Painel</Link>
                <Link href="/about">About</Link>
              </Box>
            </Box>
            <Typography
              fontWeight="bold"
              sx={{ display: { xs: 'flex', md: 'none' } }}
            >
              LOGO
            </Typography>
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
              <Link href="/faq">FAQ</Link>
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
