import {
  Award,
  Bike,
  Bus,
  ChevronRight,
  CreditCard,
  MapPin,
  Train,
  TrendingUp,
  Zap,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CarbonSavingsChart } from "@/components/carbon-savings-chart"
import { MobilityMap } from "@/components/mobility-map"
import { RewardsCarousel } from "@/components/rewards-carousel"
import { TransportUsageChart } from "@/components/transport-usage-chart"
import { UserStats } from "@/components/user-stats"
import { AppLayout } from "@/components/app-layout"

export default function Home() {
  return (
    <AppLayout>
      <div className="px-4 pt-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Hi, Min-Li</h1>
            <p className="text-sm text-muted-foreground">Track your green mobility</p>
          </div>
          <div className="bg-primary/10 p-2 rounded-full">
            <Zap className="h-6 w-6 text-primary" />
          </div>
        </div>

        <div className="space-y-4">
          <Card className="overflow-hidden border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-primary/5">
              <CardTitle className="text-sm font-medium">Green Credits</CardTitle>
              <Award className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent className="pt-4">
              <div className="text-3xl font-bold text-primary">248</div>
              <p className="text-xs text-muted-foreground">+18 credits this week</p>
              <div className="mt-4">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span>Monthly goal: 300 credits</span>
                  <span className="font-medium">83%</span>
                </div>
                <Progress value={83} className="h-2 bg-primary/20" indicatorClassName="bg-primary" />
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="outline" size="sm" className="w-full">
                Redeem Credits
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-green-600/5">
              <CardTitle className="text-sm font-medium">CO2 Saved</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent className="pt-4">
              <div className="text-3xl font-bold">62.4 kg</div>
              <p className="text-xs text-muted-foreground">+2.8 kg this week</p>
              <div className="mt-4">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span>Monthly goal: 75 kg</span>
                  <span className="font-medium">83%</span>
                </div>
                <Progress value={83} className="h-2 bg-green-100" indicatorClassName="bg-green-600" />
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="outline" size="sm" className="w-full">
                View Impact Details
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden border-none shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-blue-600/5">
              <CardTitle className="text-sm font-medium">Connected Accounts</CardTitle>
              <CreditCard className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="mr-2 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <CreditCard className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">EasyCard</p>
                    <p className="text-xs text-muted-foreground">Last synced: Today</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center">
                    <Bike className="h-4 w-4 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">YouBike</p>
                    <p className="text-xs text-muted-foreground">Last synced: Yesterday</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="outline" size="sm" className="w-full">
                Connect More Services
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-6 mb-8">
          <h2 className="text-lg font-semibold mb-3">Recent Activity</h2>
          <div className="space-y-3">
            <div className="bg-card rounded-xl p-3 shadow-sm">
              <div className="flex items-start">
                <div className="mr-3 mt-1 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                  <Train className="h-4 w-4 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-sm">MRT Trip</p>
                    <span className="text-xs text-muted-foreground">Today</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Taipei Main Station to Xinyi
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">
                      +3 credits
                    </span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full">
                      0.8 kg CO2 saved
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-3 shadow-sm">
              <div className="flex items-start">
                <div className="mr-3 mt-1 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <Bus className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-sm">Bus Trip</p>
                    <span className="text-xs text-muted-foreground">Yesterday</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Daan Park to Songshan
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">
                      +2 credits
                    </span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full">
                      0.5 kg CO2 saved
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="w-full mt-3">
            View All Activity
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-3">Transport Usage</h2>
          <Card className="border-none shadow-md">
            <CardContent className="pt-4">
              <TransportUsageChart />
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-lg font-semibold mb-3">Carbon Savings</h2>
          <Card className="border-none shadow-md">
            <CardContent className="pt-4">
              <CarbonSavingsChart />
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  )
}
