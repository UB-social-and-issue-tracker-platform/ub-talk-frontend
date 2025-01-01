import { MessageSquare, Newspaper, TrendingUp, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const features = [
  {
    title: "Issue Tracking",
    content:
      "Report and track university-related issues. Get updates and collaborate on solutions.",
    icon: MessageSquare,
  },
  {
    title: "Communities",
    content:
      "Join or create student communities. Connect with peers who share your interests.",
    icon: Users,
  },
  {
    title: "University News",
    content:
      " Stay updated with the latest university news. React, comment, and share important updates.",
    icon: Newspaper,
  },
  {
    title: "Student Board",
    content:
      " Discover and connect with fellow students. Build your network within the university.",
    icon: TrendingUp,
  },
]

const LandingFeatures = () => {
  return (
    <section className="container mx-auto px-4 py-16" id="Features">
      <h2 className="font-lora text-3xl font-bold text-center mb-12">
        Key Features
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="bg-white/50 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-shadow"
          >
            <CardHeader>
              <feature.icon className="h-10 w-10 text-blue-500 mb-2" />
              <CardTitle className="font-lora">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>{feature.content}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
export default LandingFeatures
