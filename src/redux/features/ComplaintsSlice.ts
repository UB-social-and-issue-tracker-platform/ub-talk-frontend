import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid"

export type ComplaintCategory =
  | "Academic"
  | "Administrative"
  | "Facilities"
  | "Technical"
  | "Other"

export type Department =
  | "Computer Science"
  | "Engineering"
  | "Business"
  | "Arts"
  | "Science"
  | "Student Affairs"
  | "Administration"

export interface Attachment {
  id: string
  url: string
  filename: string
}

export interface Comment {
  id: string
  userId: string
  content: string
  createdAt: string
}

export interface Complaint {
  id: string
  title: string
  description: string
  status: "Pending" | "Completed" | "Escalated"
  category: ComplaintCategory
  department: Department
  createdAt: string
  updatedAt: string
  userId: string
  attachments: Attachment[]
  comments: Comment[]
  signatures: string[] // Array of user IDs who have signed the complaint
}

interface ComplaintsState {
  complaints: Complaint[]
  filters: {
    department: Department | "all"
    category: ComplaintCategory | "all"
  }
}

const initialState: ComplaintsState = {
  complaints: [],
  filters: {
    department: "all",
    category: "all",
  },
}

const complaintsSlice = createSlice({
  name: "complaints",
  initialState,
  reducers: {
    addComplaint: (
      state,
      action: PayloadAction<
        Omit<
          Complaint,
          | "id"
          | "createdAt"
          | "updatedAt"
          | "comments"
          | "signatures"
          | "category"
          | "department"
        >
      >,
    ) => {
      const newComplaint: Complaint = {
        ...action.payload,
        id: uuidv4(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        comments: [],
        signatures: [],
      }
      state.complaints.push(newComplaint)
    },
    updateComplaintStatus: (
      state,
      action: PayloadAction<{ id: string; status: Complaint["status"] }>,
    ) => {
      const complaint = state.complaints.find((c) => c.id === action.payload.id)
      if (complaint) {
        complaint.status = action.payload.status
        complaint.updatedAt = new Date().toISOString()
      }
    },
    addComment: (
      state,
      action: PayloadAction<{
        complaintId: string
        userId: string
        content: string
      }>,
    ) => {
      const complaint = state.complaints.find(
        (c) => c.id === action.payload.complaintId,
      )
      if (complaint) {
        complaint.comments.push({
          id: uuidv4(),
          userId: action.payload.userId,
          content: action.payload.content,
          createdAt: new Date().toISOString(),
        })
        complaint.updatedAt = new Date().toISOString()
      }
    },
    signComplaint: (
      state,
      action: PayloadAction<{ complaintId: string; userId: string }>,
    ) => {
      const complaint = state.complaints.find(
        (c) => c.id === action.payload.complaintId,
      )
      if (complaint && !complaint.signatures.includes(action.payload.userId)) {
        complaint.signatures.push(action.payload.userId)
        complaint.updatedAt = new Date().toISOString()
      }
    },
    setFilter: (
      state,
      action: PayloadAction<{
        type: "department" | "category"
        value: Department | ComplaintCategory | "all"
      }>,
    ) => {
      const { type, value } = action.payload
      state.filters[type] = value as any
    },
  },
})

export const {
  addComplaint,
  updateComplaintStatus,
  addComment,
  signComplaint,
  setFilter,
} = complaintsSlice.actions
export default complaintsSlice.reducer
