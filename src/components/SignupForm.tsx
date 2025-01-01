"use client"

import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { useDispatch } from "react-redux"
import { login } from "@/redux/features/authSlice"
import { User, Mail, BookOpen, Lock } from "lucide-react"

interface SignupInputs {
  firstname: string
  lastname: string
  matricule: string
  email: string
  password: string
  agreeTerms: boolean
}

export function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupInputs>()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit: SubmitHandler<SignupInputs> = async (data) => {
    setIsLoading(true)
    console.log("Signup Data: ", data)
    // try {
    //   // TODO: Replace with actual API call
    //   const response = await fetch('/api/signup', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data),
    //   });

    //   if (!response.ok) {
    //     const errorData = await response.json();
    //     throw new Error(errorData.message || 'Signup failed');
    //   }

    //   const userData = await response.json();
    //   dispatch(login(userData.matricule));
    // } catch (error) {
    //   // Handle error (you might want to show an error message to the user)
    //   console.error('Signup error:', error);
    // } finally {
    //   setIsLoading(false);
    // }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="firstname"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="firstname"
              type="text"
              {...register("firstname", { required: "First name is required" })}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="First Name"
            />
          </div>
          {errors.firstname && (
            <p className="mt-2 text-sm text-red-600">
              {errors.firstname.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="lastname"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="lastname"
              type="text"
              {...register("lastname", { required: "Last name is required" })}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Last Name"
            />
          </div>
          {errors.lastname && (
            <p className="mt-2 text-sm text-red-600">
              {errors.lastname.message}
            </p>
          )}
        </div>
      </div>
      <div>
        <label
          htmlFor="matricule"
          className="block text-sm font-medium text-gray-700"
        >
          Matricule (Student ID)
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <BookOpen className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="matricule"
            type="text"
            {...register("matricule", { required: "Matricule is required" })}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter your matricule"
          />
        </div>
        {errors.matricule && (
          <p className="mt-2 text-sm text-red-600">
            {errors.matricule.message}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="you@example.com"
          />
        </div>
        {errors.email && (
          <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
            })}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Create a strong password"
          />
        </div>
        {errors.password && (
          <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>
      <div className="flex items-center">
        <input
          id="agreeTerms"
          type="checkbox"
          {...register("agreeTerms", {
            required: "You must agree to the terms",
          })}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label
          htmlFor="agreeTerms"
          className="ml-2 block text-sm text-gray-900"
        >
          I agree to all terms and conditions
        </label>
      </div>
      {errors.agreeTerms && (
        <p className="mt-2 text-sm text-red-600">{errors.agreeTerms.message}</p>
      )}
      <div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {isLoading ? "Signing up..." : "Sign Up"}
        </button>
      </div>
    </form>
  )
}
