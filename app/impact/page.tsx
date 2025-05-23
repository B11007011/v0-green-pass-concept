import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { AppLayout } from "@/components/app-layout"
import { CarbonSavingsChart } from "@/components/carbon-savings-chart"

export default function ImpactPage() {
  return (
    <AppLayout>
      <div className="px-4 pt-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight">Impact</h1>
          <p className="text-sm text-muted-foreground">See your environmental contribution</p>
        </div>
        
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <Card className="overflow-hidden border-none shadow-md bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <p className="text-xs text-muted-foreground mb-1">CO2 Saved</p>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">62.4 kg</p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-none shadow-md bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <p className="text-xs text-muted-foreground mb-1">Trees Equivalent</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">3</p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-none shadow-md bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20">
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <p className="text-xs text-muted-foreground mb-1">Fuel Saved</p>
                <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">42 L</p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-none shadow-md bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <p className="text-xs text-muted-foreground mb-1">Green Trips</p>
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">54</p>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold mb-3">Carbon Savings</h2>
            <Card className="overflow-hidden border-none shadow-md">
              <CardContent className="pt-4">
                <CarbonSavingsChart />
              </CardContent>
            </Card>
          </div>
          
          <div className="mb-16">
            <h2 className="text-lg font-semibold mb-3">Community Comparison</h2>
            <Card className="overflow-hidden border-none shadow-md">
              <CardContent className="p-4 space-y-4">
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
        </div>
      </div>
    </AppLayout>
  )
} 