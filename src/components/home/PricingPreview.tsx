import { Button } from "@/components/ui/button";

const PricingPreview = () => {
  const pricingOptions = [
    { label: "STARTER PACK", price: "€60", details: "6 CLASSES/2 WEEKS" },
    { label: "CASUAL", price: "€35", details: "1 CLASS/1 MONTH" },
    { label: "10 PACK", price: "€29", details: "PER CLASS/3 MONTHS" },
    { label: "25 PACK", price: "€27", details: "PER CLASS/6 MONTHS" },
    { label: "50 PACK", price: "€25", details: "PER CLASS/12 MONTHS" },
  ];

  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto px-4">
        {/* Banner Section */}
        <div className="bg-primary py-12 md:py-16 px-6 mb-0">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-medium text-foreground tracking-wide text-center md:text-left uppercase">
              Get Started With 6 Classes For €60!
            </h2>
            <Button 
              asChild 
              variant="outline" 
              className="px-8 py-3 text-foreground border-foreground/60 hover:bg-foreground/10 font-heading font-medium tracking-wide"
            >
              <a href="https://momence.com/sign-up/visitor" target="_blank" rel="noopener noreferrer">
                Get Intro Offer
              </a>
            </Button>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="bg-background py-12 md:py-16 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
              {pricingOptions.map((option) => (
                <div key={option.label} className="text-center">
                  <p className="text-xs md:text-sm font-heading font-medium text-primary tracking-widest uppercase mb-2">
                    {option.label}
                  </p>
                  <p className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-foreground mb-2">
                    {option.price}
                  </p>
                  <p className="text-xs md:text-sm font-heading font-medium text-foreground tracking-wider uppercase">
                    {option.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;
