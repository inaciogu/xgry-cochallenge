import AuthProvider from '@/context/auth'
import GlobalStyles from '@/styles/GlobalStyles'
import { createEmotionCache } from '@/styles/emotionCache'
import ThemeConfig from '@/styles/theme'
import { CacheProvider, EmotionCache } from '@emotion/react'
import type { AppProps } from 'next/app'
import { SnackbarProvider } from 'notistack'

const clienteSideEmotionCache = createEmotionCache()

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function App({
  Component,
  pageProps,
  emotionCache = clienteSideEmotionCache,
}: MyAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeConfig>
        <GlobalStyles />
        <SnackbarProvider>
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </SnackbarProvider>
      </ThemeConfig>
    </CacheProvider>
  )
}
