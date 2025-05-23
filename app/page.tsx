import Link from "next/link"
import {
  ArrowRight,
  Award,
  Bike,
  Bus,
  ChevronRight,
  CreditCard,
  MapPin,
  Train,
  TrendingUp,
  User,
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

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold">GreenPass</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium">
              Dashboard
            </Link>
            <Link href="#" className="text-sm font-medium">
              Rewards
            </Link>
            <Link href="#" className="text-sm font-medium">
              Transport
            </Link>
            <Link href="#" className="text-sm font-medium">
              Impact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              <MapPin className="mr-2 h-4 w-4" />
              Taipei
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">User account</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container px-4 py-6 md:py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Welcome back, Min-Li</h1>
            <p className="text-muted-foreground">Track your green mobility and carbon savings</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-full md:col-span-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Green Credits</CardTitle>
                <Award className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-green-600">248</div>
                <p className="text-xs text-muted-foreground">+18 credits this week</p>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span>Monthly goal: 300 credits</span>
                    <span className="font-medium">83%</span>
                  </div>
                  <Progress value={83} className="h-2 bg-green-100" indicatorClassName="bg-green-600" />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  Redeem Credits
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="col-span-full md:col-span-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">CO2 Saved</CardTitle>
                <TrendingUp className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">62.4 kg</div>
                <p className="text-xs text-muted-foreground">+2.8 kg this week</p>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span>Monthly goal: 75 kg</span>
                    <span className="font-medium">83%</span>
                  </div>
                  <Progress value={83} className="h-2 bg-green-100" indicatorClassName="bg-green-600" />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  View Impact Details
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="col-span-full md:col-span-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Connected Accounts</CardTitle>
                <CreditCard className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
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
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  Connect More Services
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="mt-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="transport">Transport</TabsTrigger>
              <TabsTrigger value="rewards">Rewards</TabsTrigger>
              <TabsTrigger value="impact">Impact</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-6 pt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Carbon Savings</CardTitle>
                    <CardDescription>Your CO2 savings over the past 30 days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CarbonSavingsChart />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Transport Usage</CardTitle>
                    <CardDescription>Your transportation methods this month</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <TransportUsageChart />
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your latest green mobility activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                        <Train className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">MRT Trip: Taipei Main Station to Xinyi</p>
                          <span className="text-xs text-muted-foreground">Today, 8:30 AM</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Distance: 5.2 km • CO2 saved: 0.8 kg • +3 credits
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 mt-1 h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center">
                        <Bike className="h-4 w-4 text-yellow-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">YouBike: Xinyi to Songshan</p>
                          <span className="text-xs text-muted-foreground">Yesterday, 5:45 PM</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Distance: 3.8 km • CO2 saved: 0.6 kg • +5 credits
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 mt-1 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <Bus className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">Bus Trip: Route 307</p>
                          <span className="text-xs text-muted-foreground">Yesterday, 9:15 AM</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Distance: 7.5 km • CO2 saved: 1.2 kg • +4 credits
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    View All Activity
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="transport" className="space-y-6 pt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Mobility Map</CardTitle>
                    <CardDescription>Your green transportation routes in Taipei</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px]">
                    <MobilityMap />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Transport Usage</CardTitle>
                    <CardDescription>Your transportation methods this month</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <TransportUsageChart />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Transport Stats</CardTitle>
                    <CardDescription>Your green mobility statistics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <UserStats />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="rewards" className="space-y-6 pt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Available Rewards</CardTitle>
                  <CardDescription>Redeem your green credits for these rewards</CardDescription>
                </CardHeader>
                <CardContent>
                  <RewardsCarousel />
                </CardContent>
              </Card>

              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">7-Eleven Voucher</CardTitle>
                    <CardDescription>100 NT$ gift card</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video relative rounded-md overflow-hidden bg-green-50 flex items-center justify-center">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="7-Eleven voucher"
                        className="object-contain h-20"
                      />
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <Award className="h-4 w-4 text-green-600 mr-1" />
                        <span className="font-medium">75 credits</span>
                      </div>
                      <Button size="sm">Redeem</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Museum Pass</CardTitle>
                    <CardDescription>Free entry to National Museum</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video relative rounded-md overflow-hidden bg-green-50 flex items-center justify-center">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Museum pass"
                        className="object-contain h-20"
                      />
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <Award className="h-4 w-4 text-green-600 mr-1" />
                        <span className="font-medium">120 credits</span>
                      </div>
                      <Button size="sm">Redeem</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Utility Discount</CardTitle>
                    <CardDescription>10% off your next utility bill</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video relative rounded-md overflow-hidden bg-green-50 flex items-center justify-center">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="Utility discount"
                        className="object-contain h-20"
                      />
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <Award className="h-4 w-4 text-green-600 mr-1" />
                        <span className="font-medium">200 credits</span>
                      </div>
                      <Button size="sm">Redeem</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="impact" className="space-y-6 pt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Your Environmental Impact</CardTitle>
                    <CardDescription>See how your green mobility choices are making a difference</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 md:grid-cols-3">
                      <div className="flex flex-col items-center justify-center p-4 bg-green-50 rounded-lg">
                        <div className="text-3xl font-bold text-green-600 mb-2">62.4 kg</div>
                        <p className="text-sm text-center">CO2 emissions saved</p>
                      </div>
                      <div className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
                        <p className="text-sm text-center">Trees equivalent</p>
                      </div>
                      <div className="flex flex-col items-center justify-center p-4 bg-yellow-50 rounded-lg">
                        <div className="text-3xl font-bold text-yellow-600 mb-2">42</div>
                        <p className="text-sm text-center">Liters of fuel saved</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Carbon Savings</CardTitle>
                    <CardDescription>Your CO2 savings over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CarbonSavingsChart />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Community Impact</CardTitle>
                    <CardDescription>How you compare to other GreenPass users</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">Your rank</span>
                        <span className="font-medium text-green-600">Top 15%</span>
                      </div>
                      <Progress value={85} className="h-2 bg-green-100" indicatorClassName="bg-green-600" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">Taipei average</span>
                        <span className="font-medium">42.1 kg CO2 saved</span>
                      </div>
                      <Progress value={67} className="h-2 bg-blue-100" indicatorClassName="bg-blue-600" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">Your neighborhood</span>
                        <span className="font-medium">51.3 kg CO2 saved</span>
                      </div>
                      <Progress value={82} className="h-2 bg-yellow-100" indicatorClassName="bg-yellow-600" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
