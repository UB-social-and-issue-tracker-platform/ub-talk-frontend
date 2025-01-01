import LandingNav from "@/components/LandingNav"
import LandingHero from "@/components/LandingHero"
import LandingFeatures from "@/components/LandingFeatures"
import LandingTestimonials from "@/components/LandingTestimonials"
import LandingCTA from "@/components/LandingCTA"

export default function LandingPage() {
  return (
    <>
      <LandingNav />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white ">
        {/* Hero Section */}
        <LandingHero />
        {/* Features Section */}
        <LandingFeatures />

        {/* Testimonials Section */}
        <LandingTestimonials />

        {/* Call to Action Section */}
        <LandingCTA />
      </div>
    </>
  )
}
