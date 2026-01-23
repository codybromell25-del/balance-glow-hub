import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import BrandStatement from "@/components/home/BrandStatement";
import SocialProofBar from "@/components/home/SocialProofBar";
import TasterClassesSection from "@/components/home/TasterClassesSection";
import HumanMoments from "@/components/home/HumanMoments";
import InsideScoop from "@/components/home/InsideScoop";
import LocationsSection from "@/components/home/LocationsSection";
import ClassRoutines from "@/components/home/ClassRoutines";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import SEO from "@/components/SEO";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

const Index = () => {
  return <div className="min-h-screen">
      <SEO 
        title="balance studios | Reformer Pilates in Kildare, Wicklow & Meath"
        description="Premium Reformer Pilates across 5 stunning studios. Expert instructors, small groups, real results. Intro offer: 3 classes for €50. For those who expect more."
        canonical="/"
      />
      <LocalBusinessSchema />
      <Navigation />
      <main>
        <HeroSection />
        <SocialProofBar />
        <TasterClassesSection />
        <LocationsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>;
};
export default Index;