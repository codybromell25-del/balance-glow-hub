import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, ShoppingCart } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import clientsStretching from "@/assets/clients-stretching.jpg";

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

const beforeClassItems = [
  { title: "Shoe-Free Studio", content: "We're a shoe-free studio to keep our space clean and peaceful. Please remove your shoes at the entrance." },
  { title: "Grip Socks", content: "Grip socks are required for all classes. You can purchase a pair at the studio if needed." },
  { title: "Clean your Reformer", content: "Please wipe down your reformer with the provided cleaning supplies after each class." },
  { title: "Arrive Early for Your First Class", content: "We invite you to arrive 15 minutes before your first class. This allows us to give you a tour and ensure you're comfortable with the reformer." },
  { title: "Mom to Be", content: "Pregnant clients are welcome! Please inform your instructor before class so they can offer modifications." },
];

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

        {/* Hero Section with Image */}
        <section className="py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <img 
                src={studioInfo.image} 
                alt={`balance. ${studioInfo.name} Studio`} 
                className="w-full h-[250px] md:h-[400px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </section>

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

        {/* Studio Image */}
        <section className="pb-10 md:pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <img 
                src={clientsStretching} 
                alt="Pilates class in session" 
                className="w-full h-[200px] md:h-[350px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Before Your Class Section */}
        <section className="py-10 md:py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <p className="text-primary text-sm tracking-widest mb-4">— Before Your Class</p>
                <h2 className="text-2xl md:text-3xl font-heading italic text-foreground">
                  Welcome to balance.
                </h2>
              </div>
              
              <Accordion type="single" collapsible className="space-y-3">
                {beforeClassItems.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`} 
                    className="bg-background border border-border/50 rounded-lg px-6 data-[state=open]:border-primary/40"
                  >
                    <AccordionTrigger className="text-foreground hover:text-primary hover:no-underline py-4">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Memberships Section */}
        <section className="py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-primary text-sm tracking-widest mb-4">— Enjoy exclusive benefits</p>
              <h2 className="text-2xl md:text-3xl font-heading italic text-foreground">
                Flexible Memberships
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {memberships.map((membership, index) => (
                <div
                  key={membership.classes}
                  className="relative bg-background p-6 rounded-xl border border-border/50 hover:border-primary/40 hover:shadow-lg transition-all duration-300 animate-fade-in flex flex-col"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {membership.classes === "Unlimited" && (
                    <div className="absolute -top-3 right-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        Best Choice
                      </span>
                    </div>
                  )}
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-0">
                    balance. {membership.classes}
                  </h3>
                  <p className="text-sm font-semibold text-foreground mb-1">
                    {membership.subtitle}
                  </p>
                  <p className="text-xs text-muted-foreground mb-4">
                    {membership.classCount}
                  </p>
                  
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    {membership.description}
                  </p>
                  
                  <p className="text-xs text-muted-foreground italic mb-6">
                    {membership.terms}
                  </p>
                  
                  <div className="flex items-end justify-between mt-auto">
                    <p className="text-2xl md:text-3xl font-heading italic text-foreground">
                      {membership.price}
                    </p>
                    <Button size="sm" className="flex items-center gap-2">
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
        <section className="py-10 md:py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-primary text-sm tracking-widest mb-4">— Ideal for occasional visits</p>
              <h2 className="text-2xl md:text-3xl font-heading italic text-foreground">
                Class Packs
              </h2>
            </div>

            {/* Cards Grid including Intro Offer */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Intro Offer Card */}
              <div className="relative bg-background p-6 rounded-xl border border-border/50 hover:border-primary/40 hover:shadow-lg transition-all duration-300 animate-fade-in flex flex-col">
                <div className="absolute -top-3 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    Best Choice
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-0 mt-2">
                  INTRO OFFER
                </h3>
                <p className="text-sm font-semibold text-foreground mb-1">
                  3 Classes for €45
                </p>
                <p className="text-xs text-primary font-medium mb-4">
                  Limited offer!
                </p>
                
                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  Secure your spot with our limited Intro Offer: 3 classes for just €45.
                </p>
                
                <p className="text-xs text-muted-foreground italic mb-6">
                  Expires 14 days from purchase.
                </p>
                
                <div className="flex items-end justify-between mt-auto">
                  <p className="text-2xl md:text-3xl font-heading italic text-foreground">
                    €45
                  </p>
                  <Button asChild size="sm" className="flex items-center gap-2">
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
                  className="relative bg-background p-6 rounded-xl border border-border/50 hover:border-primary/40 hover:shadow-lg transition-all duration-300 animate-fade-in flex flex-col"
                  style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                >
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-0">
                    {pack.classes} Class Pack
                  </h3>
                  <p className="text-sm font-semibold text-foreground mb-1">
                    Class Pack
                  </p>
                  <p className="text-xs text-primary font-medium mb-4">
                    Limited offer!
                  </p>
                  
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    {pack.description}
                  </p>
                  
                  <p className="text-xs text-muted-foreground italic mb-6">
                    {pack.validity}
                  </p>
                  
                  <div className="flex items-end justify-between mt-auto">
                    <p className="text-2xl md:text-3xl font-heading italic text-foreground">
                      {pack.price}
                    </p>
                    <Button size="sm" className="flex items-center gap-2">
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
