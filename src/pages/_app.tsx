import AuthProvider from '@/context/auth'
import { createEmotionCache } from '@/styles/emotionCache'
import '@/styles/globals.css'
import {
  CacheProvider,
  EmotionCache,
  ThemeProvider,
  useTheme,
} from '@emotion/react'
import { CssBaseline } from '@mui/material'
import type { AppProps } from 'next/app'

const clienteSideEmotionCache = createEmotionCache()

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function App({
  Component,
  pageProps,
  emotionCache = clienteSideEmotionCache,
}: MyAppProps) {
  const theme = useTheme()

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}
