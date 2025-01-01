"use client"

import { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { ComplaintsList } from "@/components/complaints/ComplaintsList"
import { ComplaintForm } from "@/components/complaints/ComplaintForm"
import { ComplaintsFilter } from "@/components/complaints/ComplaintsFilter"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function ComplaintsPage() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const { complaints, filters } = useSelector(
    (state: RootState) => state.complaints,
  )

  const filteredComplaints = complaints.filter((complaint) => {
    const departmentMatch =
      filters.department === "all" ||
      complaint.department === filters.department
    const categoryMatch =
      filters.category === "all" || complaint.category === filters.category
    return departmentMatch && categoryMatch
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold font-lora">Complaints</h1>
        <Button onClick={() => setIsFormOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          New Complaint
        </Button>
      </div>

      <ComplaintsFilter />

      <ComplaintsList complaints={filteredComplaints} />

      <ComplaintForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </div>
  )
}
