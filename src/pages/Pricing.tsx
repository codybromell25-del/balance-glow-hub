import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Info, MapPin } from "lucide-react";
import SEO from "@/components/SEO";

type ClassType = "reformer" | "mat";

const Pricing = () => {
  const [classType, setClassType] = useState<ClassType>("reformer");
  const sage = { background: 'linear-gradient(180deg, #b8d4c3 0%, #A3C1AD 40%, #8fb39c 100%)' };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Pricing & Memberships | balance studios - Reformer Pilates"
        description="Flexible class packs from €24 and monthly memberships from €80. New clients: 3 classes for €50 intro offer. Valid at all 6 balance studios across Limerick, Kildare, Wicklow & Meath."
        canonical="/pricing"
      />
      <Navigation />
      <main className="pt-24">
        <PageHeader 
          title="Pick Your Pack" 
          subtitle="First, purchase a class pack or membership below. Once you've bought your package, you'll be able to book classes from available time slots at any of our 6 studios."
        />

        {/* Class type toggle */}
        <section className="pt-2 pb-4">
          <div className="container mx-auto px-4">
            <div className="flex justify-center">
              <div className="inline-flex p-1 rounded-full border-2 border-primary/40 bg-background shadow-sm">
                <button
                  onClick={() => setClassType("reformer")}
                  className={`px-5 md:px-8 py-2.5 rounded-full text-sm md:text-base font-heading font-semibold transition-all ${classType === "reformer" ? "text-black shadow-md" : "text-foreground/70 hover:text-foreground"}`}
                  style={classType === "reformer" ? sage : undefined}
                >
                  Reformer
                </button>
                <button
                  onClick={() => setClassType("mat")}
                  className={`px-5 md:px-8 py-2.5 rounded-full text-sm md:text-base font-heading font-semibold transition-all ${classType === "mat" ? "text-black shadow-md" : "text-foreground/70 hover:text-foreground"}`}
                  style={classType === "mat" ? sage : undefined}
                >
                  Mat, Barre & Yoga
                </button>
              </div>
            </div>
          </div>
        </section>

        {classType === "reformer" && (
        <>
        {/* Intro Offer */}
        <section className="py-8 md:py-12 animate-fade-in">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="relative bg-background p-8 md:p-10 rounded-2xl border-2 border-primary/40 hover:border-primary/60 hover:shadow-lg transition-all duration-300 animate-fade-in flex flex-col">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="relative text-black px-6 py-2 rounded-full font-semibold flex items-center gap-2 shadow-lg overflow-hidden whitespace-nowrap" style={{ background: 'linear-gradient(180deg, #b8d4c3 0%, #A3C1AD 40%, #8fb39c 100%)' }}>
                    <Sparkles className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">New Client Special</span>
                  </div>
                </div>

                <div className="text-center mb-6 mt-4">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">
                    Intro Offer: 3 Reformer Classes for €50
                  </h2>
                  <p className="text-muted-foreground">The perfect way to discover balance studios</p>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {[
                    "Try any class level to find your fit",
                    "Experience different instructors",
                    "Visit any of our 6 studio locations",
                    "Valid for 30 days from purchase",
                    "First-time clients only",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild className="w-full text-lg py-6 relative text-black border-0 shadow-lg hover:brightness-105 overflow-hidden" style={{ background: 'linear-gradient(180deg, #b8d4c3 0%, #A3C1AD 40%, #8fb39c 100%)' }}>
                  <a href="https://momence.com/balance/membership/Intro-Offer---3-Reformer-Classes/574031" target="_blank" rel="noopener noreferrer">
                    <span className="relative z-10">Purchase Intro Offer</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>


        {/* Reformer Class Packs */}
        <section className="py-10 md:py-14 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10 md:mb-12">
                <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
                  Reformer Class Packs
                </h2>
                <p className="text-lg text-muted-foreground">
                  Flexible options for reformer pilates. Valid at all 6 studio locations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                  { classes: 1, price: "€24", validity: "Valid 30 days from first class", link: "https://momence.com/balance/membership/Single-Reformer-Class/573997", popular: true },
                  { classes: 3, price: "€65", validity: "Valid 30 days from first class", link: "https://momence.com/Balance/membership/3-Reformer-Classes/573988", popular: false },
                  { classes: 6, price: "€130", validity: "Valid 60 days from first class", link: "https://momence.com/Balance/membership/6-Reformer-Classes/573990", popular: false },
                  { classes: 10, price: "€215", validity: "Valid 310 days from first class", link: "https://momence.com/Balance/membership/10-Reformer-Classes/573992", popular: true },
                  { classes: 20, price: "€400", validity: "Valid 610 days from first class", link: "https://momence.com/Balance/membership/20-Reformer-Classes/573995", popular: false },
                ].map((pack, index) => (
                  <div
                    key={pack.classes}
                    className={`relative bg-background p-6 rounded-lg border-2 hover:shadow-lg transition-all duration-300 animate-fade-in ${pack.popular ? 'border-[#A3C1AD] shadow-lg' : 'border-primary/40 hover:border-primary/60'}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {pack.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                        <span className="text-black px-3 py-1 rounded-full text-xs font-semibold shadow-md" style={{ background: 'linear-gradient(180deg, #b8d4c3 0%, #A3C1AD 40%, #8fb39c 100%)' }}>
                          Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-4">
                      <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                        {pack.classes} {pack.classes === 1 ? "Class" : "Classes"}
                      </h3>
                      <div className="mb-1">
                        <span className="text-3xl font-heading font-bold text-black">{pack.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{pack.validity}</p>
                    </div>
                    <Button asChild className="w-full text-black border-0 shadow-lg hover:brightness-105" style={{ background: 'linear-gradient(180deg, #b8d4c3 0%, #A3C1AD 40%, #8fb39c 100%)' }}>
                      <a href={pack.link} target="_blank" rel="noopener noreferrer">
                        Buy Now
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Memberships */}
        <section className="py-10 md:py-14 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10 md:mb-12">
                <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
                  Reformer Memberships
                </h2>
                <p className="text-lg text-muted-foreground">
                  Best value for regular practice. Auto-renews monthly, classes don't carry over.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { classes: "4", price: "€80", perClass: "€20/class", popular: false, link: "https://momence.com/Balance/membership/Monthly-Membership---4-classes/574026" },
                  { classes: "6", price: "€120", perClass: "€20/class", popular: false, link: "https://momence.com/Balance/membership/Monthly-Membership---6-classes/574023" },
                  { classes: "8", price: "€160", perClass: "€20/class", popular: true, link: "https://momence.com/Balance/membership/Monthly-membership---8-classes/574021" },
                  { classes: "Unlimited", price: "€240", perClass: "Best Value", popular: true, link: "https://momence.com/Balance/membership/Monthly-Membership---Unlimited-Reformer-classes/574005" },
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

                    <Button asChild className="w-full text-black border-0 shadow-lg hover:brightness-105" style={{ background: 'linear-gradient(180deg, #b8d4c3 0%, #A3C1AD 40%, #8fb39c 100%)' }}>
                      <a href={membership.link} target="_blank" rel="noopener noreferrer">
                        Buy Now
                      </a>
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
                  <li>• Valid across all 6 balance studios locations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        </>
        )}

        {classType === "mat" && (
        <>
        {/* Mat/Barre/Yoga Intro Offer */}
        <section className="py-8 md:py-12 animate-fade-in">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="relative bg-background p-8 md:p-10 rounded-2xl border-2 border-primary/40 hover:border-primary/60 hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="relative text-black px-6 py-2 rounded-full font-semibold flex items-center gap-2 shadow-lg overflow-hidden whitespace-nowrap" style={sage}>
                    <Sparkles className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">New Client Special</span>
                  </div>
                </div>

                <div className="text-center mb-6 mt-4">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">
                    Intro Offer: 3 Mat / Barre / Yoga for €40
                  </h2>
                  <p className="text-muted-foreground">Pick & mix across all Mat, Barre & Yoga classes</p>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {[
                    "Mix any Mat, Barre or Yoga classes",
                    "Experience different instructors & styles",
                    "Valid for 30 days from your first class",
                    "First-time clients only",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild className="w-full text-lg py-6 relative text-black border-0 shadow-lg hover:brightness-105 overflow-hidden" style={sage}>
                  <a href="https://momence.com/balance/membership/Intro-Offer---3-Mat-%2F-Barre-%2F-Yoga-classes-for-%E2%82%AC40/771466" target="_blank" rel="noopener noreferrer">
                    <span className="relative z-10">Purchase Intro Offer</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Studio Availability Notice */}
        <section className="py-6 md:py-8 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-background rounded-xl border-2 border-primary/40 p-6 md:p-8">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <h3 className="text-xl font-heading font-bold text-foreground">
                  Where to find these classes
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <h4 className="font-semibold text-foreground mb-1">Mat Pilates</h4>
                  <p className="text-sm text-muted-foreground">
                    Enfield, Limerick & Kildare Town
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <h4 className="font-semibold text-foreground mb-1">Barre</h4>
                  <p className="text-sm text-muted-foreground">
                    Limerick & Kildare Town
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <h4 className="font-semibold text-foreground mb-1">Yoga</h4>
                  <p className="text-sm text-muted-foreground">
                    Limerick only
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mat/Barre/Yoga Class Packs */}
        <section className="py-10 md:py-14 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10 md:mb-12">
                <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
                  Mat, Barre & Yoga Class Packs
                </h2>
                <p className="text-lg text-muted-foreground">
                  All class packs are pick & mix — use across Mat, Barre & Yoga classes.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {[
                  { classes: 1, price: "€15", validity: "Valid 30 days from first class", popular: false, link: "https://momence.com/m/573998" },
                  { classes: 3, price: "€42", validity: "Valid 30 days from first class", popular: true, link: "https://momence.com/m/771509" },
                  { classes: 6, price: "€84", validity: "Valid 60 days from first class", popular: false, link: "https://momence.com/m/771510" },
                ].map((pack, index) => (
                  <div
                    key={pack.classes}
                    className={`relative bg-background p-6 rounded-lg border-2 hover:shadow-lg transition-all duration-300 animate-fade-in ${pack.popular ? 'border-[#A3C1AD] shadow-lg' : 'border-primary/40 hover:border-primary/60'}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {pack.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                        <span className="text-black px-3 py-1 rounded-full text-xs font-semibold shadow-md" style={sage}>
                          Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-4">
                      <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                        {pack.classes} {pack.classes === 1 ? "Class" : "Classes"}
                      </h3>
                      <div className="mb-1">
                        <span className="text-3xl font-heading font-bold text-black">{pack.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{pack.validity}</p>
                    </div>
                    <Button asChild className="w-full text-black border-0 shadow-lg hover:brightness-105" style={sage}>
                      <a href={pack.link} target="_blank" rel="noopener noreferrer">

                        Buy Now
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mat/Barre/Yoga Memberships */}
        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10 md:mb-12">
                <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
                  Mat, Barre & Yoga Memberships
                </h2>
                <p className="text-lg text-muted-foreground">
                  Best value for regular practice. Auto-renews monthly, classes don't carry over.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {[
                  { classes: "4", price: "€50", perClass: "€12.50/class", popular: false, link: "https://momence.com/m/771514" },
                  { classes: "6", price: "€75", perClass: "€12.50/class", popular: true, link: "https://momence.com/m/771691" },
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
                        {membership.classes} Classes / Month
                      </h3>
                      <p className="text-4xl font-heading font-bold text-black mb-1">
                        {membership.price}
                      </p>
                      <p className="text-sm text-muted-foreground mb-6">{membership.perClass}</p>
                    </div>

                    <ul className="space-y-2 mb-6 text-sm">
                      {[
                        "Pick & mix across Mat, Barre & Yoga",
                        "Auto-renews monthly",
                        "Priority booking",
                        "Cancel anytime",
                      ].map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button asChild className="w-full text-black border-0 shadow-lg hover:brightness-105" style={sage}>
                      <a href={membership.link} target="_blank" rel="noopener noreferrer">
                        Buy Now
                      </a>
                    </Button>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20 text-center">
                <Info className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-sm text-foreground">
                  Memberships auto-renew on the same date each month. Classes don't carry over. Cancel anytime with 7 days notice.
                </p>
              </div>
            </div>
          </div>
        </section>
        </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
