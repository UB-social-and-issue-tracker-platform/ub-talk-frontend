"use client"

import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/redux/store"
import {
  updateComplaintStatus,
  addComment,
  signComplaint,
} from "@/redux/features/ComplaintsSlice"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"

interface ComplaintDetailProps {
  complaintId: string
}

export function ComplaintDetail({ complaintId }: ComplaintDetailProps) {
  const dispatch = useDispatch()
  const complaint = useSelector((state: RootState) =>
    state.complaints.complaints.find((c) => c.id === complaintId),
  )
  const [newComment, setNewComment] = useState("")

  if (!complaint) {
    return <div>Complaint not found</div>
  }

  const handleStatusChange = (
    newStatus: "Pending" | "Completed" | "Escalated",
  ) => {
    dispatch(updateComplaintStatus({ id: complaintId, status: newStatus }))
  }

  const handleAddComment = () => {
    if (newComment.trim()) {
      dispatch(
        addComment({
          complaintId,
          userId: "current-user-id",
          content: newComment,
        }),
      )
      setNewComment("")
    }
  }

  const handleSignComplaint = () => {
    dispatch(signComplaint({ complaintId, userId: "current-user-id" }))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{complaint.title}</CardTitle>
        <CardDescription>
          Created on {new Date(complaint.createdAt).toLocaleDateString()}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>{complaint.description}</p>
        <div>
          <h3 className="font-semibold">Status:</h3>
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
        </div>
        <div>
          <h3 className="font-semibold">Attachments:</h3>
          <ul className="list-disc pl-5">
            {complaint.attachments.map((attachment) => (
              <li key={attachment.id}>
                <a
                  href={attachment.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {attachment.filename}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Comments:</h3>
          <ul className="space-y-2">
            {complaint.comments.map((comment) => (
              <li key={comment.id} className="flex items-start space-x-2">
                <Avatar>
                  <AvatarFallback>
                    {comment.userId.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{comment.userId}</p>
                  <p>{comment.content}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(comment.createdAt).toLocaleString()}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Add a comment:</h3>
          <Textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Type your comment here"
            className="mb-2"
          />
          <Button onClick={handleAddComment}>Add Comment</Button>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div>
          <Button
            onClick={() => handleStatusChange("Pending")}
            variant="outline"
            className="mr-2"
          >
            Mark as Pending
          </Button>
          <Button
            onClick={() => handleStatusChange("Completed")}
            variant="outline"
            className="mr-2"
          >
            Mark as Completed
          </Button>
          <Button
            onClick={() => handleStatusChange("Escalated")}
            variant="outline"
          >
            Escalate
          </Button>
        </div>
        <Button onClick={handleSignComplaint} variant="secondary">
          Sign Complaint ({complaint.signatures.length})
        </Button>
      </CardFooter>
    </Card>
  )
}
