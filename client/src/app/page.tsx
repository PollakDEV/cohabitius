import HeroSection from "./components/landing/HeroSection";
import FeaturesSection from "./components/landing/FeaturesSection";
import StatsSection from "./components/landing/StatsSection";
import TestimonialsSection from "./components/landing/TestimonialsSection";
import CTASection from "./components/landing/CTASection";
import LandingFooter from "./components/landing/LandingFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <LandingFooter />
    </div>
  );
}
