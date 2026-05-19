import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <span className="w-8 md:w-12 h-[1px] bg-gradient-to-r from-white to-white/40"></span>
            <span className="text-white/80 text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] font-light">Reformer Pilates</span>
          </div>

          {/* Intro Offer */}
          <p className="text-white/90 text-lg md:text-2xl leading-relaxed mb-6 md:mb-8 max-w-xl italic font-light tracking-wide">
            Our Intro Offer: 3 Classes for €50
          </p>

          {/* Tagline - bold italic serif, matching brand mark */}
          <p
            className="font-heading text-white text-2xl md:text-3xl lg:text-4xl leading-tight mb-8 md:mb-10 max-w-2xl italic font-semibold tracking-tight"
            style={{
              WebkitTextStroke: '1px #000',
              textShadow: '0 2px 12px rgba(0,0,0,0.45)',
            }}
          >
            It's all about balance.
          </p>

          {/* Buttons - refined and mobile optimized */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5">
            <Button asChild size="lg" className="rounded-full px-6 py-5 sm:px-8 sm:py-7 font-heading font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 justify-center border-0 text-black" style={{ background: 'linear-gradient(180deg, #b8d4c3 0%, #A3C1AD 40%, #8fb39c 100%)' }}>
              <a href="https://momence.com/balance/membership/Intro-Offer---3-Reformer-Classes/574031" target="_blank" rel="noopener noreferrer">
                Buy now
                <ShoppingCart className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-white hover:text-white hover:bg-white/10 rounded-full px-6 py-5 sm:px-8 sm:py-7 font-heading font-medium text-sm sm:text-base border border-white/30 hover:border-white/50 transition-all duration-300 justify-center">
              <Link to="/pricing">
                View More
                <CalendarDays className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;