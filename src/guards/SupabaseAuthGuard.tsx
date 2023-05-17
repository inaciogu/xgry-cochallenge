import { useAuth } from '@/hooks/useAuth'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { ReactNode } from 'react'

interface AuthGuardProps {
  children: ReactNode
}

export default function SupabaseAuthGuard({ children }: AuthGuardProps) {
  const { isAuthenticated } = useAuth()
  const supabase = useSupabaseClient()

  if (!isAuthenticated) {
    supabase.auth.onAuthStateChange((_, session) => {
      if (!session) {
        window.location.href = '/signIn'
      }
    })
    return null
  }

  return <>{children}</>
}
