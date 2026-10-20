import { Button } from "@/components/ui/button";
import { ShoppingCart, MapPin } from "lucide-react";
import heroImage from "@/assets/studio-blessington.jpg";
const HeroSection = () => {
  return <section className="min-h-[calc(100svh-108px)] md:min-h-[85vh] flex relative overflow-hidden">
      <img src={heroImage} alt="" aria-hidden="true" decoding="async" className="absolute inset-0 h-full w-full object-cover transform-gpu" />
      {/* Gentle wash, then a feathered pool of shadow behind the words — no edges, no box */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/15" />
      {/* Phone: a soft, centred pool of shadow behind the words */}
      <div className="absolute inset-0 md:hidden bg-[radial-gradient(ellipse_78%_44%_at_50%_45%,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.18)_48%,rgba(0,0,0,0)_75%)]" />
      {/* Computer: a gentle scrim on the copy side, no visible edge */}
      <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-black/55 via-black/28 to-transparent" />

      <div className="container mx-auto px-4 md:px-12 lg:px-16 pt-8 pb-28 md:pt-10 md:pb-24 lg:pb-28 relative z-10 flex w-full flex-col justify-center md:justify-end">
        {/* Copy: vertically centred on phones, sits with the buttons on larger screens */}
        <div className="w-[80vw] mx-auto text-center md:text-left md:mx-0 md:w-auto md:max-w-4xl lg:max-w-5xl flex flex-1 flex-col justify-center md:flex-none md:justify-start animate-fade-in">

          {/* Intro offer badge */}
          <a
            href="https://momence.com/balance/membership/Intro-Offer---3-Reformer-Classes/574031"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-center md:self-start rounded-full bg-sage text-black px-4 py-1.5 md:px-5 md:py-2 text-xs md:text-base font-medium tracking-wide mb-5 md:mb-7 shadow-lg hover:bg-sage/80 transition-colors"
          >
            New here? 3 classes for €50
          </a>

          <h1 className="text-7xl sm:text-8xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[11rem] font-heading font-normal text-white mb-3 md:mb-5 leading-[0.9] tracking-tight [text-shadow:0_2px_24px_rgba(0,0,0,0.6)]">
            balance<span className="text-sage">.</span>
            <span className="sr-only"> Reformer Pilates studios in Limerick, Kildare, Wicklow &amp; Meath</span>
          </h1>

          <div className="flex items-center justify-center md:justify-start gap-3 md:gap-4 mb-5 md:mb-8">
            <span className="w-6 md:w-20 h-[1px] bg-gradient-to-r from-sage to-sage/10"></span>
            <span className="text-sage text-[11px] md:text-lg uppercase tracking-[0.28em] md:tracking-[0.35em] font-semibold [text-shadow:0_1px_12px_rgba(0,0,0,0.8)]">Reformer Pilates</span>
            <span className="w-6 md:w-20 h-[1px] bg-gradient-to-l from-sage to-sage/10"></span>
          </div>

          <p
            className="font-heading text-white text-[2rem] sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight md:leading-relaxed italic font-normal tracking-wide [text-shadow:0_2px_22px_rgba(0,0,0,0.7)]"
          >
            It's all about <span className="text-sage">balance</span>.
          </p>
        </div>

        {/* Buttons: pinned to the bottom of the photo on phones */}
        <div className="mt-auto w-[80vw] mx-auto md:mx-0 md:w-auto md:max-w-4xl lg:max-w-5xl pt-6 md:mt-0 md:pt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5">
          <Button asChild size="lg" className="rounded-full px-6 py-5 sm:px-8 sm:py-7 md:px-10 md:py-8 font-heading font-semibold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 justify-center border-0 text-black" style={{ background: 'linear-gradient(180deg, #b8d4c3 0%, #A3C1AD 40%, #8fb39c 100%)' }}>
            <a href="https://momence.com/balance/membership/Intro-Offer---3-Reformer-Classes/574031" target="_blank" rel="noopener noreferrer">
              Claim intro offer
              <ShoppingCart className="w-4 h-4 ml-2" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="lg" className="text-foreground hover:text-foreground bg-white/95 hover:bg-white rounded-full px-6 py-5 sm:px-8 sm:py-7 md:px-10 md:py-8 font-heading font-medium text-sm sm:text-base md:text-lg border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 justify-center">
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
