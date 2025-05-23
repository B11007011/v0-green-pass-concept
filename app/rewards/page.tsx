import { Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AppLayout } from "@/components/app-layout"
import { RewardsCarousel } from "@/components/rewards-carousel"

export default function RewardsPage() {
  return (
    <AppLayout>
      <div className="px-4 pt-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight">Rewards</h1>
          <p className="text-sm text-muted-foreground">Redeem your green credits</p>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between bg-primary/10 rounded-xl p-4">
            <div>
              <p className="text-sm font-medium">Your Credits</p>
              <p className="text-3xl font-bold text-primary">248</p>
            </div>
            <Award className="h-10 w-10 text-primary" />
          </div>
          
          <div>
            <h2 className="text-lg font-semibold mb-3">Featured Rewards</h2>
            <div className="rounded-xl overflow-hidden border-none shadow-md bg-card">
              <RewardsCarousel />
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3">Available Rewards</h2>
            <div className="space-y-4">
              <Card className="overflow-hidden border-none shadow-md">
                <div className="flex">
                  <div className="w-1/3 bg-green-50 p-4 flex items-center justify-center">
                    <Award className="h-12 w-12 text-green-600" />
                  </div>
                  <div className="w-2/3 p-4">
                    <h3 className="font-medium">7-Eleven Voucher</h3>
                    <p className="text-xs text-muted-foreground">100 NT$ gift card</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center">
                        <Award className="h-3 w-3 text-primary mr-1" />
                        <span className="text-xs font-medium">75 credits</span>
                      </div>
                      <Button size="sm">Redeem</Button>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card className="overflow-hidden border-none shadow-md">
                <div className="flex">
                  <div className="w-1/3 bg-blue-50 p-4 flex items-center justify-center">
                    <Award className="h-12 w-12 text-blue-600" />
                  </div>
                  <div className="w-2/3 p-4">
                    <h3 className="font-medium">Museum Pass</h3>
                    <p className="text-xs text-muted-foreground">Free entry to National Museum</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center">
                        <Award className="h-3 w-3 text-primary mr-1" />
                        <span className="text-xs font-medium">120 credits</span>
                      </div>
                      <Button size="sm">Redeem</Button>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card className="overflow-hidden border-none shadow-md mb-16">
                <div className="flex">
                  <div className="w-1/3 bg-yellow-50 p-4 flex items-center justify-center">
                    <Award className="h-12 w-12 text-yellow-600" />
                  </div>
                  <div className="w-2/3 p-4">
                    <h3 className="font-medium">Utility Discount</h3>
                    <p className="text-xs text-muted-foreground">10% off your next utility bill</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center">
                        <Award className="h-3 w-3 text-primary mr-1" />
                        <span className="text-xs font-medium">200 credits</span>
                      </div>
                      <Button size="sm">Redeem</Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
} 