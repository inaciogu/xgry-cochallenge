import { DecodedToken } from '@/interfaces/decodedToken'
import { User } from '@/interfaces/user'
import jwtDecode from 'jwt-decode'
import queryString from 'query-string'
import { ReactNode, createContext, useEffect, useState } from 'react'

interface AuthContextData {
  user: User | null
  isAuthenticated: boolean
}

export const AuthContext = createContext<AuthContextData | null>(null)

interface AuthProviderProps {
  children: ReactNode
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const url = new URL(window.location.href)
    const params = queryString.parse(url.hash)
    const accessToken = params.access_token

    if (accessToken) {
      const decoded: DecodedToken = jwtDecode(accessToken as string)
      setUser(decoded.user_metadata)
      setIsAuthenticated(true)
      window.localStorage.setItem('token', accessToken as string)
      return
    }
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

  return (
    <AuthContext.Provider value={{ user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}
