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
import {
  MessageSquare,
  Users,
  Newspaper,
  TrendingUp,
  CheckCircle,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
          Welcome to UB Talk
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
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

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-white/50 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <MessageSquare className="h-10 w-10 text-blue-500 mb-2" />
              <CardTitle>Issue Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              Report and track university-related issues. Get updates and
              collaborate on solutions.
            </CardContent>
          </Card>
          <Card className="bg-white/50 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Users className="h-10 w-10 text-green-500 mb-2" />
              <CardTitle>Communities</CardTitle>
            </CardHeader>
            <CardContent>
              Join or create student communities. Connect with peers who share
              your interests.
            </CardContent>
          </Card>
          <Card className="bg-white/50 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Newspaper className="h-10 w-10 text-purple-500 mb-2" />
              <CardTitle>University News</CardTitle>
            </CardHeader>
            <CardContent>
              Stay updated with the latest university news. React, comment, and
              share important updates.
            </CardContent>
          </Card>
          <Card className="bg-white/50 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <TrendingUp className="h-10 w-10 text-orange-500 mb-2" />
              <CardTitle>Student Board</CardTitle>
            </CardHeader>
            <CardContent>
              Discover and connect with fellow students. Build your network
              within the university.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Students Say
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="bg-white/10 backdrop-blur-sm border-none">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Sarah M.
                </CardTitle>
                <CardDescription className="text-blue-200">
                  Computer Science, Year 3
                </CardDescription>
              </CardHeader>
              <CardContent>
                &quot;UB Talk has revolutionized how we communicate on campus.
                It&apos;s so much easier to stay informed and get involved
                now!&quot;
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-none">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">John D.</CardTitle>
                <CardDescription className="text-blue-200">
                  Business Administration, Year 2
                </CardDescription>
              </CardHeader>
              <CardContent>
                &quot;I love how easy it is to create and join communities.
                I&apos;ve met so many like-minded students through UB
                Talk!&quot;
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-none">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Emily L.
                </CardTitle>
                <CardDescription className="text-blue-200">
                  Environmental Science, Year 4
                </CardDescription>
              </CardHeader>
              <CardContent>
                &quot;The issue tracking feature is a game-changer. It&apos;s
                great to see how our concerns are being addressed by the
                university.&quot;
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Transform Your University Experience?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
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
    </div>
  )
}
