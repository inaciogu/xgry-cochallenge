import { DecodedToken } from '@/interfaces/decodedToken'
import { User } from '@/interfaces/user'
import jwtDecode from 'jwt-decode'
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
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const storedToken = window.localStorage.getItem('token')
    if (storedToken) {
      const decoded: DecodedToken = jwtDecode(storedToken)
      setUser(decoded.user_metadata)
      setIsAuthenticated(true)
      return
    }
    setUser(null)
    setIsAuthenticated(false)
  }, [])

  const logout = () => {
    window.localStorage.removeItem('token')
    setIsAuthenticated(false)
    setUser(null)
  }

  const value = useMemo(
    () => ({
      user,
      isAuthenticated,
      setIsAuthenticated,
      logout,
    }),
    [user, isAuthenticated],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
