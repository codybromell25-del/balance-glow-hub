import balanceLogo from "@/assets/balance-logo-transparent-final.png";

const BrandStatement = () => {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#f5a5b8] via-[#f8b5c5] to-[#f5a5b8] rounded-3xl p-8 md:p-12 lg:p-16 text-center shadow-lg">
          <img 
            src={balanceLogo} 
            alt="Balance Logo" 
            className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 object-contain animate-scale-in"
          />
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-black mb-6 tracking-tight">
            A BETTER STUDIO
          </h2>
          
          <p className="text-base md:text-lg text-black/90 font-heading font-normal mb-0 leading-relaxed">
            Balance isn't your average pilates studio. We're here to help you get stronger, move better, and feel ridiculously good. 
            Real results, an atmosphere you'll actually enjoy. Come find out for yourself why we are the fastest growing studio on the Island.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandStatement;
