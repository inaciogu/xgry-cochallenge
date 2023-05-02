import { createClient } from '@supabase/supabase-js'

const supabaseClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_API_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_API_KEY as string,
)

export { supabaseClient }
