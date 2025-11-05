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
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transform your body and mind with Reformer Pilates at Balance
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Balance's ethos revolves around fostering a supportive, mindful environment where clients are empowered to achieve sustainable health and fitness. It values inclusivity, education, and the mind-body connection, ensuring that movement is always purposeful and aligned with long-term wellness goals. New clients are welcome, join our community today!
          </p>

          <Button 
            asChild 
            size="lg" 
            className="text-base px-8 py-6 rounded-full"
          >
            <Link to="/schedule">Get Started</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
