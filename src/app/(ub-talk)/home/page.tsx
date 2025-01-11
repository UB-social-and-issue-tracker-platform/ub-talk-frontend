"use client"

import HomeCTAOne from "@/components/home/HomeCTAOne"
import HomeCTATwo from "@/components/home/HomeCTATwo"
import HomeCTAThree from "@/components/home/HomeCTAThree"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import { setUser } from "@/redux/features/authSlice"
import { UserType } from "@/types"

export default function HomePage() {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    const userDataString = localStorage.getItem("user")
    const userData: UserType = JSON.parse(userDataString!)
    dispatch(setUser(userData))
  })

  return (
    <div>
      <header className="text-center mb-12">
        <h1 className="font-lora text-4xl font-bold mb-4">
          Welcome to UB Talk
        </h1>
        <p className="font-expletusSans text-xl text-muted-foreground">
          Your platform for university issue tracking, community building, and
          staying informed
        </p>
      </header>

      <HomeCTAOne />
      <HomeCTATwo />

      <HomeCTAThree />
    </div>
  )
}
