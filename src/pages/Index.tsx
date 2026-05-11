import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import SocialProofBar from "@/components/home/SocialProofBar";
import LocationsSection from "@/components/home/LocationsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import SEO from "@/components/SEO";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

const Index = () => {
  return <div className="min-h-screen">
      <SEO 
        title="balance studios | Reformer Pilates in Kildare, Wicklow, Meath & Limerick"
        description="Premium Reformer Pilates across 6 stunning studios. Expert instructors, small groups, real results. Intro Offer 3 for €50. For those who expect more."
        canonical="/"
      />
      <LocalBusinessSchema />
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