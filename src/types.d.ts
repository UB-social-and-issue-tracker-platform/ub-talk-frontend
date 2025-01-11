export type UserType = {
  userId: string
  firstName: string
  lastName: string
  email: string
  matricule: string
  faculty?: {
    facultyId: number
    name: string
  }
  program?: {
    programId: number
    name: string
  }
  interests?: string[]
  bio?: string
  profilePicture?: string
  role: "student" | "admin" | "student administrator"
}

// "userId": 1,
// "email": "berthnk@gmail.com",
// "role": "student",
// "firstName": "Draxler",
// "lastName": "Berthold",
// "faculty": {
//     "facultyId": 1,
//     "name": "College of Technology"
// },
// "program": {
//     "programId": 1,
//     "programName": "Computer Engineering"
// }
export type SignupType = {
  email: string
  firstName: string
  lastName: string
  studentId: string //Matricule
  password: string
  // passwordConfirm: string
  // role:
  //   | "STUDENT"
  //   | "STUDENT_ADMIN"
  //   | "ADMIN"
  //   | "DEPARTMENT_HEAD"
  //   | "SUPER_ADMIN"
  facultyId?: number
  programId?: number
}

export type LoginType = {
  email: string
  password: string
}

export type NewsItemType = {
  id: string
  title: string
  content: string
  authorId: string
  faculty: string
  createdAt: string
  updatedAt: string
  isPinned: boolean
  reactions: {
    likes: number
    dislikes: number
  }
  comments: Array<{
    id: string
    userId: string
    content: string
    createdAt: string
  }>
  attachments?: string | undefined
}
