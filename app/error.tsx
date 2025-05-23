'use client'

import { useEffect } from 'react'
import { ErrorBoundary } from '@/components/error-boundary'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return <ErrorBoundary error={error} reset={reset} />
} 