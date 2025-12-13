import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, ShoppingCart } from "lucide-react";

interface StudioInfo {
  name: string;
  tagline: string;
  heroDescription: string;
  detailDescription: string;
  address: string;
  hours: { day: string; time: string }[];
  image: string;
}

interface StudioPageProps {
  studioInfo: StudioInfo;
}

const classPacks = [
  { classes: 1, price: "€24", validity: "30-day expiry", description: "Book any balance. class with this flexible single session." },
  { classes: 3, price: "€65", validity: "30-day expiry", description: "Get access to 3 classes, valid for 30 days." },
  { classes: 10, price: "€215", validity: "310-day expiry", description: "Get access to 10 classes, valid over 10 months." },
  { classes: 20, price: "€400", validity: "610-day expiry", description: "Get access to 20 classes, valid over 20 months." },
];

const memberships = [
  { 
    classes: "4", 
    price: "€80", 
    subtitle: "Monthly Membership",
    classCount: "4 classes per month",
    description: "Enjoy access to 4 classes per month and explore our range of balance. classes at your own pace.",
    terms: "Paid monthly. Auto-renews."
  },
  { 
    classes: "6", 
    price: "€120", 
    subtitle: "Monthly Membership",
    classCount: "6 classes per month",
    description: "Perfect for those looking to stay active and motivated with regular sessions.",
    terms: "Paid monthly. Auto-renews."
  },
  { 
    classes: "8", 
    price: "€180", 
    subtitle: "Monthly Membership",
    classCount: "8 classes per month",
    description: "Ideal for dedicated practitioners who want consistent weekly sessions.",
    terms: "Paid monthly. Auto-renews."
  },
  { 
    classes: "Unlimited", 
    price: "€240", 
    subtitle: "Monthly Membership",
    classCount: "Unlimited classes per month",
    description: "For those who want to make balance. an essential part of their daily routine.",
    terms: "Paid monthly. Auto-renews.",
    features: ["Priority booking", "All locations", "Bring a friend once/month"]
  },
];

