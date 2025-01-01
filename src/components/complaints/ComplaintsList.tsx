"use client"

import { Complaint } from "@/redux/features/ComplaintsSlice"
import Link from "next/link"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ComplaintsListProps {
  complaints: Complaint[]
}

export function ComplaintsList({ complaints }: ComplaintsListProps) {
  if (complaints.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        No complaints found matching the selected filters.
      </div>
    )
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {complaints.map((complaint) => (
        <Card key={complaint.id}>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg">{complaint.title}</CardTitle>
              <Badge>{complaint.category}</Badge>
            </div>
            <CardDescription>
              {complaint.department} •{" "}
              {new Date(complaint.createdAt).toLocaleDateString()}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="truncate">{complaint.description}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Badge
              variant={
                complaint.status === "Pending"
                  ? "default"
                  : complaint.status === "Completed"
                    ? "success"
                    : "destructive"
              }
            >
              {complaint.status}
            </Badge>
            <Link
              href={`/complaints/${complaint.id}`}
              className="text-sm font-medium text-primary hover:underline"
            >
              View Details
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
