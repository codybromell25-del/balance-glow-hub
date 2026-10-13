import { Button } from "@/components/ui/button";
import { ShoppingCart, MapPin } from "lucide-react";
import heroImage from "@/assets/studio-blessington.jpg";
const HeroSection = () => {
  return <section className="min-h-[calc(100svh-108px)] md:min-h-[85vh] flex bg-cover bg-center relative" style={{
    backgroundImage: `url(${heroImage})`
  }}>
      {/* Dramatic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/35" />
      {/* Soft spotlight behind the copy so the words never fight the photo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_78%_44%_at_50%_45%,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.4)_45%,rgba(0,0,0,0)_75%)] md:bg-[radial-gradient(ellipse_58%_56%_at_30%_42%,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.4)_45%,rgba(0,0,0,0)_75%)]" />

      <div className="container mx-auto px-4 md:px-12 lg:px-16 pt-8 pb-28 md:py-20 relative z-10 flex w-full flex-col justify-center">
        {/* Copy: vertically centred on phones, sits with the buttons on larger screens */}
        <div className="w-[80vw] mx-auto text-center md:text-left md:mx-0 md:w-auto md:max-w-3xl flex flex-1 flex-col justify-center md:flex-none md:justify-start animate-fade-in">

          {/* Intro offer badge */}
          <a
            href="https://momence.com/balance/membership/Intro-Offer---3-Reformer-Classes/574031"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-center md:self-start rounded-full bg-sage text-black px-4 py-1.5 text-xs md:text-sm font-medium tracking-wide mb-5 md:mb-6 shadow-lg backdrop-blur-sm hover:bg-sage/80 transition-colors"
          >
            New here? 3 classes for €50
          </a>

          <h1 className="text-7xl sm:text-8xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-normal text-white mb-3 md:mb-4 leading-[0.9] tracking-tight [text-shadow:0_2px_30px_rgba(0,0,0,0.7)]">
            balance<span className="text-sage">.</span>
          </h1>

          <div className="flex items-center justify-center md:justify-start gap-3 mb-5 md:mb-7">
            <span className="w-6 md:w-12 h-[1px] bg-gradient-to-r from-sage to-sage/10"></span>
            <span className="text-sage text-[11px] md:text-sm uppercase tracking-[0.28em] md:tracking-[0.35em] font-semibold [text-shadow:0_1px_14px_rgba(0,0,0,0.85)]">Reformer Pilates</span>
            <span className="w-6 md:w-12 h-[1px] bg-gradient-to-l from-sage to-sage/10"></span>
          </div>

          <p
            className="font-heading text-white text-[2rem] sm:text-4xl md:text-2xl lg:text-3xl leading-tight md:leading-relaxed mb-8 md:mb-10 italic font-normal tracking-wide [text-shadow:0_2px_26px_rgba(0,0,0,0.85)]"
          >
            It's all about <span className="text-sage">balance</span>.
          </p>
        </div>

        {/* Buttons: pinned to the bottom of the photo on phones */}
        <div className="mt-auto w-[80vw] mx-auto md:mx-0 md:w-auto md:max-w-3xl pt-6 md:pt-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5">
          <Button asChild size="lg" className="rounded-full px-6 py-5 sm:px-8 sm:py-7 font-heading font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 justify-center border-0 text-black" style={{ background: 'linear-gradient(180deg, #b8d4c3 0%, #A3C1AD 40%, #8fb39c 100%)' }}>
            <a href="https://momence.com/balance/membership/Intro-Offer---3-Reformer-Classes/574031" target="_blank" rel="noopener noreferrer">
              Claim intro offer
              <ShoppingCart className="w-4 h-4 ml-2" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="lg" className="text-white hover:text-white hover:bg-white/10 rounded-full px-6 py-5 sm:px-8 sm:py-7 font-heading font-medium text-sm sm:text-base border border-white/30 hover:border-white/50 transition-all duration-300 justify-center">
            <a href="/our-studios">
              Find a studio
              <MapPin className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>;
};
export default HeroSection;
