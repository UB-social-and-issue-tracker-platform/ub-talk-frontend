import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { Button } from "../ui/button"

const HomeCTATwo = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4 font-lora">Latest Updates</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle className="font-lora">Recent Complaints</CardTitle>
            <CardDescription className="font-expletusSans">
              Stay informed about current issues
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* This would be replaced with actual data in a real implementation */}
            <ul className="list-disc pl-5">
              <li>Wi-Fi connectivity issues in the library</li>
              <li>Request for more vegan options in the cafeteria</li>
              <li>Parking shortage during peak hours</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" asChild>
              <Link href="/complaints">View All Complaints</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle className="font-lora">Trending News</CardTitle>
            <CardDescription className="font-expletusSans">
              What&apos;s happening on campus
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* This would be replaced with actual data in a real implementation */}
            <ul className="list-disc pl-5">
              <li>Annual Tech Fest announced for next month</li>
              <li>New research grant awarded to Computer Science department</li>
              <li>Student-led sustainability initiative gains traction</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" asChild>
              <Link href="/news">Read All News</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
export default HomeCTATwo
