import AuthProvider from '@/context/auth'
import GlobalStyles from '@/styles/GlobalStyles'
import { createEmotionCache } from '@/styles/emotionCache'
import ThemeConfig from '@/styles/theme'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import type { AppProps } from 'next/app'
import { SnackbarProvider } from 'notistack'
import { useState } from 'react'

const clienteSideEmotionCache = createEmotionCache()

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function App({
  Component,
  pageProps,
  emotionCache = clienteSideEmotionCache,
}: MyAppProps) {
  const [supabaseClient] = useState(() =>
    createBrowserSupabaseClient({
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_API_URL,
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_API_KEY,
    }),
  )

  return (
    <CacheProvider value={emotionCache}>
      <ThemeConfig>
        <GlobalStyles />
        <SnackbarProvider>
          <SessionContextProvider
            supabaseClient={supabaseClient}
            initialSession={pageProps.initialSession}
          >
            <AuthProvider>
              <Component {...pageProps} />
            </AuthProvider>
          </SessionContextProvider>
        </SnackbarProvider>
      </ThemeConfig>
    </CacheProvider>
  )
}
