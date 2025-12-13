import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Sparkles } from "lucide-react";
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
  { classes: 1, price: "€24", validity: "Valid 30 days" },
  { classes: 3, price: "€65", validity: "Valid 30 days" },
  { classes: 10, price: "€215", validity: "Valid 310 days" },
  { classes: 20, price: "€400", validity: "Valid 610 days" },
];

const memberships = [
  { classes: "4", price: "€80", perClass: "€20/class" },
  { classes: "6", price: "€120", perClass: "€20/class" },
  { classes: "8", price: "€180", perClass: "€22.50/class" },
  { classes: "Unlimited", price: "€240", perClass: "Best Value" },
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

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
              {memberships.map((membership, index) => (
                <div
                  key={membership.classes}
                  className="relative bg-background p-4 md:p-6 rounded-xl border border-border/50 hover:border-primary/40 hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {membership.classes === "Unlimited" && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-2 md:px-3 py-1 rounded-full text-[10px] md:text-xs font-semibold whitespace-nowrap">
                        Best Choice
                      </span>
                    </div>
                  )}
                  <h3 className="text-sm md:text-lg font-heading italic text-foreground mb-1 md:mb-2">
                    balance. {membership.classes}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                    {membership.classes === "Unlimited" ? "Unlimited" : membership.classes} classes/month
                  </p>
                  <p className="text-xl md:text-3xl font-heading italic text-foreground mb-3 md:mb-4">
                    {membership.price}
                  </p>
                  <Button className="w-full text-xs md:text-sm" size="sm">
                    Buy Now
                  </Button>
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

            {/* Intro Offer */}
            <div className="max-w-sm mx-auto mb-10">
              <div className="relative bg-background p-6 md:p-8 rounded-xl border-2 border-primary/40 animate-fade-in">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="relative bg-gradient-button text-black px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-2 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-black/5 rounded-full" />
                    <Sparkles className="w-4 h-4 relative z-10" />
                    <span className="relative z-10">New Client</span>
                  </div>
                </div>
                <h3 className="text-xl font-heading italic text-foreground mt-2 mb-1 text-center">INTRO OFFER</h3>
                <p className="text-2xl font-heading italic text-foreground mb-2 text-center">3 Classes for €45</p>
                <p className="text-sm text-muted-foreground mb-6 text-center">Perfect way to start your balance. journey</p>
                <Button asChild className="w-full">
                  <a href="https://momence.com/sign-up/visitor" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
              {classPacks.map((pack, index) => (
                <div
                  key={pack.classes}
                  className="bg-background p-4 md:p-6 rounded-xl border border-border/50 hover:border-primary/40 hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-sm md:text-lg font-heading italic text-foreground mb-1 md:mb-2">
                    {pack.classes} Class Pack
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">{pack.validity}</p>
                  <p className="text-xl md:text-3xl font-heading italic text-foreground mb-3 md:mb-4">
                    {pack.price}
                  </p>
                  <Button className="w-full text-xs md:text-sm" size="sm">
                    Buy Now
                  </Button>
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
