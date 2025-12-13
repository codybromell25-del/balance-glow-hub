import { Button } from "@/components/ui/button";
import { ShoppingCart, CalendarDays } from "lucide-react";
import heroImage from "@/assets/hero-studio-new.png";

const HeroSection = () => {
  return (
    <section 
      className="min-h-[85vh] flex items-end bg-cover bg-center relative" 
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Dramatic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

      <div className="container mx-auto px-4 pb-20 md:pb-28 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          {/* Subheading with elegant dash */}
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-[1px] bg-gradient-to-r from-white to-white/40"></span>
            <span className="text-white/80 text-xs md:text-sm uppercase tracking-[0.3em] font-light">Reformer Pilates</span>
          </div>

          {/* Main headline - BOLD and dramatic */}
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-heading font-normal text-white mb-6 leading-[0.9] tracking-tight">
            balance<span className="text-primary">.</span>
          </h1>

          {/* Tagline - elegant and impactful */}
          <p className="text-white/90 text-xl md:text-2xl leading-relaxed mb-10 max-w-xl italic font-light tracking-wide">
            For Those Who Expect <span className="font-semibold not-italic text-white">More</span>.
          </p>

          {/* Buttons - refined and modern */}
          <div className="flex items-center gap-5">
            <Button asChild size="lg" className="rounded-full px-8 py-7 font-heading font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <a href="/pricing">
                Buy now
                <ShoppingCart className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-white hover:text-white hover:bg-white/10 rounded-full px-8 py-7 font-heading font-medium text-base border border-white/30 hover:border-white/50 transition-all duration-300">
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
