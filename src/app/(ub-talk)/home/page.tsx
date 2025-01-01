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
import { MessageSquare, Users, Newspaper, TrendingUp } from "lucide-react"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to UB Talk</h1>
        <p className="text-xl text-muted-foreground">
          Your platform for university issue tracking, community building, and
          staying informed
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageSquare className="mr-2 h-6 w-6" />
              Issue Tracking
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Report and track university-related issues. Get updates and
              collaborate on solutions.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/complaints">View Complaints</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2 h-6 w-6" />
              Communities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Join or create student communities. Connect with peers who share
              your interests.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/communities">Explore Communities</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Newspaper className="mr-2 h-6 w-6" />
              University News
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Stay updated with the latest university news. React, comment, and
              share important updates.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/news">Read News</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="mr-2 h-6 w-6" />
              Student Board
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Discover and connect with fellow students. Build your network
              within the university.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/students">View Students</Link>
            </Button>
          </CardFooter>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Latest Updates</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Complaints</CardTitle>
              <CardDescription>
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

          <Card>
            <CardHeader>
              <CardTitle>Trending News</CardTitle>
              <CardDescription>What&apos;s happening on campus</CardDescription>
            </CardHeader>
            <CardContent>
              {/* This would be replaced with actual data in a real implementation */}
              <ul className="list-disc pl-5">
                <li>Annual Tech Fest announced for next month</li>
                <li>
                  New research grant awarded to Computer Science department
                </li>
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

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Get Involved</CardTitle>
            <CardDescription>
              Make your voice heard and contribute to the university community
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-3">
            <Button asChild>
              <Link href="/complaints/new">Submit a Complaint</Link>
            </Button>
            <Button asChild>
              <Link href="/communities/new">Create a Community</Link>
            </Button>
            <Button asChild>
              <Link href="/students/profile">Update Your Profile</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
