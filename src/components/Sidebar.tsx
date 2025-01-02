"use client"

import Link from "next/link"
import {
  Home,
  Users2,
  FileSpreadsheetIcon,
  Newspaper,
  GraduationCap,
  LogOut,
  User,
  FileText,
  ChevronDown,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/home",
    icon: Home,
  },
  {
    title: "Complaints",
    url: "/complaints",
    icon: FileSpreadsheetIcon,
  },
  {
    title: "News",
    url: "/news",
    icon: Newspaper,
  },
  {
    title: "Communities",
    url: "/communities",
    icon: Users2,
  },
  {
    title: "Student Board",
    url: "/students",
    icon: GraduationCap,
  },
]

export function AppSidebar() {
  const pathname = usePathname()
  const { state } = useSidebar()

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div>
          <Link href="/home" className="flex flex-col items-center">
            <Image
              src="/ub-talk-logo.png"
              alt="ub_talk_logo"
              width={100}
              height={100}
              className="h-10 object-contain"
            />
            {/* {state === "expanded" && (
              <span className="font-bold font-lora">Admin Dashboard</span>
            )} */}
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={cn(
                      "w-full justify-start hover:bg-primary",
                      pathname === item.url && "bg-gray-200 text-primary",
                    )}
                  >
                    <Link
                      href={item.url}
                      className="flex items-center space-x-2 hover:bg-primary hover:text-primary-foreground rounded-md transition-colors"
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-full justify-start -ml-4">
              <Avatar className="h-8 w-8 mr-2">
                <AvatarImage src="/avatars/user-avatar.png" alt="User" />
                <AvatarFallback className="bg-primary text-white font-bold">
                  BD
                </AvatarFallback>
              </Avatar>

              <>
                {state === "expanded" && (
                  <span className="flex-grow text-left">User Name</span>
                )}
                <ChevronDown className="h-4 w-4 opacity-50" />
              </>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <a href="/profile">My Profile</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FileText className="mr-2 h-4 w-4" />
              <span>My Complaints</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Users2 className="mr-2 h-4 w-4" />
              <span>My Communities</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
