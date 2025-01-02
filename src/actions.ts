import { createAsyncThunk } from "@reduxjs/toolkit"
import { LoginType, SignupType, UserType } from "../types"

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
      return await response.json()
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
