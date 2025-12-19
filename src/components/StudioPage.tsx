import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, ShoppingCart, Sparkles, Star, ArrowRight } from "lucide-react";

interface StudioInfo {
  name: string;
  tagline: string;
  heroDescription: string;
  detailDescription: string;
  address: string;
  hours?: { day: string; time: string }[];
  image: string;
  locationId?: string;
  showScheduleWidget?: boolean;
}

interface StudioPageProps {
  studioInfo: StudioInfo;
}

const classPacks = [
  { classes: 3, price: "€65", validity: "30-day expiry", description: "Get access to 3 classes, valid for 30 days.", link: "https://momence.com/Balance/membership/3-Reformer-Classes/573988" },
  { classes: 6, price: "€130", validity: "60-day expiry", description: "Get access to 6 classes, valid for 60 days.", link: "https://momence.com/Balance/membership/6-Reformer-Classes/573990" },
  { classes: 10, price: "€215", validity: "310-day expiry", description: "Get access to 10 classes, valid over 10 months.", link: "https://momence.com/Balance/membership/10-Reformer-Classes/573992" },
  { classes: 20, price: "€400", validity: "610-day expiry", description: "Get access to 20 classes, valid over 20 months.", link: "https://momence.com/Balance/membership/20-Reformer-Classes/573995" },
];

const memberships = [
  { 
    classes: "4", 
    price: "€80", 
    subtitle: "Monthly Membership",
    classCount: "4 classes per month",
    description: "Enjoy access to 4 classes per month and explore our range of balance. classes at your own pace.",
    terms: "Paid monthly. Auto-renews.",
    link: "https://momence.com/Balance/membership/Monthly-Membership---4-classes/574026"
  },
  { 
    classes: "6", 
    price: "€120", 
    subtitle: "Monthly Membership",
    classCount: "6 classes per month",
    description: "Perfect for those looking to stay active and motivated with regular sessions.",
    terms: "Paid monthly. Auto-renews.",
    link: "https://momence.com/Balance/membership/Monthly-Membership---6-classes/574023"
  },
  { 
    classes: "8", 
    price: "€180", 
    subtitle: "Monthly Membership",
    classCount: "8 classes per month",
    description: "Ideal for dedicated practitioners who want consistent weekly sessions.",
    terms: "Paid monthly. Auto-renews.",
    link: "https://momence.com/Balance/membership/Monthly-membership---8-classes/574021"
  },
  { 
    classes: "Unlimited", 
    price: "€240", 
    subtitle: "Monthly Membership",
    classCount: "Unlimited classes per month",
    description: "For those who want to make balance. an essential part of their daily routine.",
    terms: "Paid monthly. Auto-renews.",
    features: ["Priority booking", "All locations", "Bring a friend once/month"],
    link: "https://momence.com/Balance/membership/Monthly-Membership---Unlimited-Reformer-classes/574005"
  },
];

