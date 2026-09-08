import Navbar from "./components/layout/Navbar/Navbar"
import Footer from "./components/layout/Footer/Footer"
import HeroSection from "./components/sections/Hero/HeroSection"
import ServiceShowcase from "./components/sections/Services/ServiceShowcase"
import FleetShowcase from "./components/sections/Fleet/FleetShowcase"
import PrivateTripStack from "./components/sections/PrivateTrip/PrivateTripStack"
import WhyChooseUs from "./components/sections/WhyChooseUs/WhyChooseUs"
import TestimonialsSection from "./components/sections/Testimonials/TestimonialsSection"
import BookingTimeline from "./components/sections/BookingSteps/BookingTimeline"
import CTASection from "./components/sections/CTA/CTASection"
import DevelopmentGuard from "./components/ui/DevelopmentGuard"

function App() {
  return (
    <>
      <DevelopmentGuard />

      <Navbar />

      <main>
  <HeroSection />

  <ServiceShowcase />

  <FleetShowcase />

  <PrivateTripStack />

  <WhyChooseUs />

  <TestimonialsSection />

  <BookingTimeline />

  <CTASection />

      </main>

      <Footer />
    </>
  )
}

export default App