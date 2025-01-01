import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import HomeCTAOne from "@/components/home/HomeCTAOne"
import HomeCTATwo from "@/components/home/HomeCTATwo"
import HomeCTAThree from "@/components/home/HomeCTAThree"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
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
