"use client"

import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/redux/store"
import { updateComplaintStatus } from "@/redux/features/ComplaintsSlice"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function AdminComplaints() {
  const dispatch = useDispatch()
  const complaints = useSelector(
    (state: RootState) => state.complaints.complaints,
  )

  const handleStatusChange = (complaintId: string, newStatus: string) => {
    dispatch(
      updateComplaintStatus({
        id: complaintId,
        status: newStatus as "Pending" | "Completed" | "Escalated",
      }),
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 font-lora text-primary">
        Manage Complaints
      </h1>
      <Card>
        <CardHeader>
          <CardTitle className="font-lora text-xl">All Complaints</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-expletusSans">Title</TableHead>
                <TableHead className="font-expletusSans">Category</TableHead>
                <TableHead className="font-expletusSans">Status</TableHead>
                <TableHead className="font-expletusSans">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {complaints.length !== 0 &&
                complaints.map((complaint) => (
                  <TableRow key={complaint.id}>
                    <TableCell>{complaint.title}</TableCell>
                    <TableCell>{complaint.category}</TableCell>
                    <TableCell>{complaint.status}</TableCell>
                    <TableCell>
                      <Select
                        onValueChange={(value) =>
                          handleStatusChange(complaint.id, value)
                        }
                        defaultValue={complaint.status}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Change status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Pending">Pending</SelectItem>
                          <SelectItem value="Completed">Completed</SelectItem>
                          <SelectItem value="Escalated">Escalated</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          {complaints.length === 0 && (
            <div className="flex justify-center items-center h-40">
              <p>No complaints to display!</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
