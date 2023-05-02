import { supabaseClient } from '@/config/supabase'

export class SignInWithGoogle {
  constructor(private readonly supabase = supabaseClient) {}

  async execute() {
    const { error } = await this.supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'http://localhost:3000/dashboard',
        scopes: 'profile',
      },
    })

    if (error) {
      throw new Error(`Error signing in: ${error.message}`)
    }
  }
}