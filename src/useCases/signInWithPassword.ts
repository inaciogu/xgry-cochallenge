import { supabaseClient } from '@/config/supabase'

interface Request {
  email: string
  password: string
}

export class SignInWithPassword {
  constructor(private readonly supabase = supabaseClient) {}

  async execute(request: Request) {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email: request.email,
      password: request.password,
    })

    if (error) {
      console.log(error)
      throw new Error('Error signing in: ' + error.message)
    }
    return {
      token: data.session?.access_token,
    }
  }
}
