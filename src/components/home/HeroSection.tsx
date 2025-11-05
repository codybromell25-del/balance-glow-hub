import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-studio-bg.png";

const HeroSection = () => {
  return (
    <section 
      className="min-h-screen flex items-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Transform your body and mind with Reformer Pilates at Balance
          </h1>

          <Button 
            asChild 
            size="lg" 
            className="text-base px-8 py-6 rounded-full"
          >
            <Link to="/locations">Book a Class</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