const StudioPage = ({ studioInfo }: StudioPageProps) => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Page Header */}
        <PageHeader title={`balance ${studioInfo.name}`} />


        {/* Studio Info Section */}
        <section className="py-10 md:py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <p className="text-primary text-sm tracking-widest mb-4">— {studioInfo.tagline}</p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading italic text-foreground mb-6">
                  {studioInfo.heroDescription}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                {/* Address */}
                <div className="bg-background rounded-xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Find Us</p>
                      <p className="text-foreground leading-relaxed">{studioInfo.address}</p>
                    </div>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="bg-background rounded-xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Opening Hours</p>
                      <div className="space-y-1.5">
                        {studioInfo.hours.map((item) => (
                          <div key={item.day} className="flex justify-between text-sm">
                            <span className="text-muted-foreground">{item.day}</span>
                            <span className="text-foreground font-medium">{item.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                <Button asChild size="lg">
                  <a href="/book-class">Book Now</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="/pricing">View Pricing</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About the Studio */}
        <section className="py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-primary text-sm tracking-widest mb-4">— Our Studio</p>
              <h2 className="text-2xl md:text-3xl font-heading italic text-foreground mb-6">
                Discover the Art of Movement
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {studioInfo.detailDescription}
              </p>
            </div>
          </div>
        </section>



        {/* Memberships Section */}
        <section className="py-10 md:py-16 bg-gradient-to-b from-background to-secondary/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-primary text-sm tracking-widest mb-4">— Enjoy exclusive benefits</p>
              <h2 className="text-2xl md:text-4xl font-heading italic text-foreground">
                Flexible Memberships
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {memberships.map((membership, index) => (
                <div
                  key={membership.classes}
                  className={`relative p-6 rounded-2xl transition-all duration-300 animate-fade-in flex flex-col group
                    ${membership.classes === "Unlimited" 
                      ? "bg-gradient-to-br from-primary/10 via-background to-primary/5 border-2 border-primary/30 shadow-xl shadow-primary/10 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1" 
                      : "bg-background border border-border shadow-lg hover:shadow-xl hover:border-primary/30 hover:-translate-y-1"
                    }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {membership.classes === "Unlimited" && (
                    <div className="absolute -top-3 right-4">
                      <span className="bg-gradient-button text-black px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                        Best Choice
                      </span>
                    </div>
                  )}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-0">
                    balance. {membership.classes}
                  </h3>
                  <p className="text-sm font-semibold text-primary mb-1">
                    {membership.subtitle}
                  </p>
                  <p className="text-xs text-muted-foreground mb-4">
                    {membership.classCount}
                  </p>
                  
                  <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">
                    {membership.description}
                  </p>
                  
                  <p className="text-xs text-muted-foreground italic mb-6">
                    {membership.terms}
                  </p>
                  
                  <div className="flex items-end justify-between mt-auto pt-4 border-t border-border/50">
                    <p className="text-2xl md:text-3xl font-heading italic text-foreground">
                      {membership.price}
                    </p>
                    <Button size="sm" className="flex items-center gap-2 shadow-md hover:shadow-lg transition-shadow">
                      Buy Now
                      <ShoppingCart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Class Packs Section */}
        <section className="py-10 md:py-16 bg-gradient-to-b from-secondary/40 to-secondary/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-primary text-sm tracking-widest mb-4">— Ideal for occasional visits</p>
              <h2 className="text-2xl md:text-4xl font-heading italic text-foreground">
                Class Packs
              </h2>
            </div>

            {/* Cards Grid including Intro Offer */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Intro Offer Card */}
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-primary/15 via-background to-primary/5 border-2 border-primary/40 shadow-xl shadow-primary/10 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 animate-fade-in flex flex-col group md:col-span-2 lg:col-span-1">
                <div className="absolute -top-3 left-4">
                  <span className="bg-gradient-button text-black px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Best Choice
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/80 to-primary rounded-t-2xl" />
                
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-0 mt-3">
                  INTRO OFFER
                </h3>
                <p className="text-base font-semibold text-primary mb-1">
                  3 Classes for €45
                </p>
                <p className="text-sm text-primary font-medium mb-4 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Limited offer!
                </p>
                
                <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">
                  Secure your spot with our limited Intro Offer: 3 classes for just €45. Perfect for first-timers!
                </p>
                
                <p className="text-xs text-muted-foreground italic mb-6">
                  Expires 14 days from purchase.
                </p>
                
                <div className="flex items-end justify-between mt-auto pt-4 border-t border-primary/20">
                  <p className="text-3xl md:text-4xl font-heading italic text-foreground">
                    €45
                  </p>
                  <Button asChild size="default" className="flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow">
                    <a href="https://momence.com/sign-up/visitor" target="_blank" rel="noopener noreferrer">
                      Buy Now
                      <ShoppingCart className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Other Class Packs */}
              {classPacks.map((pack, index) => (
                <div
                  key={pack.classes}
                  className="relative p-6 rounded-2xl bg-background border border-border shadow-lg hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 animate-fade-in flex flex-col group"
                  style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/30 via-primary/60 to-primary/30 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-0">
                    {pack.classes} Class Pack
                  </h3>
                  <p className="text-sm font-semibold text-primary mb-1">
                    Class Pack
                  </p>
                  <p className="text-xs text-primary/80 font-medium mb-4">
                    Limited offer!
                  </p>
                  
                  <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">
                    {pack.description}
                  </p>
                  
                  <p className="text-xs text-muted-foreground italic mb-6">
                    {pack.validity}
                  </p>
                  
                  <div className="flex items-end justify-between mt-auto pt-4 border-t border-border/50">
                    <p className="text-2xl md:text-3xl font-heading italic text-foreground">
                      {pack.price}
                    </p>
                    <Button size="sm" className="flex items-center gap-2 shadow-md hover:shadow-lg transition-shadow">
                      Buy Now
                      <ShoppingCart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default StudioPage;
