"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Award, BarChart2, Home, LineChart, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { TouchRipple } from "@/components/ui/touch-ripple"

const navItems = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "Transport",
    href: "/transport",
    icon: MapPin,
  },
  {
    name: "Rewards",
    href: "/rewards",
    icon: Award,
  },
  {
    name: "Impact",
    href: "/impact",
    icon: LineChart,
  },
  {
    name: "Stats",
    href: "/stats",
    icon: BarChart2,
  },
]

export function MobileNavigation() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full border-t bg-background pb-safe">
      <div className="mx-auto flex h-16 max-w-md items-center justify-around">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className="w-full h-full"
            >
              <TouchRipple
                className={cn(
                  "flex h-full w-full flex-col items-center justify-center space-y-1",
                  {
                    "text-primary": isActive,
                    "text-muted-foreground": !isActive,
                  }
                )}
                color={isActive ? "rgba(16, 185, 129, 0.2)" : "rgba(100, 100, 100, 0.2)"}
              >
                <item.icon className={cn("h-5 w-5", isActive ? "text-primary" : "text-muted-foreground")} />
                <span className="text-xs font-medium">{item.name}</span>
                {isActive && (
                  <span
                    className="absolute top-0 h-1 w-12 rounded-full bg-primary transition-all duration-200" 
                    style={{ 
                      bottom: '-2px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                    }}
                  />
                )}
              </TouchRipple>
            </Link>
          )
        })}
      </div>
    </div>
  )
} 