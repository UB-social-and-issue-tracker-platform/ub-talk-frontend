"use client"

import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { setStudentFilter, StudentLevel } from "@/redux/features/studentsSlice"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const departments = [
  "Computer Science",
  "Engineering",
  "Business",
  "Arts",
  "Science",
]

const levels: StudentLevel[] = [200, 300, 400, 500, 600]

export function StudentFilters() {
  const dispatch = useDispatch()
  const filters = useSelector((state: RootState) => state.students.filters)

  return (
    <div className="flex gap-4 mb-6">
      <div className="w-[200px]">
        <Select
          value={filters.department}
          onValueChange={(value) =>
            dispatch(setStudentFilter({ type: "department", value }))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Departments</SelectItem>
            {departments.map((dept) => (
              <SelectItem key={dept} value={dept}>
                {dept}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="w-[200px]">
        <Select
          value={String(filters.level)}
          onValueChange={(value) =>
            dispatch(setStudentFilter({ type: "level", value }))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Levels</SelectItem>
            {levels.map((level) => (
              <SelectItem key={level} value={String(level)}>
                Level {level}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
