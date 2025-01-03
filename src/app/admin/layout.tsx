import { AdminSidebar } from "@/components/admin/AdminSidebar"
import { ModeToggle } from "@/components/ModeToggle"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

const UBTLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <SidebarTrigger />
          <ModeToggle />
        </div>
        {children}
      </main>
    </SidebarProvider>
  )
}
export default UBTLayout
