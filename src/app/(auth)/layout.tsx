import Image from "next/image"
import Link from "next/link"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col gap-x-12">
      <Link href="/">
        <Image
          width={100}
          height={100}
          src="/ub-talk-logo.png"
          alt="UB Talk Logo"
          className="w-20 h-auto mx-auto my-4"
        />
      </Link>
      {children}
    </div>
  )
}

export default AuthLayout
