"use client"

import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { setNewsFilter } from "@/redux/features/newsSlice"
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

export function NewsFilter() {
  const dispatch = useDispatch()
  const filters = useSelector((state: RootState) => state.news.filters)

  return (
    <div className="flex gap-4 mb-6">
      <div className="w-[200px]">
        <Select
          value={filters.department}
          onValueChange={(value) =>
            dispatch(setNewsFilter({ type: "department", value }))
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
          value={filters.date}
          onValueChange={(value) =>
            dispatch(setNewsFilter({ type: "date", value }))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Date" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Time</SelectItem>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="week">This Week</SelectItem>
            <SelectItem value="month">This Month</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
