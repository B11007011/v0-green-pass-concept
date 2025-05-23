"use client"

import { useEffect, useState } from "react"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const initialData = [
  { day: "May 1", value: 1.2 },
  { day: "May 2", value: 0.8 },
  { day: "May 3", value: 2.1 },
  { day: "May 4", value: 1.5 },
  { day: "May 5", value: 0.9 },
  { day: "May 6", value: 0 },
  { day: "May 7", value: 0 },
  { day: "May 8", value: 2.3 },
  { day: "May 9", value: 1.8 },
  { day: "May 10", value: 1.4 },
  { day: "May 11", value: 2.0 },
  { day: "May 12", value: 1.7 },
  { day: "May 13", value: 0.6 },
  { day: "May 14", value: 0.3 },
  { day: "May 15", value: 2.2 },
  { day: "May 16", value: 1.9 },
  { day: "May 17", value: 1.6 },
  { day: "May 18", value: 2.4 },
  { day: "May 19", value: 1.3 },
  { day: "May 20", value: 0.7 },
  { day: "May 21", value: 0.5 },
  { day: "May 22", value: 2.5 },
  { day: "May 23", value: 2.8 },
  { day: "May 24", value: 2.1 },
  { day: "May 25", value: 1.8 },
  { day: "May 26", value: 1.5 },
  { day: "May 27", value: 0.9 },
  { day: "May 28", value: 0.4 },
  { day: "May 29", value: 2.6 },
  { day: "May 30", value: 2.2 },
]

export function CarbonSavingsChart() {
  const [data, setData] = useState<typeof initialData>([])

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setData(initialData)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const formatTick = (value: string) => {
    const parts = value.split(" ")
    if (parts.length === 2) {
      const day = Number.parseInt(parts[1])
      return day % 5 === 0 ? `May ${day}` : ""
    }
    return ""
  }

  return (
    <div className="h-[300px] w-full">
      {data.length > 0 ? (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} tickFormatter={formatTick} />
            <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12 }} tickFormatter={(value) => `${value} kg`} />
            <Tooltip
              formatter={(value: number) => [`${value} kg CO2`, "Carbon Saved"]}
              labelFormatter={(label) => label}
            />
            <Area type="monotone" dataKey="value" stroke="#16a34a" fill="#dcfce7" strokeWidth={2} name="Carbon Saved" />
          </AreaChart>
        </ResponsiveContainer>
      ) : (
        <div className="flex h-full items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-green-200 border-t-green-600" />
        </div>
      )}
    </div>
  )
}
