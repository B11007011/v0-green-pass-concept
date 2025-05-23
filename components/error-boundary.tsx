"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

interface ErrorBoundaryProps {
  error: Error & { digest?: string }
  reset: () => void
}

export function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex h-[50vh] flex-col items-center justify-center text-center">
      <div className="mb-4 rounded-full bg-destructive/10 p-3">
        <AlertCircle className="h-6 w-6 text-destructive" />
      </div>
      <h2 className="mb-2 text-2xl font-bold">Something went wrong</h2>
      <p className="mb-6 max-w-md text-muted-foreground">
        {error.message || "An unexpected error occurred. Please try again."}
      </p>
      <div className="flex gap-2">
        <Button onClick={() => reset()} variant="default">
          Try again
        </Button>
        <Button onClick={() => window.location.href = "/"} variant="outline">
          Go back home
        </Button>
      </div>
    </div>
  )
}

export function NotFoundError() {
  return (
    <div className="flex h-[50vh] flex-col items-center justify-center text-center">
      <h2 className="mb-2 text-3xl font-bold">404</h2>
      <p className="mb-6 max-w-md text-muted-foreground">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Button onClick={() => window.location.href = "/"} variant="default">
        Go back home
      </Button>
    </div>
  )
}

export function DataError({ message, retry }: { message?: string; retry?: () => void }) {
  return (
    <div className="rounded-lg border bg-card p-8 text-card-foreground shadow">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="mb-4 rounded-full bg-destructive/10 p-3">
          <AlertCircle className="h-6 w-6 text-destructive" />
        </div>
        <h3 className="mb-2 text-xl font-medium">Error Loading Data</h3>
        <p className="mb-4 max-w-md text-sm text-muted-foreground">
          {message || "There was a problem loading the data. Please try again."}
        </p>
        {retry && (
          <Button onClick={retry} variant="outline" size="sm">
            Try Again
          </Button>
        )}
      </div>
    </div>
  )
} 