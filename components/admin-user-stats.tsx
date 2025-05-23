"use client"

import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const users = [
  {
    id: 1,
    name: "Min-Li Chen",
    district: "Xinyi",
    credits: 248,
    co2Saved: "62.4 kg",
    lastActive: "Today",
    status: "Active",
  },
  {
    id: 2,
    name: "Wei-Ting Lin",
    district: "Daan",
    credits: 312,
    co2Saved: "78.5 kg",
    lastActive: "Yesterday",
    status: "Active",
  },
  {
    id: 3,
    name: "Yu-Hsuan Chang",
    district: "Songshan",
    credits: 186,
    co2Saved: "46.2 kg",
    lastActive: "3 days ago",
    status: "Active",
  },
  {
    id: 4,
    name: "Chien-Wei Huang",
    district: "Zhongshan",
    credits: 274,
    co2Saved: "68.9 kg",
    lastActive: "Today",
    status: "Active",
  },
  {
    id: 5,
    name: "Mei-Ling Wu",
    district: "Wanhua",
    credits: 142,
    co2Saved: "35.8 kg",
    lastActive: "1 week ago",
    status: "Inactive",
  },
]

export function AdminUserStats() {
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
    <div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>District</TableHead>
              <TableHead>Credits</TableHead>
              <TableHead>CO₂ Saved</TableHead>
              <TableHead>Last Active</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.district}</TableCell>
                <TableCell>{user.credits}</TableCell>
                <TableCell>{user.co2Saved}</TableCell>
                <TableCell>{user.lastActive}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      user.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {user.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-muted-foreground">Showing 5 of 12,548 users</div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
