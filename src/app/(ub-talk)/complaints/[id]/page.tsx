import { ComplaintDetail } from "@/components/complaints/ComplaintDetail"

export default function ComplaintDetailPage({
  params,
}: {
  params: { id: string }
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Complaint Details</h1>
      <ComplaintDetail complaintId={params.id} />
    </div>
  )
}
