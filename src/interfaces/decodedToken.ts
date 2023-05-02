import { User } from './user'

export interface DecodedToken {
  sub: string
  user_metadata: User
}
