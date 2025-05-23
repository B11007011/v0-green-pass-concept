import { cn } from "@/lib/utils"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "h-5 w-full animate-pulse rounded-md bg-muted",
        className
      )}
      {...props}
    />
  )
}

export function CardSkeleton() {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow animate-pulse">
      <div className="p-6 flex flex-col space-y-3">
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="h-8 w-1/2" />
        <Skeleton className="h-4 w-full" />
        <div className="pt-2">
          <Skeleton className="h-8 w-full" />
        </div>
      </div>
    </div>
  )
}

export function ChartSkeleton() {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow animate-pulse">
      <div className="p-6 flex flex-col space-y-4">
        <Skeleton className="h-6 w-1/3" />
        <Skeleton className="h-4 w-2/3" />
        <div className="space-y-2 pt-4">
          <Skeleton className="h-24 w-full" />
        </div>
      </div>
    </div>
  )
}

export function TableSkeleton() {
  return (
    <div className="w-full overflow-hidden rounded-lg border shadow animate-pulse">
      <div className="p-4">
        <div className="grid gap-3">
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
        </div>
      </div>
    </div>
  )
}

export function ProfileSkeleton() {
  return (
    <div className="flex items-center space-x-4 animate-pulse">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[150px]" />
      </div>
    </div>
  )
}

interface LoadingProps {
  variant?: "spinner" | "dots" | "skeleton" | "card" | "chart" | "table" | "profile";
  text?: string;
  className?: string;
}

export function Loading({ variant = "spinner", text, className }: LoadingProps) {
  if (variant === "spinner") {
    return (
      <div className={cn("flex flex-col items-center justify-center p-4", className)}>
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        {text && <p className="mt-2 text-sm text-muted-foreground">{text}</p>}
      </div>
    )
  }

  if (variant === "dots") {
    return (
      <div className={cn("flex flex-col items-center justify-center p-4", className)}>
        <div className="flex space-x-1">
          <div className="h-2 w-2 animate-bounce rounded-full bg-primary" style={{ animationDelay: "0ms" }} />
          <div className="h-2 w-2 animate-bounce rounded-full bg-primary" style={{ animationDelay: "150ms" }} />
          <div className="h-2 w-2 animate-bounce rounded-full bg-primary" style={{ animationDelay: "300ms" }} />
        </div>
        {text && <p className="mt-2 text-sm text-muted-foreground">{text}</p>}
      </div>
    )
  }

  if (variant === "card") {
    return <CardSkeleton />
  }

  if (variant === "chart") {
    return <ChartSkeleton />
  }

  if (variant === "table") {
    return <TableSkeleton />
  }

  if (variant === "profile") {
    return <ProfileSkeleton />
  }

  return <Skeleton className={className} />
} 