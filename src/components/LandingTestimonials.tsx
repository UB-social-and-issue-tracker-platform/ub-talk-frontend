import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"

const LandingTestimonials = () => {
  return (
    <section
      className="bg-blue-600 text-white py-16 bg-stacked-steps"
      id="Testimonials"
    >
      <div className="container mx-auto px-4">
        <h2 className="font-lora text-3xl font-bold text-center mb-12">
          What Students Say
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="bg-white/10 backdrop-blur-sm border-none">
            <CardHeader>
              <CardTitle className="font-expletusSans text-xl font-semibold">
                Sarah M.
              </CardTitle>
              <CardDescription className="font-lora text-blue-200">
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
              <CardTitle className="font-expletusSans text-xl font-semibold">
                John D.
              </CardTitle>
              <CardDescription className="font-lora text-blue-200">
                Business Administration, Year 2
              </CardDescription>
            </CardHeader>
            <CardContent>
              &quot;I love how easy it is to create and join communities.
              I&apos;ve met so many like-minded students through UB Talk!&quot;
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-none">
            <CardHeader>
              <CardTitle className="font-expletusSans text-xl font-semibold">
                Emily L.
              </CardTitle>
              <CardDescription className="font-lora text-blue-200">
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
  )
}
export default LandingTestimonials
