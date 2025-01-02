import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { signup, login, updateProfile } from "@/actions"
import { UserType } from "../../../types"

interface AuthState {
  user: UserType | null
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

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null
      state.isAuthenticated = false
      state.error = null
      localStorage.removeItem("token")
    },
    clearError: (state) => {
      state.error = null
    },
    setUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload
      state.isAuthenticated = true
    },
    clearUser: (state) => {
      state.user = null
      state.isAuthenticated = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<UserType>) => {
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
      .addCase(signup.fulfilled, (state, action: PayloadAction<UserType>) => {
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
        (state, action: PayloadAction<UserType>) => {
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

export const { logout, clearError, setUser, clearUser } = authSlice.actions
export default authSlice.reducer
