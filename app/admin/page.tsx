import Link from "next/link"
import { ArrowUpRight, BarChart3, ChevronRight, Download, MapPin, Settings, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AdminCarbonChart } from "@/components/admin-carbon-chart"
import { AdminHeatmap } from "@/components/admin-heatmap"
import { AdminUserStats } from "@/components/admin-user-stats"

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">GreenPass Admin</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium">
              Dashboard
            </Link>
            <Link href="#" className="text-sm font-medium">
              Users
            </Link>
            <Link href="#" className="text-sm font-medium">
              Analytics
            </Link>
            <Link href="#" className="text-sm font-medium">
              Settings
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              <MapPin className="mr-2 h-4 w-4" />
              Taipei
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container px-4 py-6 md:py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
            <p className="text-muted-foreground">Monitor and manage the GreenPass system</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12,548</div>
                <p className="text-xs text-muted-foreground">+124 from last week</p>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span>Monthly growth</span>
                    <span className="font-medium">+8.2%</span>
                  </div>
                  <Progress value={82} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total CO2 Saved</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">782.4 tonnes</div>
                <p className="text-xs text-muted-foreground">+42.1 tonnes from last week</p>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span>Monthly target</span>
                    <span className="font-medium">78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Zones</CardTitle>
                <MapPin className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">+2 from last month</p>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span>Coverage</span>
                    <span className="font-medium">65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Credits Issued</CardTitle>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.1M</div>
                <p className="text-xs text-muted-foreground">+215K from last week</p>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span>Redemption rate</span>
                    <span className="font-medium">42%</span>
                  </div>
                  <Progress value={42} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="mt-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="zones">Zones</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-6 pt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Carbon Savings Overview</CardTitle>
                    <CardDescription>Total CO₂ savings across all zones</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px]">
                    <AdminCarbonChart />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Top Performing Zones</CardTitle>
                    <CardDescription>Zones with highest carbon savings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">Xinyi District</span>
                          <span>182.4 tonnes</span>
                        </div>
                        <Progress value={92} className="h-2" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">Daan District</span>
                          <span>156.8 tonnes</span>
                        </div>
                        <Progress value={78} className="h-2" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">Songshan District</span>
                          <span>124.2 tonnes</span>
                        </div>
                        <Progress value={62} className="h-2" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">Zhongshan District</span>
                          <span>98.6 tonnes</span>
                        </div>
                        <Progress value={49} className="h-2" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">Wanhua District</span>
                          <span>76.3 tonnes</span>
                        </div>
                        <Progress value={38} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      View All Zones
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Transport Distribution</CardTitle>
                    <CardDescription>Usage by transport type</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">MRT</span>
                          <span>42%</span>
                        </div>
                        <Progress value={42} className="h-2 bg-green-100" indicatorClassName="bg-green-600" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">Bus</span>
                          <span>28%</span>
                        </div>
                        <Progress value={28} className="h-2 bg-blue-100" indicatorClassName="bg-blue-600" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">YouBike</span>
                          <span>18%</span>
                        </div>
                        <Progress value={18} className="h-2 bg-yellow-100" indicatorClassName="bg-yellow-600" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">Walking</span>
                          <span>12%</span>
                        </div>
                        <Progress value={12} className="h-2 bg-orange-100" indicatorClassName="bg-orange-600" />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      Download Report
                      <Download className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="zones" className="space-y-6 pt-6">
              <Card className="col-span-full">
                <CardHeader>
                  <CardTitle>Carbon Savings Heatmap</CardTitle>
                  <CardDescription>Geographic distribution of carbon savings</CardDescription>
                </CardHeader>
                <CardContent className="h-[500px]">
                  <AdminHeatmap />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="users" className="space-y-6 pt-6">
              <Card className="col-span-full">
                <CardHeader>
                  <CardTitle>User Statistics</CardTitle>
                  <CardDescription>User engagement and activity metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <AdminUserStats />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
