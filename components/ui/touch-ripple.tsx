"use client"

import React, { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface TouchRippleProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string
  duration?: number
}

export function TouchRipple({
  children,
  className,
  color = "rgba(255, 255, 255, 0.4)",
  duration = 500,
  ...props
}: TouchRippleProps) {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number; size: number }>>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const nextRippleId = useRef(0)

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const touch = e.touches[0]
    const x = touch.clientX - rect.left
    const y = touch.clientY - rect.top
    const size = Math.max(rect.width, rect.height) * 2

    const newRipple = { id: nextRippleId.current, x, y, size }
    nextRippleId.current += 1
    setRipples((prevRipples) => [...prevRipples, newRipple])
  }

  useEffect(() => {
    const timers: NodeJS.Timeout[] = []

    ripples.forEach((ripple) => {
      const timer = setTimeout(() => {
        setRipples((prevRipples) => prevRipples.filter((r) => r.id !== ripple.id))
      }, duration)
      timers.push(timer)
    })

    return () => {
      timers.forEach((timer) => clearTimeout(timer))
    }
  }, [ripples, duration])

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden touch-none", className)}
      onTouchStart={handleTouchStart}
      {...props}
    >
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          style={{
            position: "absolute",
            top: ripple.y - ripple.size / 2,
            left: ripple.x - ripple.size / 2,
            width: ripple.size,
            height: ripple.size,
            borderRadius: "50%",
            backgroundColor: color,
            transform: "scale(0)",
            animation: `ripple ${duration}ms linear`,
            opacity: 0,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 0.5;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
} 