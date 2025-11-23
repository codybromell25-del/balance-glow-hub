import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Sparkles } from "lucide-react";

const PricingPreview = () => {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-foreground mb-6 tracking-tight">New Here?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Perfect. Dip your toes in with our intro offer—get hooked on the Balance vibe without locking yourself into
            anything (except great form).
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative bg-background p-10 rounded-2xl border-2 border-primary/40 hover:border-primary/60 hover:shadow-lg transition-all duration-300">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-[#8db09a] via-[#a3c1ad] to-[#8db09a] text-foreground px-6 py-2 rounded-full font-semibold flex items-center gap-2 shadow-lg">
                <Sparkles className="w-5 h-5" />
                New Client Special
              </div>
            </div>

            <div className="text-center mb-6 mt-4">
              <h3 className="text-3xl font-heading font-extrabold text-foreground mb-3 tracking-tight">Intro Offer: 4 Classes for €60</h3>
              <p className="text-muted-foreground">The perfect way to discover Balance Studios</p>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                "Try any class level to find your fit",
                "Experience different instructors",
                "Visit any of our 5 studio locations",
                "Valid for 30 days from purchase",
                "First-time clients only",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button className="w-full text-lg py-6 font-heading font-medium bg-gradient-to-r from-[#8db09a] via-[#a3c1ad] to-[#8db09a] text-foreground border-0 shadow-lg hover:brightness-105">Purchase Intro Offer</Button>
          </div>
        </div>

        <p className="text-center text-muted-foreground mt-8">
          Questions about pricing?{" "}
          <Link to="/contact" className="text-primary hover:underline">
            Get in touch
          </Link>
        </p>
      </div>
    </section>
  );
};

export default PricingPreview;
