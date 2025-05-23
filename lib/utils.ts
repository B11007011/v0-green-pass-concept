import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format a number with commas
 */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US").format(value)
}

/**
 * Format a number to a specified decimal places
 */
export function formatDecimal(value: number, decimals: number = 2): string {
  return value.toFixed(decimals)
}

/**
 * Format a date to a readable string
 */
export function formatDate(date: Date | string): string {
  const dateObj = typeof date === "string" ? new Date(date) : date
  return dateObj.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

/**
 * Format a time to a readable string
 */
export function formatTime(date: Date | string): string {
  const dateObj = typeof date === "string" ? new Date(date) : date
  return dateObj.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  })
}

/**
 * Format a datetime to a readable string
 */
export function formatDateTime(date: Date | string): string {
  const dateObj = typeof date === "string" ? new Date(date) : date
  return `${formatDate(dateObj)}, ${formatTime(dateObj)}`
}

/**
 * Debounce a function
 */
export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout
  return function(...args: Parameters<T>) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}

/**
 * Throttle a function
 */
export function throttle<T extends (...args: any[]) => any>(
  fn: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  return function(...args: Parameters<T>) {
    if (!inThrottle) {
      fn(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

/**
 * Calculate CO2 savings in kg based on distance and transport type
 * These are approximate values and would need to be adjusted for accuracy
 */
export function calculateCO2Savings(distanceKm: number, transportType: string): number {
  // CO2 emissions per km for a standard car (in kg)
  const carEmissions = 0.192
  
  // CO2 emissions per km for different transport types (in kg)
  const emissionsMap: Record<string, number> = {
    bike: 0,
    walk: 0,
    bus: 0.068,
    mrt: 0.041,
    train: 0.037,
    // Default to car emissions if type not found
    default: carEmissions,
  }
  
  const transportEmission = emissionsMap[transportType.toLowerCase()] || emissionsMap.default
  // Calculate savings compared to car
  return parseFloat(((carEmissions - transportEmission) * distanceKm).toFixed(2))
}
