import balanceLogo from "@/assets/balance-logo-transparent-final.png";

const BrandStatement = () => {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-gradient-button rounded-3xl pt-4 md:pt-6 pb-8 md:pb-12 lg:pb-16 px-8 md:px-12 lg:px-16 text-center shadow-lg">
          <img 
            src={balanceLogo} 
            alt="balance logo" 
            className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-3 object-contain animate-scale-in"
          />
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-black mb-6 tracking-tight">
            A BETTER STUDIO
          </h2>
          
          <p className="text-base md:text-lg text-black/90 font-heading font-normal mb-0 leading-relaxed">
            balance isn't your average pilates studio. We're here to help you get stronger, move better, and feel ridiculously good. 
            Real results, an atmosphere you'll actually enjoy. Come find out for yourself why we are the fastest growing studio on the Island.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandStatement;
