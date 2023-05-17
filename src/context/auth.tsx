import { User } from '@/interfaces/user'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { ReactNode, createContext, useEffect, useMemo, useState } from 'react'

interface AuthContextData {
  user: User | null
  isAuthenticated: boolean
  setIsAuthenticated: (value: boolean) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextData | null>(null)

interface AuthProviderProps {
  children: ReactNode
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const user = useUser()
  const supabase = useSupabaseClient()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    setIsAuthenticated(!!user)
  }, [user])

  const logout = () => {
    supabase.auth.signOut()
  }

  const value = useMemo(
    () => ({
      user: user?.user_metadata as User,
      isAuthenticated,
      setIsAuthenticated,
      logout,
    }),
    [user, isAuthenticated],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
