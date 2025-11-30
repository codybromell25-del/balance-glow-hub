import { Button } from "@/components/ui/button";
import balanceLogo from "@/assets/balance-logo-transparent.png";

const BrandStatement = () => {
  return (
    <section className="py-10 md:py-12 bg-gradient-to-br from-[#f5a5b8] via-[#f8b5c5] to-[#f5a5b8]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <img 
            src={balanceLogo} 
            alt="Balance Logo" 
            className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 object-contain animate-scale-in"
          />
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-black mb-6 tracking-tight">
            A BETTER STUDIO
          </h2>
          
          <p className="text-base md:text-lg text-black/90 font-heading font-bold mb-8 leading-relaxed max-w-3xl mx-auto">
            Balance isn't your average pilates studio. We're here to push you, challenge you, and help you feel ridiculously good. 
            Real results, real vibes, zero BS. Come sweat with us.
          </p>
          
          <Button 
            asChild 
            size="lg" 
            className="text-base px-8 py-6 rounded-full font-heading font-bold bg-white text-black hover:bg-white/90 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
          >
            <a href="/about">LEARN ABOUT BALANCE</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BrandStatement;
