import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-studio-interior.png";

const HeroSection = () => {
  return (
    <section
      className="min-h-screen flex items-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10 flex flex-col justify-between min-h-screen">
        <div className="max-w-4xl mx-auto text-center animate-fade-in flex-1 flex flex-col">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-12 leading-tight pt-20 md:pt-0">
            Reformer Pilates.
            <br />
            <span className="block">Done Right.</span>
          </h1>

          <div className="mt-auto pb-16 md:pb-0 md:mt-8">
            <Button asChild size="lg" className="text-base px-8 py-6 rounded-full">
              <a href="/book-class">Book a Class</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
