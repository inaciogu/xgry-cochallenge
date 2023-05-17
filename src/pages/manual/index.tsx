import SupabaseAuthGuard from '@/guards/SupabaseAuthGuard'

export default function Manual() {
  return (
    <SupabaseAuthGuard>
      <div>
        <h1>Manual</h1>
      </div>
    </SupabaseAuthGuard>
  )
}
