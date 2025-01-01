import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"

export interface User {
  id: string
  name: string
  email: string
  matricule: string
  faculty?: string
  department?: string
  interests?: string[]
  bio?: string
  profilePicture?: string
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
}

export const login = createAsyncThunk(
  "auth/login",
  async (
    credentials: { matricule: string; password: string },
    { rejectWithValue },
  ) => {
    try {
      // Replace this with your actual API call
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      })
      if (!response.ok) throw new Error("Login failed")
      return await response.json()
    } catch (error) {
      return rejectWithValue((error as Error).message)
    }
  },
)

export const signup = createAsyncThunk(
  "auth/signup",
  async (
    userData: {
      email: string
      name: string
      matricule: string
      password: string
    },
    { rejectWithValue },
  ) => {
    try {
      // Replace this with your actual API call
      const response = await fetch("/api/signup", {
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

export const updateProfile = createAsyncThunk(
  "auth/updateProfile",
  async (profileData: Partial<User>, { rejectWithValue }) => {
    try {
      // Replace this with your actual API call
      const response = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profileData),
      })
      if (!response.ok) throw new Error("Profile update failed")
      return await response.json()
    } catch (error) {
      return rejectWithValue((error as Error).message)
    }
  },
)

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null
      state.isAuthenticated = false
      state.error = null
    },
    clearError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
        state.isLoading = false
        state.isAuthenticated = true
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
      .addCase(signup.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(signup.fulfilled, (state, action: PayloadAction<User>) => {
        state.isLoading = false
        state.isAuthenticated = true
        state.user = action.payload
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(
        updateProfile.fulfilled,
        (state, action: PayloadAction<User>) => {
          state.isLoading = false
          state.user = action.payload
        },
      )
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
  },
})

export const { logout, clearError } = authSlice.actions
export default authSlice.reducer
