import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-studio-bg.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Transform your body and mind with Reformer Pilates at Balance
            </h1>
            
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
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

          {/* Right Image */}
          <div className="animate-fade-in lg:animate-delay-200">
            <img 
              src={heroImage} 
              alt="Balance Studios Reformer Pilates Class"
              className="w-full h-auto rounded-3xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
