import { Student } from "@/redux/features/studentsSlice"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

interface StudentCardProps {
  student: Student
}

export function StudentCard({ student }: StudentCardProps) {
  return (
    <Link href={`/students/${student.id}`}>
      <Card className="hover:bg-accent transition-colors">
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={student.avatar} alt={student.name} />
            <AvatarFallback>
              {student.name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-lg">{student.name}</CardTitle>
            <CardDescription>Level {student.level}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{student.department}</p>
          {student.bio && (
            <p className="text-sm mt-2 line-clamp-2">{student.bio}</p>
          )}
        </CardContent>
      </Card>
    </Link>
  )
}
