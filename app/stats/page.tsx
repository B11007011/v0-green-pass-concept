import { BarChart2, Bike, Bus, Train, User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { AppLayout } from "@/components/app-layout"
import { UserStats } from "@/components/user-stats"

export default function StatsPage() {
  return (
    <AppLayout>
      <div className="px-4 pt-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight">Stats</h1>
          <p className="text-sm text-muted-foreground">Your mobility statistics</p>
        </div>
        
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <Card className="overflow-hidden border-none shadow-md">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Train className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">MRT Trips</p>
                    <p className="text-2xl font-bold">24</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-none shadow-md">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Bus className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Bus Trips</p>
                    <p className="text-2xl font-bold">18</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-none shadow-md">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
                    <Bike className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Bike Rides</p>
                    <p className="text-2xl font-bold">12</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-none shadow-md">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <User className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Distance</p>
                    <p className="text-2xl font-bold">156<span className="text-sm font-normal ml-1">km</span></p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold mb-3">Monthly Progress</h2>
            <Card className="overflow-hidden border-none shadow-md">
              <CardContent className="p-4 space-y-5">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <Train className="h-4 w-4 text-green-600" />
                      <span className="text-sm">MRT Trips</span>
                    </div>
                    <span className="font-medium">80%</span>
                  </div>
                  <Progress value={80} className="h-2 bg-green-100" indicatorClassName="bg-green-600" />
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <Bus className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">Bus Trips</span>
                    </div>
                    <span className="font-medium">60%</span>
                  </div>
                  <Progress value={60} className="h-2 bg-blue-100" indicatorClassName="bg-blue-600" />
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <Bike className="h-4 w-4 text-yellow-600" />
                      <span className="text-sm">Bike Rides</span>
                    </div>
                    <span className="font-medium">40%</span>
                  </div>
                  <Progress value={40} className="h-2 bg-yellow-100" indicatorClassName="bg-yellow-600" />
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <BarChart2 className="h-4 w-4 text-purple-600" />
                      <span className="text-sm">Total Progress</span>
                    </div>
                    <span className="font-medium">75%</span>
                  </div>
                  <Progress value={75} className="h-2 bg-purple-100" indicatorClassName="bg-purple-600" />
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mb-16">
            <h2 className="text-lg font-semibold mb-3">Weekly Summary</h2>
            <Card className="overflow-hidden border-none shadow-md">
              <CardContent className="pt-4">
                <UserStats />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  )
} 