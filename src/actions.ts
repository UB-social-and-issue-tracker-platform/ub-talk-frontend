import { createAsyncThunk } from "@reduxjs/toolkit"
import { LoginType, SignupType, UserType } from "./types"

const apiUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL

export const testBackend = async () => {
  const res = await fetch(`${apiUrl}/health`)
  const data = await res.json()

  console.log("data from backend: ", data)
}

export const signup = createAsyncThunk(
  "auth/signup",
  async (userData: SignupType, { rejectWithValue }) => {
    try {
      const response = await fetch(`${apiUrl}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      })
      if (!response.ok) throw new Error("Signup failed")
      console.log("Server returned data: ", await response.json())
      return await response.json()
    } catch (error) {
      return rejectWithValue((error as Error).message)
    }
  },
)

export const login = createAsyncThunk(
  "auth/login",
  async (loginData: LoginType, { rejectWithValue }) => {
    try {
      const response = await fetch(`${apiUrl}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      })
      if (!response.ok) throw new Error("Login failed")
      console.log("Server returned data: ", await response.json())
      const data = await response.json()

      return data.data.user
    } catch (error) {
      return rejectWithValue((error as Error).message)
    }
  },
)

export const updateProfile = createAsyncThunk(
  "auth/updateProfile",
  async (profileData: Partial<UserType>, { rejectWithValue }) => {
    try {
      // Replace this with your actual API call
      const response = await fetch(`${apiUrl}/auth/profile`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profileData),
      })
      if (!response.ok) throw new Error("Profile update failed")

      const data = await response.json()
      // localStorage.setItem('token', data.token);
      // return data.user;
      console.log("Returned data: ", data)
      return data
    } catch (error) {
      return rejectWithValue((error as Error).message)
    }
  },
)

// Fetch programs based on faculty code
// export const fetchPrograms = async (facultyCode: string) => {
//   try {
//     const res = await fetch(`${apiUrl}/faculty/${facultyCode}/programs`)
//     const data = await res.json()
//     if (data.status === "success") {
//       return data.data.programs
//     } else {
//       toast.error("Failed to load programs")
//     }
//   } catch (error) {
//     toast.error("Error fetching programs")
//   }
// }
