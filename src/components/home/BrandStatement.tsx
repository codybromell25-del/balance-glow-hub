import { Button } from "@/components/ui/button";
import balanceLogo from "@/assets/balance-logo-main.png";

const BrandStatement = () => {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-br from-[#f5a5b8] via-[#f8b5c5] to-[#f5a5b8]">
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
          
          <p className="text-base md:text-lg text-black/90 font-heading font-normal mb-0 leading-relaxed max-w-3xl mx-auto">
            Balance isn't your average pilates studio. We're here to help you get stronger, move better, and feel ridiculously good. 
            Real results, an atmosphere you'll actually enjoy. Come find out for yourself why we are the fastest growing studio on the Island.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandStatement;
