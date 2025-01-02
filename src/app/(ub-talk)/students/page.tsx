"use client"

import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { StudentFilters } from "@/components/students-board/StudentsFilter"
import { StudentCard } from "@/components/students-board/StudentsCard"

export default function StudentsPage() {
  const { students, filters } = useSelector(
    (state: RootState) => state.students,
  )

  const filteredStudents = students.filter((student) => {
    const departmentMatch =
      filters.department === "all" || student.department === filters.department
    const levelMatch =
      filters.level === "all" || student.level === filters.level
    return departmentMatch && levelMatch
  })

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 font-lora">Students Board</h1>

      <StudentFilters />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredStudents.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  )
}
