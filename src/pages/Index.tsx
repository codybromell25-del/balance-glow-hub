import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import PhilosophySection from "@/components/home/PhilosophySection";
import ClassLevelsSection from "@/components/home/ClassLevelsSection";
import LocationsSection from "@/components/home/LocationsSection";
import PricingPreview from "@/components/home/PricingPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <PhilosophySection />
        <ClassLevelsSection />
        <LocationsSection />
        <PricingPreview />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
