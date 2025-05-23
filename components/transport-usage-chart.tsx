"use client"

import { useEffect, useState } from "react"
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const initialData = [
  { name: "MRT", value: 42, color: "#16a34a" },
  { name: "Bus", value: 28, color: "#2563eb" },
  { name: "YouBike", value: 18, color: "#eab308" },
  { name: "Walking", value: 12, color: "#f97316" },
]

export function TransportUsageChart() {
  const [data, setData] = useState<typeof initialData>([])

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setData(initialData)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="h-[300px] w-full">
      {data.length > 0 ? (
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={2}
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value: number) => [`${value}%`, "Usage"]} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <div className="flex h-full items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-green-200 border-t-green-600" />
        </div>
      )}
    </div>
  )
}
