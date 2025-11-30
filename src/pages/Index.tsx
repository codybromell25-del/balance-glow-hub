import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import BrandStatement from "@/components/home/BrandStatement";
import LocationsSection from "@/components/home/LocationsSection";
import PricingPreview from "@/components/home/PricingPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import EmailCaptureSection from "@/components/home/EmailCaptureSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <BrandStatement />
        <PricingPreview />
        <LocationsSection />
        <TestimonialsSection />
        <EmailCaptureSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
