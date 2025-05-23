"use client"

import { useEffect, useState } from "react"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const initialData = [
  {
    name: "Jan",
    MRT: 42.3,
    Bus: 28.7,
    YouBike: 18.2,
    Walking: 12.5,
  },
  {
    name: "Feb",
    MRT: 45.1,
    Bus: 30.2,
    YouBike: 19.8,
    Walking: 13.7,
  },
  {
    name: "Mar",
    MRT: 48.6,
    Bus: 32.4,
    YouBike: 21.5,
    Walking: 14.9,
  },
  {
    name: "Apr",
    MRT: 52.3,
    Bus: 35.1,
    YouBike: 23.4,
    Walking: 16.2,
  },
  {
    name: "May",
    MRT: 56.8,
    Bus: 38.2,
    YouBike: 25.6,
    Walking: 17.8,
  },
]

export function AdminCarbonChart() {
  const [data, setData] = useState<typeof initialData>([])

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setData(initialData)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="h-full w-full">
      {data.length > 0 ? (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis
              label={{ value: "CO2 saved (tonnes)", angle: -90, position: "insideLeft" }}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip formatter={(value: number) => [`${value} tonnes`, ""]} />
            <Legend />
            <Bar dataKey="MRT" stackId="a" fill="#16a34a" />
            <Bar dataKey="Bus" stackId="a" fill="#2563eb" />
            <Bar dataKey="YouBike" stackId="a" fill="#eab308" />
            <Bar dataKey="Walking" stackId="a" fill="#f97316" />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <div className="flex h-full items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-green-200 border-t-green-600" />
        </div>
      )}
    </div>
  )
}
