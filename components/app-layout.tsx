"use client"

import { useEffect } from "react"
import { MobileNavigation } from "@/components/mobile-navigation"
import { useAppHeight } from "@/hooks/use-app-height"

interface AppLayoutProps {
  children: React.ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  // Use the app height hook for fixing mobile height issues
  useAppHeight()

  return (
    <div className="flex flex-col h-full app-safe-area bg-background">
      <div className="flex-1 overflow-hidden">
        <main className="flex-1 h-full mobile-scroll pb-16">
          {children}
        </main>
      </div>
      <MobileNavigation />
    </div>
  )
} 