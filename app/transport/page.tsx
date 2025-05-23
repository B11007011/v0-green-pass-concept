import { Card, CardContent } from "@/components/ui/card"
import { AppLayout } from "@/components/app-layout"
import { MobilityMap } from "@/components/mobility-map"
import { TransportUsageChart } from "@/components/transport-usage-chart"
import { UserStats } from "@/components/user-stats"

export default function TransportPage() {
  return (
    <AppLayout>
      <div className="px-4 pt-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight">Transport</h1>
          <p className="text-sm text-muted-foreground">Track your green mobility patterns</p>
        </div>

        <div className="space-y-6">
          <Card className="overflow-hidden border-none shadow-md">
            <CardContent className="p-0">
              <div className="h-[250px] relative">
                <MobilityMap />
              </div>
            </CardContent>
          </Card>
          
          <div>
            <h2 className="text-lg font-semibold mb-3">Transport Usage</h2>
            <Card className="overflow-hidden border-none shadow-md">
              <CardContent className="pt-4">
                <TransportUsageChart />
              </CardContent>
            </Card>
          </div>
          
          <div className="mb-16">
            <h2 className="text-lg font-semibold mb-3">Your Stats</h2>
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