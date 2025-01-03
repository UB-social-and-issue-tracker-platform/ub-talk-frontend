export type UserType = {
  id: string
  name: string
  email: string
  matricule: string
  faculty?: string
  department?: string
  interests?: string[]
  bio?: string
  profilePicture?: string
  role: "student" | "admin" | "student administrator"
}

export type SignupType = {
  email: string
  firstName: string
  lastName: string
  matricule: string
  password: string
  passwordConfirm: string
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
