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
  confirmPassword: string
}

export type LoginType = {
  email: string
  password: string
}
