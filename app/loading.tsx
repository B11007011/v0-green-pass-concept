import { Loading } from '@/components/ui/loading'

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Loading variant="spinner" text="Loading..." />
    </div>
  )
} 