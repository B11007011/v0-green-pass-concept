"use client"

import { useEffect } from "react"

export function useAppHeight() {
  useEffect(() => {
    // Fix for mobile viewport height issues, especially in iOS Safari
    const setAppHeight = () => {
      const doc = document.documentElement
      doc.style.setProperty("--app-height", `${window.innerHeight}px`)
    }

    // Set initial height
    setAppHeight()

    // Add event listeners for resize and orientation change
    window.addEventListener("resize", setAppHeight)
    window.addEventListener("orientationchange", setAppHeight)

    // Cleanup
    return () => {
      window.removeEventListener("resize", setAppHeight)
      window.removeEventListener("orientationchange", setAppHeight)
    }
  }, [])
} 