"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import FormField from "@/components/FormField"
import toast, { Toaster } from "react-hot-toast"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Form } from "@/components/ui/form"
import { useToast } from "@/hooks/use-toast"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import { signup } from "@/actions"
import { SignupType } from "@/types"
import { useRouter } from "next/navigation"

const signupSchema = z
  .object({
    email: z.string().email("Invalid email address"),
    firstName: z.string().min(2, "First Name must be at least 2 characters"),
    lastName: z.string().min(2, "Last Name must be at least 2 characters"),
    matricule: z.string().min(1, "Matricule is required"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    passwordConfirm: z
      .string()
      .min(8, "Confirm Password must be at least 8 characters"),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords don't match",
    path: ["passwordConfirm"],
  })

type SignupFormData = z.infer<typeof signupSchema>

const SignupPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  // const { toast } = useToast()
  const dispatch = useDispatch<AppDispatch>()
  const router = useRouter()

  const methods = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      matricule: "",
      password: "",
      passwordConfirm: "",
    },
  })

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true)
    const newData: SignupType = {
      ...data,
      // role: "STUDENT",
      facultyId: 4,
      programId: 2,
    }
    console.log("Signup data:", newData)

    try {
      await dispatch(signup(newData)).unwrap()
      toast.success("Your account has been created. Proceed to login", {
        duration: 5000,
        // icon: Check,
        position: "top-right",
      })
      router.push("/login")
    } catch (error) {
      console.error("Signup failed", error)
      toast.error("Sign up failed! Try again", {
        position: "top-right",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="mx-auto container max-w-[32rem] px-4">
      <Form {...methods}>
        <Card>
          <CardHeader className="flex flex-col items-center">
            <CardTitle className="font-lora text-2xl">Sign Up</CardTitle>
            <CardDescription className="font-expletusSans">
              Fill all fields to create an account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="space-y-4"
            >
              {" "}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <FormField
                  name="firstName"
                  label="First Name"
                  placeholder="Enter your first name"
                />
                <FormField
                  name="lastName"
                  label="Last Name"
                  placeholder="Enter your last name"
                />
              </div>
              <FormField
                name="email"
                label="Email"
                type="email"
                placeholder="Enter your email"
              />
              <FormField
                name="matricule"
                label="Matricule"
                placeholder="Enter your matricule"
              />
              <FormField
                name="password"
                label="Password"
                type="password"
                placeholder="Enter your password"
              />
              <FormField
                name="passwordConfirm"
                label="Confirm Password"
                type="password"
                placeholder="Confirm your password"
              />
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? "Signing up..." : "Sign up"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p>
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline">
                Log in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </Form>
      <Toaster />
    </div>
  )
}

export default SignupPage
