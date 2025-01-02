import { AppSidebar } from "@/components/Sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

const UBTLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="container mx-auto px-4 py-8">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
export default UBTLayout
