"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import FormField from "@/components/FormField"
import { Form } from "@/components/ui/form"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../../redux/store"
import { login } from "@/actions"
// import { useRouter } from "next/router"
import { useRouter } from "next/navigation"

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

type LoginFormData = z.infer<typeof loginSchema>

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const dispatch = useDispatch<AppDispatch>()
  const router = useRouter()
  const { isAuthenticated } = useSelector((state: RootState) => state.auth)

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true)
    console.log("Login data:", data)
    // Simulate API call
    try {
      await dispatch(login(data))
      // if (isAuthenticated) {
      //   router.push("/home")
      // }
      router.push("/home")
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
    // try {
    //   setIsLoading(false)
    //   // if (response.data) {
    //   //   console.log("Login successful")
    //   //   router.push("/home")
    //   // }
    // } catch (error) {
    //   console.error("An error occurred:", error)
    //   setIsLoading(false)
    // }
  }

  return (
    <div className="container mx-auto flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="font-lora text-2xl">Login to UB Talk</CardTitle>
          <CardDescription className="font-expletusSans">
            Enter your matricule and password to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                name="email"
                label="Email"
                placeholder="Enter your email"
              />
              <FormField
                name="password"
                label="Password"
                type="password"
                placeholder="Enter your password"
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p>
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
