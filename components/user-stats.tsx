"use client"

import { useEffect, useState } from "react"
import { Bike, Bus, Train, User } from "lucide-react"

import { Progress } from "@/components/ui/progress"

const stats = [
  {
    id: 1,
    name: "MRT Trips",
    value: 24,
    icon: Train,
    color: "bg-green-100",
    iconColor: "text-green-600",
    progress: 80,
  },
  {
    id: 2,
    name: "Bus Trips",
    value: 18,
    icon: Bus,
    color: "bg-blue-100",
    iconColor: "text-blue-600",
    progress: 60,
  },
  {
    id: 3,
    name: "YouBike Rides",
    value: 12,
    icon: Bike,
    color: "bg-yellow-100",
    iconColor: "text-yellow-600",
    progress: 40,
  },
  {
    id: 4,
    name: "Total Distance",
    value: "156 km",
    icon: User,
    color: "bg-purple-100",
    iconColor: "text-purple-600",
    progress: 70,
  },
]

export function UserStats() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="flex h-[200px] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-green-200 border-t-green-600" />
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {stats.map((stat) => (
        <div key={stat.id} className="flex items-center gap-4">
          <div className={`h-10 w-10 rounded-full ${stat.color} flex items-center justify-center`}>
            <stat.icon className={`h-5 w-5 ${stat.iconColor}`} />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="font-medium">{stat.name}</span>
              <span>{stat.value}</span>
            </div>
            <Progress value={stat.progress} className="h-2 mt-1" />
          </div>
        </div>
      ))}
    </div>
  )
}
