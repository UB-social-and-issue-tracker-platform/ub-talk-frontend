import Link from "next/link"
import { Button } from "./ui/button"
import { CheckCircle } from "lucide-react"

const LandingCTA = () => {
  return (
    <section className=" container mx-auto px-4 py-20 text-center">
      <h2 className="font-lora text-4xl font-bold mb-6">
        Ready to Transform Your University Experience?
      </h2>
      <p className="font-expletusSans text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Join UB Talk today and become part of a vibrant community dedicated to
        making your university life better.
      </p>
      <ul className="flex flex-col md:flex-row justify-center gap-4 mb-8">
        <li className="flex items-center">
          <CheckCircle className="text-green-500 mr-2" /> Connect with peers
        </li>
        <li className="flex items-center">
          <CheckCircle className="text-green-500 mr-2" /> Stay informed
        </li>
        <li className="flex items-center">
          <CheckCircle className="text-green-500 mr-2" /> Make a difference
        </li>
      </ul>
      <Button
        size="lg"
        className="bg-gradient-to-r from-blue-600 to-teal-400 text-white"
        asChild
      >
        <Link href="/signup">Get Started Now</Link>
      </Button>
    </section>
  )
}
export default LandingCTA
