import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Info } from "lucide-react";

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <section className="pt-8 pb-4 md:pt-12 md:pb-6 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-4">
                Pick Your Plan
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Whether you're all-in or just dipping your toes, we've got you covered. One price, all 5 studios—zero confusion.
              </p>
            </div>
          </div>
        </section>

        {/* Intro Offer */}
        <section className="pt-4 pb-8 md:pt-6 md:pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="relative bg-background p-10 rounded-2xl border-2 border-primary/40 hover:border-primary/60 hover:shadow-lg transition-all duration-300 animate-fade-in">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="relative bg-gradient-to-r from-[#d8a4a8] via-[#e8b4b8] to-[#d8a4a8] text-black px-6 py-2 rounded-full font-semibold flex items-center gap-2 shadow-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-black/5 rounded-full" />
                    <Sparkles className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">New Client Special</span>
                  </div>
                </div>

                <div className="text-center mb-6 mt-4">
                  <h2 className="text-3xl font-heading font-bold text-foreground mb-3">
                    Intro Offer: 4 Classes for €60
                  </h2>
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

                <Button asChild className="w-full text-lg py-6 relative bg-gradient-to-r from-[#d8a4a8] via-[#e8b4b8] to-[#d8a4a8] text-black border-0 shadow-lg hover:brightness-105 overflow-hidden">
                  <a href="https://momence.com/sign-up/visitor" target="_blank" rel="noopener noreferrer">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-black/5" />
                    <span className="relative z-10">Purchase Intro Offer</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Reformer Class Packs */}
        <section className="py-8 md:py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
                  Reformer Class Packs
                </h2>
                <p className="text-lg text-muted-foreground">
                  Flexible options for reformer pilates. Valid at all 5 studio locations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { classes: 1, price: "€24", validity: "Valid 30 days" },
                  { classes: 3, price: "€65", validity: "Valid 30 days" },
                  { classes: 10, price: "€215", validity: "Valid 310 days" },
                  { classes: 20, price: "€400", validity: "Valid 610 days" },
                ].map((pack, index) => (
                  <div
                    key={pack.classes}
                    className="bg-background p-6 rounded-lg border-2 border-primary/40 hover:border-primary/60 hover:shadow-lg transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-center mb-4">
                      <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                        {pack.classes} {pack.classes === 1 ? "Class" : "Classes"}
                      </h3>
                      <p className="text-3xl font-heading font-bold text-black mb-1">
                        {pack.price}
                      </p>
                      <p className="text-sm text-muted-foreground">{pack.validity}</p>
                    </div>
                    <Button className="w-full">
                      Buy Now
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mat Class Packs - Kildare Only */}
        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
                  Mat Class Packs
                </h2>
                <p className="text-lg text-muted-foreground">
                  Available at our Kildare studio only
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {[
                  { classes: 1, price: "€15", validity: "Valid 30 days" },
                  { classes: 4, price: "€50", validity: "Valid 120 days" },
                ].map((pack, index) => (
                  <div
                    key={pack.classes}
                    className="bg-background p-6 rounded-lg border-2 border-primary/40 hover:border-primary/60 hover:shadow-lg transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-center mb-4">
                      <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                        {pack.classes} {pack.classes === 1 ? "Class" : "Classes"}
                      </h3>
                      <p className="text-3xl font-heading font-bold text-black mb-1">
                        {pack.price}
                      </p>
                      <p className="text-sm text-muted-foreground">{pack.validity}</p>
                    </div>
                    <Button className="w-full">
                      Buy Now
                    </Button>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20 text-center">
                <Info className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-sm text-foreground">
                  Mat classes are exclusively available at our Kildare Town studio
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Memberships */}
        <section className="pt-8 pb-12 md:pt-12 md:pb-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
                  Monthly Memberships
                </h2>
                <p className="text-lg text-muted-foreground">
                  Best value for regular practice. Auto-renews monthly, classes don't carry over.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { classes: "4", price: "€80", perClass: "€20/class", popular: false },
                  { classes: "6", price: "€120", perClass: "€20/class", popular: false },
                  { classes: "8", price: "€180", perClass: "€22.50/class", popular: true },
                  { classes: "Unlimited", price: "€240", perClass: "Best Value", popular: true },
                ].map((membership, index) => (
                  <div
                    key={membership.classes}
                    className="relative bg-background p-8 rounded-xl border-2 border-primary/40 hover:border-primary/60 hover:shadow-lg transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {membership.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                          Popular
                        </span>
                      </div>
                    )}

                    <div className="text-center">
                      <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                        {membership.classes} Classes
                      </h3>
                      <p className="text-4xl font-heading font-bold text-black mb-1">
                        {membership.price}
                      </p>
                      <p className="text-sm text-muted-foreground mb-6">{membership.perClass}</p>
                    </div>

                    <ul className="space-y-2 mb-6 text-sm">
                      {[
                        "Auto-renews monthly",
                        "Priority booking",
                        "Valid all locations",
                        "Cancel anytime",
                      ].map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button className="w-full">
                      Join Now
                    </Button>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-background rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">Membership Terms:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Memberships auto-renew on the same date each month</li>
                  <li>• Classes do not carry over to the next month</li>
                  <li>• Cancel anytime with 7 days notice before next billing date</li>
                  <li>• Valid across all 5 Balance Studios locations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
