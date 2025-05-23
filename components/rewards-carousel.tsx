"use client"

import { useEffect, useState } from "react"
import { Award, ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const rewards = [
  {
    id: 1,
    title: "7-Eleven Voucher",
    description: "100 NT$ gift card",
    credits: 75,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Museum Pass",
    description: "Free entry to National Museum",
    credits: 120,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Utility Discount",
    description: "10% off your next utility bill",
    credits: 200,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "YouBike Credit",
    description: "Free 30-day YouBike pass",
    credits: 150,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "EV Scooter Discount",
    description: "5% off new EV scooter purchase",
    credits: 500,
    image: "/placeholder.svg?height=200&width=300",
  },
]

export function RewardsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === rewards.length - 3 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? rewards.length - 3 : prevIndex - 1))
  }

  if (loading) {
    return (
      <div className="flex h-[200px] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-green-200 border-t-green-600" />
      </div>
    )
  }

  return (
    <div className="relative">
      <div className="flex items-center space-x-4 overflow-hidden">
        {rewards.slice(currentIndex, currentIndex + 3).map((reward) => (
          <Card key={reward.id} className="min-w-[250px] flex-1">
            <CardContent className="p-4">
              <div className="aspect-video relative rounded-md overflow-hidden bg-green-50 flex items-center justify-center mb-3">
                <img src={reward.image || "/placeholder.svg"} alt={reward.title} className="object-contain h-16" />
              </div>
              <h3 className="font-medium">{reward.title}</h3>
              <p className="text-sm text-muted-foreground">{reward.description}</p>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center">
                  <Award className="h-4 w-4 text-green-600 mr-1" />
                  <span className="text-sm font-medium">{reward.credits} credits</span>
                </div>
                <Button size="sm" variant="outline">
                  Redeem
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute -left-4 top-1/2 transform -translate-y-1/2 rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute -right-4 top-1/2 transform -translate-y-1/2 rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next</span>
      </Button>
    </div>
  )
}
