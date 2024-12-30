import Header from "@/components/Header"

const UBTLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto w-full max-w-7xl">
      {/* Header Component goes here! */}
      <Header />
      <div className="px-4 py-2">{children}</div>
    </div>
  )
}
export default UBTLayout
