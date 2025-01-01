import Link from "next/link"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { Button } from "../ui/button"
import { MessageSquare, Newspaper, TrendingUp, Users } from "lucide-react"

const features = [
  {
    title: "Issue Tracking",
    content:
      "Report and track university-related issues. Get updates and collaborate on solutions.",
    icon: MessageSquare,
    action: "View Complaints",
    actionLink: "/complaints",
  },
  {
    title: "Communities",
    content:
      "Join or create student communities. Connect with peers who share your interests.",
    icon: Users,
    action: "Explore Communities",
    actionLink: "/communities",
  },
  {
    title: "University News",
    content:
      " Stay updated with the latest university news. React, comment, and share important updates.",
    icon: Newspaper,
    action: "Read News",
    actionLink: "/news",
  },
  {
    title: "Student Board",
    content:
      " Discover and connect with fellow students. Build your network within the university.",
    icon: TrendingUp,
    action: "View Students",
    actionLink: "/students",
  },
]

const HomeCTAOne = () => {
  return (
    <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
      {features.map((feature) => (
        <Card key={feature.title} className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle className="flex items-center font-lora">
              <feature.icon className="mr-2 h-6 w-6" />
              {feature.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>{feature.content}</p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href={feature.actionLink}>{feature.action}</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </section>
  )
}
export default HomeCTAOne
