"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  LayoutDashboard,
  FileText,
  Users,
  Newspaper,
  LogOut,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../ui/sidebar"

const adminRoutes = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/complaints", label: "Complaints", icon: FileText },
  { href: "/admin/communities", label: "Communities", icon: Users },
  { href: "/admin/news", label: "News", icon: Newspaper },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const { state } = useSidebar()

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div>
          <Link href="/admin/dashboard" className="flex flex-col items-center">
            <Image
              src="/ub-talk-logo.png"
              alt="ub_talk_logo"
              width={100}
              height={100}
              className="h-10 object-contain"
            />
            {state === "expanded" && (
              <span className="font-bold font-lora">Admin Side</span>
            )}
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {adminRoutes.map((route) => (
                <SidebarMenuItem key={route.label}>
                  <SidebarMenuButton
                    asChild
                    className={cn(
                      "w-full justify-start hover:bg-primary",
                      pathname === route.href && "bg-gray-200 text-primary",
                    )}
                  >
                    <Link href={route.href}>
                      <route.icon />
                      <span>{route.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button variant="ghost" className="w-full justify-start -ml-2">
          <LogOut className="mr-2 h-4 w-4" />
          {state === "expanded" && "Logout"}
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}
