import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-studio-chandelier.png";

const HeroSection = () => {
  return (
    <section
      className="min-h-[75vh] flex items-end bg-cover bg-center relative"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Subtle gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      <div className="container mx-auto px-4 pt-32 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-medium text-white mb-8 leading-tight tracking-wide">
            balance.
            <br />
            <span className="font-light italic text-white/90">for those who expect more</span>
          </h1>

          <Button asChild size="lg" className="text-base px-10 py-6 rounded-full mt-6 font-heading font-medium">
            <a href="/book-class">Book a Class</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
