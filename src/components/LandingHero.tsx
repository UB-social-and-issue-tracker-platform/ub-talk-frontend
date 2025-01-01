import Link from "next/link"
import { Button } from "./ui/button"
import Blob from "./Blob"

const LandingHero = () => {
  return (
    <section className="relative container mx-auto px-4 py-20 text-center">
      <Blob src="/blob-1.svg" positionLeft={20} positionTop={150} />
      <Blob src="/blob-1.svg" positionRight={20} positionTop={100} />
      {/* <Blob src="/blob-1.svg" positionLeft={600} positionTop={100} /> */}
      <h1 className="font-lora text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
        Welcome to UB Talk
      </h1>
      <p className="font-expletusSans text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Empowering university students to connect, collaborate, and create
        positive change on campus.
      </p>
      <div className="flex justify-center gap-4">
        <Button size="lg" asChild>
          <Link href="/signup">Get Started</Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="/login">Log In</Link>
        </Button>
      </div>
    </section>
  )
}
export default LandingHero
