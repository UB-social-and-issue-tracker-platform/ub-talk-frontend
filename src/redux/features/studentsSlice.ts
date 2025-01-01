import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type StudentLevel = 200 | 300 | 400 | 500 | 600

export interface Student {
  id: string
  name: string
  email: string
  department: string
  level: StudentLevel
  bio?: string
  avatar?: string
  socialLinks?: {
    linkedin?: string
    github?: string
    twitter?: string
  }
}

interface StudentsState {
  students: Student[]
  filters: {
    department: string | "all"
    level: StudentLevel | "all"
  }
}

const initialState: StudentsState = {
  students: [],
  filters: {
    department: "all",
    level: "all",
  },
}

const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    setStudentFilter: (
      state,
      action: PayloadAction<{
        type: "department" | "level"
        value: string | number | "all"
      }>,
    ) => {
      const { type, value } = action.payload
      state.filters[type] = value as any
    },
  },
})

export const { setStudentFilter } = studentsSlice.actions
export default studentsSlice.reducer
