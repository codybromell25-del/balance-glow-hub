import { Button } from "@/components/ui/button";
import { ShoppingCart, CalendarDays } from "lucide-react";
import heroImage from "@/assets/hero-studio-chandelier.png";

const HeroSection = () => {
  return (
    <section
      className="min-h-[75vh] flex items-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Subtle gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-2xl animate-fade-in">
          {/* Subheading with dash */}
          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-0.5 bg-white"></span>
            <span className="text-white text-sm md:text-base tracking-wide">Dynamic Reformer Pilates</span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-light text-white mb-6 leading-tight">
            Elevate your<br />lifestyle
          </h1>

          {/* Body text */}
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
            balance is a Dynamic Reformer Pilates brand combining dynamic, full-body routines. Each class is designed to elevate your training experience – blending curated music, structured timed blocks, dynamic methodology and immersive studio technology to deliver a fresh, modern take on Reformer Pilates.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <Button asChild size="lg" className="rounded-full px-6 py-6 font-heading font-medium">
              <a href="/pricing">
                Buy now
                <ShoppingCart className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-white hover:text-white hover:bg-white/10 rounded-full px-6 py-6 font-heading font-medium">
              <a href="/book-class">
                Book now
                <CalendarDays className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
