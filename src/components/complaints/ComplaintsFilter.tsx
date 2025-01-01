"use client"

import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import {
  Department,
  ComplaintCategory,
  setFilter,
} from "@/redux/features/ComplaintsSlice"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const departments: Department[] = [
  "Computer Science",
  "Engineering",
  "Business",
  "Arts",
  "Science",
  "Student Affairs",
  "Administration",
]

const categories: ComplaintCategory[] = [
  "Academic",
  "Administrative",
  "Facilities",
  "Technical",
  "Other",
]

export function ComplaintsFilter() {
  const dispatch = useDispatch()
  const filters = useSelector((state: RootState) => state.complaints.filters)

  return (
    <div className="flex gap-4 mb-6">
      <div className="w-[200px]">
        <Select
          value={filters.department}
          onValueChange={(value) =>
            dispatch(setFilter({ type: "department", value }))
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
          value={filters.category}
          onValueChange={(value) =>
            dispatch(setFilter({ type: "category", value }))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
