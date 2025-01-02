"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import FormField from "@/components/FormField"
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

const signupSchema = z
  .object({
    email: z.string().email("Invalid email address"),
    firstName: z.string().min(2, "First Name must be at least 2 characters"),
    lastName: z.string().min(2, "Last Name must be at least 2 characters"),
    matricule: z.string().min(1, "Matricule is required"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z
      .string()
      .min(8, "Confirm Password must be at least 8 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })

type SignupFormData = z.infer<typeof signupSchema>

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false)

  const methods = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      matricule: "",
      password: "",
      confirmPassword: "",
    },
  })

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true)
    // Here you would typically dispatch a signup action or call an API
    console.log("Signup data:", data)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
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
                name="confirmPassword"
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
    </div>
  )
}
