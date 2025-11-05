import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Sparkles } from "lucide-react";

const PricingPreview = () => {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Start Your Journey Today
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Special intro offer for new clients. Experience the Balance difference with no commitment.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {/* Intro Offer - Featured */}
          <div className="relative bg-background p-6 md:p-8 rounded-2xl border-2 border-primary/50 hover:border-primary/70 shadow-lg transition-all duration-300">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                <Sparkles className="w-4 h-4" />
                Best Value
              </div>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                Intro Offer
              </h3>
              <p className="text-muted-foreground mb-4">New clients only</p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl font-heading font-bold text-primary">€60</span>
                <span className="text-muted-foreground">for 4 classes</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                "Perfect way to start",
                "Try different class levels",
                "Expert guidance included",
                "Valid across all 5 studios",
                "30-day validity",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button asChild className="w-full text-lg py-6">
              <Link to="/pricing">Get Started</Link>
            </Button>
          </div>

          {/* Membership Preview */}
          <div className="bg-background p-6 md:p-8 rounded-2xl border-2 border-primary/40 hover:border-primary/60 transition-all duration-300">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                Monthly Memberships
              </h3>
              <p className="text-muted-foreground mb-4">For regular practice</p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-4xl font-heading font-bold text-foreground">From</span>
                <span className="text-5xl font-heading font-bold text-primary">€80</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">per month</p>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                "4, 6, 8 or unlimited classes",
                "Better value per class",
                "Priority booking",
                "Flexible cancellation",
                "Community perks",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button asChild variant="outline" className="w-full border-2 border-primary text-primary hover:bg-primary/10 text-lg py-6">
              <Link to="/pricing">View All Options</Link>
            </Button>
          </div>
        </div>

        <p className="text-center text-muted-foreground mt-8">
          Questions about pricing? <Link to="/contact" className="text-primary hover:underline">Get in touch</Link>
        </p>
      </div>
    </section>
  );
};

export default PricingPreview;