const StudioPage = ({ studioInfo }: StudioPageProps) => {
  useEffect(() => {
    if (!studioInfo.showScheduleWidget) return;

    // Add Momence custom styles
    const style = document.createElement("style");
    style.innerHTML = `
      :root {
        --momenceColorBackground: #FAF3ED;
        --momenceColorPrimary: 136, 134, 241;
        --momenceColorBlack: 3, 1, 13;
      }
    `;
    document.head.appendChild(style);

    // Create and load the Momence script
    const script = document.createElement("script");
    script.async = true;
    script.type = "module";
    script.src = "https://momence.com/plugin/host-schedule/host-schedule.js";
    script.setAttribute("host_id", "62930");
    script.setAttribute("teacher_ids", "[]");
    script.setAttribute("location_ids", `[${studioInfo.locationId}]`);
    script.setAttribute("tag_ids", "[]");
    script.setAttribute("lite_mode", "true");
    script.setAttribute("default_filter", "show-all");
    script.setAttribute("locale", "en");

    const container = document.getElementById("ribbon-schedule");
    if (container) {
      container.appendChild(script);
    }

    return () => {
      style.remove();
      script.remove();
    };
  }, [studioInfo.showScheduleWidget]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section with Image */}
        <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-end overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={studioInfo.image} 
              alt={`balance ${studioInfo.name} studio`}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          </div>
          
          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-4 pb-16 md:pb-20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm tracking-widest uppercase">{studioInfo.tagline}</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading italic text-white mb-4">
                balance. <span className="text-primary">{studioInfo.name}</span>
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed">
                {studioInfo.heroDescription}
              </p>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-1/4 right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-secondary/30 rounded-full blur-2xl" />
        </section>

        {/* Quick Info Bar */}
        <section className="bg-gradient-button py-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent" />
          <div className="container mx-auto px-4 relative">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-black">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span className="font-medium text-sm md:text-base">{studioInfo.name}, Ireland</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-black/20" />
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5" />
                <span className="font-medium text-sm md:text-base">Open 7 Days a Week</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-black/20" />
              <div className="flex items-center gap-3">
                <Star className="w-5 h-5" />
                <span className="font-medium text-sm md:text-base">State-of-the-Art Reformers</span>
              </div>
            </div>
          </div>
        </section>

        {/* Studio Details Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                {/* Left Column - Info Cards */}
                <div className="space-y-6">
                  {/* Address Card */}
                  <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-button opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-button flex items-center justify-center flex-shrink-0 shadow-md">
                        <MapPin className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2">Find Us</h3>
                        <p className="text-muted-foreground leading-relaxed">{studioInfo.address}</p>
                        <Button variant="link" className="p-0 h-auto mt-3 text-primary font-medium">
                          Get Directions <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Right Column - About */}
                <div className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-3xl p-8 md:p-10 border border-primary/20">
                  <div className="absolute -top-3 -right-3 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
                  <div className="absolute -bottom-5 -left-5 w-28 h-28 bg-secondary/30 rounded-full blur-3xl" />
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-px bg-primary" />
                      <span className="text-primary text-xs tracking-widest uppercase font-medium">About Our Studio</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-heading italic text-foreground mb-6">
                      Discover the Art of Movement
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                      {studioInfo.detailDescription}
                    </p>
                    <Button 
                      size="lg" 
                      className="shadow-lg"
                      onClick={() => {
                        const scheduleSection = document.getElementById('ribbon-schedule');
                        if (scheduleSection) {
                          scheduleSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }
                      }}
                    >
                      Book Your First Class <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Momence Schedule Widget */}
        {studioInfo.showScheduleWidget && (
          <section className="py-16 md:py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-primary text-sm font-medium">Book Your Class</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading italic text-foreground">
                    Secure Your Spot Today
                  </h2>
                </div>
                <div id="ribbon-schedule" className="bg-background rounded-2xl p-4 shadow-inner"></div>
              </div>
            </div>
          </section>
        )}

        {/* Memberships Section */}
        <section className="py-16 md:py-24 bg-background relative overflow-hidden">
          <div className="absolute top-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-60 h-60 bg-secondary/20 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                <Star className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium">Exclusive Benefits</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-heading italic text-foreground">
                Flexible Memberships
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {memberships.map((membership, index) => (
                <div
                  key={membership.classes}
                  className={`relative p-6 rounded-2xl transition-all duration-300 animate-fade-in flex flex-col group
                    ${membership.classes === "Unlimited" 
                      ? "bg-gradient-to-br from-primary/15 via-white to-primary/5 border-2 border-primary/40 shadow-2xl shadow-primary/20 hover:shadow-3xl hover:-translate-y-2 scale-[1.02]" 
                      : "bg-white border border-border shadow-lg hover:shadow-xl hover:border-primary/30 hover:-translate-y-1"
                    }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {membership.classes === "Unlimited" && (
                    <div className="absolute -top-3 right-4 z-10">
                      <span className="bg-gradient-button text-black px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black/30 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-black/50"></span>
                        </span>
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className={`absolute top-0 left-0 h-1 rounded-t-2xl transition-opacity ${membership.classes === "Unlimited" ? "w-[60%] bg-gradient-button opacity-100" : "w-full bg-gradient-to-r from-primary/30 via-primary/60 to-primary/30 opacity-0 group-hover:opacity-100"}`} />
                  
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
                    <Button asChild size="sm" className="flex items-center gap-2 shadow-md hover:shadow-lg transition-shadow">
                      <a href={membership.link} target="_blank" rel="noopener noreferrer">
                        Buy Now
                        <ShoppingCart className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Class Packs Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-secondary/50 rounded-full px-4 py-2 mb-4">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium">Flexible Options</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-heading italic text-foreground">
                Class Packs
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Intro Offer Card */}
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-primary/20 via-white to-primary/10 border-2 border-primary/40 shadow-2xl shadow-primary/20 hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 animate-fade-in flex flex-col group md:col-span-2 lg:col-span-1 lg:row-span-2">
                <div className="absolute -top-3 left-4 z-10">
                  <span className="bg-gradient-button text-black px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black/30 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-black/50"></span>
                    </span>
                    New Client Special
                  </span>
                </div>
                <div className="absolute top-0 right-0 w-[60%] h-1.5 bg-gradient-button rounded-tr-3xl" />
                
                <div className="text-center mt-4 mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    INTRO OFFER
                  </h3>
                  <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
                </div>
                
                <div className="text-center mb-6">
                  <p className="text-5xl md:text-6xl font-heading italic text-foreground mb-2">€45</p>
                  <p className="text-lg font-semibold text-primary">3 Classes</p>
                </div>
                
                <p className="text-sm text-muted-foreground mb-6 flex-grow leading-relaxed text-center">
                  Secure your spot with our limited Intro Offer. Perfect for first-timers ready to discover the balance. experience.
                </p>
                
                <p className="text-xs text-muted-foreground italic mb-6 text-center">
                  Expires 14 days from purchase
                </p>
                
                <Button asChild size="lg" className="w-full shadow-lg hover:shadow-xl transition-shadow">
                  <a href="https://momence.com/sign-up/visitor" target="_blank" rel="noopener noreferrer">
                    Get Started <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>

              {/* Other Class Packs */}
              {classPacks.map((pack, index) => (
                <div
                  key={pack.classes}
                  className="relative p-6 rounded-2xl bg-background border border-border shadow-lg hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 animate-fade-in flex flex-col group"
                  style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/30 via-primary/60 to-primary/30 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">
                    {pack.classes} Class Pack
                  </h3>
                  <p className="text-xs text-muted-foreground mb-4">
                    {pack.validity}
                  </p>
                  
                  <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">
                    {pack.description}
                  </p>
                  
                  <div className="flex items-end justify-between mt-auto pt-4 border-t border-border/50">
                    <p className="text-2xl md:text-3xl font-heading italic text-foreground">
                      {pack.price}
                    </p>
                    <Button asChild size="sm" className="flex items-center gap-2 shadow-md hover:shadow-lg transition-shadow">
                      <a href={pack.link} target="_blank" rel="noopener noreferrer">
                        Buy Now
                        <ShoppingCart className="w-4 h-4" />
                      </a>
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
