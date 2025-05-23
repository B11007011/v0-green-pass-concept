"use client"

import { useEffect, useState } from "react"
import { MapPin } from "lucide-react"

export function MobilityMap() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative h-full w-full rounded-md overflow-hidden bg-gray-100">
      {loading ? (
        <div className="flex h-full items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-green-200 border-t-green-600" />
        </div>
      ) : (
        <>
          <div className="absolute inset-0 bg-slate-50">
            {/* Simulated map with grid lines */}
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            >
              {/* Simulated routes */}
              <svg width="100%" height="100%" className="absolute inset-0">
                {/* MRT route */}
                <path
                  d="M100,200 C150,180 200,220 250,150 C300,80 350,120 400,100"
                  stroke="#16a34a"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray="10,5"
                />

                {/* Bus route */}
                <path
                  d="M120,300 C170,280 220,320 270,250 C320,180 370,220 420,200"
                  stroke="#2563eb"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray="10,5"
                />

                {/* YouBike route */}
                <path
                  d="M150,250 C200,230 250,270 300,200 C350,130 400,170 450,150"
                  stroke="#eab308"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray="10,5"
                />
              </svg>

              {/* Location markers */}
              <div className="absolute top-[100px] left-[100px] transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-green-600 text-white rounded-full p-1">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="mt-1 bg-white text-xs px-2 py-1 rounded shadow-sm">Home</div>
              </div>

              <div className="absolute top-[150px] left-[450px] transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-blue-600 text-white rounded-full p-1">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="mt-1 bg-white text-xs px-2 py-1 rounded shadow-sm">Office</div>
              </div>

              <div className="absolute top-[300px] left-[200px] transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-yellow-600 text-white rounded-full p-1">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="mt-1 bg-white text-xs px-2 py-1 rounded shadow-sm">Gym</div>
              </div>

              <div className="absolute top-[200px] left-[350px] transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-orange-600 text-white rounded-full p-1">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="mt-1 bg-white text-xs px-2 py-1 rounded shadow-sm">Mall</div>
              </div>
            </div>
          </div>

          {/* Map legend */}
          <div className="absolute bottom-4 left-4 bg-white p-2 rounded-md shadow-md">
            <div className="text-xs font-medium mb-1">Routes</div>
            <div className="flex items-center gap-2 text-xs">
              <div className="w-3 h-1 bg-green-600"></div>
              <span>MRT</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="w-3 h-1 bg-blue-600"></div>
              <span>Bus</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="w-3 h-1 bg-yellow-600"></div>
              <span>YouBike</span>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
