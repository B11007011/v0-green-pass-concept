"use client"

import { useEffect, useState } from "react"

export function AdminHeatmap() {
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
              {/* Simulated heatmap overlay */}
              <div className="absolute inset-0">
                {/* High activity area */}
                <div className="absolute top-[20%] left-[30%] w-[150px] h-[150px] rounded-full bg-red-500 opacity-30 blur-xl"></div>
                <div className="absolute top-[25%] left-[35%] w-[100px] h-[100px] rounded-full bg-red-600 opacity-20 blur-lg"></div>

                {/* Medium activity area */}
                <div className="absolute top-[40%] left-[60%] w-[120px] h-[120px] rounded-full bg-orange-500 opacity-30 blur-xl"></div>
                <div className="absolute top-[45%] left-[65%] w-[80px] h-[80px] rounded-full bg-orange-600 opacity-20 blur-lg"></div>

                {/* Low activity areas */}
                <div className="absolute top-[60%] left-[20%] w-[100px] h-[100px] rounded-full bg-yellow-500 opacity-30 blur-xl"></div>
                <div className="absolute top-[65%] left-[25%] w-[60px] h-[60px] rounded-full bg-yellow-600 opacity-20 blur-lg"></div>

                <div className="absolute top-[70%] left-[70%] w-[80px] h-[80px] rounded-full bg-green-500 opacity-30 blur-xl"></div>
                <div className="absolute top-[75%] left-[75%] w-[50px] h-[50px] rounded-full bg-green-600 opacity-20 blur-lg"></div>
              </div>

              {/* District labels */}
              <div className="absolute top-[15%] left-[25%] bg-white px-2 py-1 rounded shadow-sm text-xs">
                Xinyi District
              </div>

              <div className="absolute top-[35%] left-[55%] bg-white px-2 py-1 rounded shadow-sm text-xs">
                Daan District
              </div>

              <div className="absolute top-[55%] left-[15%] bg-white px-2 py-1 rounded shadow-sm text-xs">
                Songshan District
              </div>

              <div className="absolute top-[65%] left-[65%] bg-white px-2 py-1 rounded shadow-sm text-xs">
                Zhongshan District
              </div>
            </div>
          </div>

          {/* Map legend */}
          <div className="absolute bottom-4 right-4 bg-white p-3 rounded-md shadow-md">
            <div className="text-sm font-medium mb-2">CO2 Savings Intensity</div>
            <div className="flex items-center gap-2 text-xs">
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
              <span>High (150+ tonnes)</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="w-4 h-4 rounded-full bg-orange-500"></div>
              <span>Medium (100-150 tonnes)</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
              <span>Low (50-100 tonnes)</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
              <span>Very Low (under 50 tonnes)</span>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
