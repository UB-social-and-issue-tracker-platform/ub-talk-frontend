import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "@/redux/store"
import { setUser, clearUser } from "@/redux/features/authSlice"

export function useAuth() {
  const dispatch = useDispatch<AppDispatch>()
  const user = useSelector((state: RootState) => state.auth.user)

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token")
      if (token) {
        try {
          const response = await fetch("/api/auth/me", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          if (response.ok) {
            const userData = await response.json()
            dispatch(setUser(userData))
          } else {
            throw new Error("Authentication failed")
          }
        } catch (error) {
          console.error("Auth error:", error)
          dispatch(clearUser())
          localStorage.removeItem("token")
        }
      }
    }

    checkAuth()
  }, [dispatch])

  return { user, isAuthenticated: !!user }
}
