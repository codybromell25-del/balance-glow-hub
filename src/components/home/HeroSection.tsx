import { Button } from "@/components/ui/button";
import { ShoppingCart, CalendarDays } from "lucide-react";
import heroImage from "@/assets/hero-studio-new.png";
const HeroSection = () => {
  return <section className="min-h-[85vh] flex items-end bg-cover bg-center relative" style={{
    backgroundImage: `url(${heroImage})`
  }}>
      {/* Dramatic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

      <div className="container mx-auto px-6 md:px-4 pb-16 md:pb-28 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          {/* Main headline - BOLD and dramatic */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-heading font-normal text-white mb-2 md:mb-4 leading-[0.9] tracking-tight">
            balance<span className="text-primary">.</span>
          </h1>

          {/* Subheading moved below headline */}
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <span className="w-8 md:w-12 h-[1px] bg-gradient-to-r from-white to-white/40"></span>
            <span className="text-white/80 text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] font-light">Reformer Pilates</span>
          </div>

          {/* Tagline - elegant and impactful */}
          <p className="text-white/90 text-lg md:text-2xl leading-relaxed mb-8 md:mb-10 max-w-xl italic font-light tracking-wide">
            For Those Who Expect <span className="font-semibold not-italic text-white">More</span>.
          </p>

          {/* Intro Offer - Elegant styling */}
          <div className="mb-6 md:mb-8">
            <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-1">Intro Offer </p>
            <p className="text-white text-2xl md:text-4xl font-heading italic">
              3 Classes for <span className="text-primary font-semibold not-italic">€45</span>
            </p>
          </div>

          {/* Buttons - refined and mobile optimized */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5">
            <Button asChild size="lg" className="rounded-full px-6 py-5 sm:px-8 sm:py-7 font-heading font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 justify-center">
              <a href="/pricing" className="text-primary-foreground bg-[#52220a]">
                Buy now
                <ShoppingCart className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-white hover:text-white hover:bg-white/10 rounded-full px-6 py-5 sm:px-8 sm:py-7 font-heading font-medium text-sm sm:text-base border border-white/30 hover:border-white/50 transition-all duration-300 justify-center">
              <a href="/book-class">
                Book now
                <CalendarDays className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;