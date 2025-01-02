import { ComplaintDetail } from "@/components/complaints/ComplaintDetail"

export default function ComplaintDetailPage({
  params,
}: {
  params: { id: string }
}) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Complaint Details</h1>
      <ComplaintDetail complaintId={params.id} />
    </div>
  )
}
