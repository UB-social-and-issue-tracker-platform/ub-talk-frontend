import LoginForm from "@/components/LoginForm"
import Image from "next/image"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <Image
            src="/logo.svg"
            alt="UB Talk Logo"
            width={80}
            height={80}
            className="mx-auto"
          />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Welcome to UB Talk
          </h2>
          <p className="mt-2 text-sm text-gray-600">Sign in to your account</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
