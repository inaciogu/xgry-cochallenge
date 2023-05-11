import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
  darken,
} from '@mui/material'
import { ReactNode } from 'react'

interface ThemeConfigProps {
  children: ReactNode
}

export default function ThemeConfig({ children }: ThemeConfigProps) {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#2F4858',
      },
      secondary: {
        main: '#7BEEFF',
      },
    },
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: 'contained' },
            style: {
              color: 'black',
              backgroundColor: '#98FF98',
              '&:hover': {
                backgroundColor: darken('#98FF98', 0.2),
              },
            },
          },
        ],
      },
    },
  })

  return (
    <StyledEngineProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
