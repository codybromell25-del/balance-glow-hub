import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import BrandStatement from "@/components/home/BrandStatement";
import SocialProofBar from "@/components/home/SocialProofBar";
import HumanMoments from "@/components/home/HumanMoments";
import InsideScoop from "@/components/home/InsideScoop";
import LocationsSection from "@/components/home/LocationsSection";
import ClassRoutines from "@/components/home/ClassRoutines";
import TestimonialsSection from "@/components/home/TestimonialsSection";
const Index = () => {
  return <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <SocialProofBar />
        
        
        
        <LocationsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>;
};
export default Index;