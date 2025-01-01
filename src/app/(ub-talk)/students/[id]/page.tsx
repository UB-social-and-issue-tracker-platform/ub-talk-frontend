"use client"

import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function StudentProfile({ params }: { params: { id: string } }) {
  const student = useSelector((state: RootState) =>
    state.students.students.find((s) => s.id === params.id),
  )

  if (!student) {
    return <div>Student not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <Avatar className="h-24 w-24 mx-auto mb-4">
            <AvatarImage src={student.avatar} alt={student.name} />
            <AvatarFallback>
              {student.name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl">{student.name}</CardTitle>
          <p className="text-muted-foreground">
            Level {student.level} • {student.department}
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {student.bio && (
            <div>
              <h2 className="font-semibold mb-2">About</h2>
              <p className="text-muted-foreground">{student.bio}</p>
            </div>
          )}

          <div>
            <h2 className="font-semibold mb-2">Contact</h2>
            <p className="text-muted-foreground">{student.email}</p>
          </div>

          {student.socialLinks && (
            <div>
              <h2 className="font-semibold mb-2">Social Links</h2>
              <div className="flex gap-2">
                {student.socialLinks.github && (
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href={student.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                )}
                {student.socialLinks.linkedin && (
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href={student.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                )}
                {student.socialLinks.twitter && (
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href={student.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
