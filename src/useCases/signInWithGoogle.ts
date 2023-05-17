import { supabaseClient } from '@/config/supabase'

export class SignInWithGoogle {
  constructor(private readonly supabase = supabaseClient) {}

  async execute() {
    const { error } = await this.supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/manual`,
        scopes: 'profile',
      },
    })

    if (error) {
      throw new Error(`Error signing in: ${error.message}`)
    }
  }
}
