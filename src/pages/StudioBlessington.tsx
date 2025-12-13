import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, Instagram, Users, Clock, Sparkles } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import studioBlessington from "@/assets/studio-blessington.png";
import clientsStretching from "@/assets/clients-stretching.jpg";

const StudioBlessington = () => {
  const studioInfo = {
    name: "Blessington",
    tagline: "Dynamic Reformer Pilates. Make the right move.",
    heroDescription: "Whether you're a beginner or an experienced practitioner, balance. Blessington has the perfect class for you. Secure your spot with our limited Intro Offer: 3 classes for just €45, or explore our flexible class packs and memberships to suit your schedule.",
    detailDescription: "Elevate your fitness routine at the ultimate Reformer Pilates studio in Blessington. Nestled on The Green in the heart of Main Street, our purpose-built studio features state-of-the-art reformers offering the ultimate boutique experience. Just a short drive from Wicklow and surrounding areas, we're ready to welcome you.",
    address: "1a The Green, Main St, Blessington, Co. Wicklow, W91 PNV2, Ireland",
    email: "hello@balancepilates.ie",
    phone: "+353 1 234 5678",
    instagram: "@balancepilates",
    capacity: "8 spots",
    hours: [
      { day: "Monday", time: "06:30 - 20:30" },
      { day: "Tuesday", time: "06:30 - 20:30" },
      { day: "Wednesday", time: "06:30 - 20:30" },
      { day: "Thursday", time: "06:30 - 18:30" },
      { day: "Friday", time: "06:30 - 20:30" },
      { day: "Saturday", time: "08:30 - 14:45" },
      { day: "Sunday", time: "08:30 - 11:45" },
    ],
  };

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

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
              <div className="animate-fade-in">
                <p className="text-primary text-sm tracking-widest mb-4">— {studioInfo.name}</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-foreground mb-6">
                  balance. {studioInfo.name}
                </h1>
                <p className="text-muted-foreground leading-relaxed mb-8">{studioInfo.heroDescription}</p>
                <div className="flex gap-4">
                  <Button asChild size="lg"><a href="/book-class">Book Now</a></Button>
                  <Button asChild variant="outline" size="lg"><a href="/pricing">Buy Packs</a></Button>
                </div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <img src={studioBlessington} alt="balance. Blessington Studio" className="w-full h-[400px] object-cover rounded-2xl shadow-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Studio Details Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="animate-fade-in">
                <p className="text-primary text-sm tracking-widest mb-4">— {studioInfo.tagline}</p>
                <h2 className="text-3xl md:text-4xl font-heading italic text-foreground mb-6">
                  Elevate your fitness routine at the ultimate Reformer Pilates studio in {studioInfo.name}.
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">{studioInfo.detailDescription}</p>
                <div className="flex gap-4">
                  <Button asChild size="lg"><a href="/book-class">Book Now</a></Button>
                  <Button asChild variant="outline" size="lg"><a href="/pricing">Buy Packs</a></Button>
                </div>
              </div>
              <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                {[
                  { icon: MapPin, label: "Address", value: studioInfo.address },
                  { icon: Mail, label: "Email", value: studioInfo.email, href: `mailto:${studioInfo.email}` },
                  { icon: Phone, label: "Phone", value: studioInfo.phone, href: `tel:${studioInfo.phone}` },
                  { icon: Instagram, label: "Instagram", value: studioInfo.instagram },
                  { icon: Users, label: "Capacity per class", value: studioInfo.capacity },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-foreground hover:text-primary transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Opening Hours</p>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
                      {studioInfo.hours.map((item) => (
                        <div key={item.day} className="flex justify-between">
                          <span className="text-muted-foreground">{item.day}</span>
                          <span className="text-foreground">— {item.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Discover Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-primary text-sm tracking-widest mb-4">— Our studio</p>
              <h2 className="text-3xl md:text-4xl font-heading italic text-foreground">Discover the Art of Movement</h2>
            </div>
            <div className="max-w-5xl mx-auto">
              <img src={clientsStretching} alt="Pilates class in session" className="w-full h-[300px] md:h-[450px] object-cover rounded-2xl shadow-xl" />
            </div>
          </div>
        </section>

        {/* Before Your Class Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="animate-fade-in">
                <p className="text-primary text-sm tracking-widest mb-4">— Before Your Class</p>
                <h2 className="text-3xl md:text-4xl font-heading italic text-foreground mb-6">Welcome to balance.!</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're an experienced practitioner or new to Reformer Pilates, we invite you to arrive 15 minutes before your class starts. This allows us to give you a tour and ensure you're comfortable with the reformer.
                </p>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <Accordion type="single" collapsible className="space-y-3">
                  {beforeClassItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-lg px-6 data-[state=open]:border-primary/40">
                      <AccordionTrigger className="text-foreground hover:text-primary hover:no-underline py-4">{item.title}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">{item.content}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Memberships Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-primary text-sm tracking-widest mb-4">— Enjoy exclusive benefits</p>
              <h2 className="text-3xl md:text-4xl font-heading italic text-foreground">Flexible Memberships</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {memberships.map((membership, index) => (
                <div key={membership.classes} className="relative bg-white p-8 rounded-xl border border-border/50 hover:border-primary/40 hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  {membership.classes === "Unlimited" && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">Best Choice</span>
                    </div>
                  )}
                  <h3 className="text-lg font-heading italic text-foreground mb-2">balance. {membership.classes}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{membership.classes === "Unlimited" ? "Unlimited" : membership.classes} classes per month</p>
                  <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                    <li>• Auto-renews monthly</li>
                    <li>• Priority booking</li>
                    <li>• Valid all locations</li>
                  </ul>
                  <p className="text-3xl font-heading italic text-foreground mb-4">{membership.price}</p>
                  <Button className="w-full">Buy Now</Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Class Packs Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-primary text-sm tracking-widest mb-4">— Ideal for those occasional visits</p>
              <h2 className="text-3xl md:text-4xl font-heading italic text-foreground">Class Packs</h2>
            </div>
            <div className="max-w-md mx-auto mb-10">
              <div className="relative bg-background p-8 rounded-xl border-2 border-primary/40 animate-fade-in">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="relative bg-gradient-button text-black px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-2 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-black/5 rounded-full" />
                    <Sparkles className="w-4 h-4 relative z-10" />
                    <span className="relative z-10">Best Choice</span>
                  </div>
                </div>
                <h3 className="text-xl font-heading italic text-foreground mt-2 mb-1">INTRO OFFER</h3>
                <p className="text-2xl font-heading italic text-foreground mb-2">3 Classes for €45</p>
                <p className="text-sm text-muted-foreground mb-4">Limited offer!</p>
                <p className="text-sm text-muted-foreground mb-6">Secure your spot with our limited Intro Offer: 3 classes for just €45.</p>
                <p className="text-3xl font-heading italic text-foreground mb-4">€45</p>
                <Button asChild className="w-full"><a href="https://momence.com/sign-up/visitor" target="_blank" rel="noopener noreferrer">Buy Now</a></Button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {classPacks.map((pack, index) => (
                <div key={pack.classes} className="bg-white p-8 rounded-xl border border-border/50 hover:border-primary/40 hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <h3 className="text-lg font-heading italic text-foreground mb-2">{pack.classes} Class Pack</h3>
                  <p className="text-sm text-muted-foreground mb-4">{pack.validity}</p>
                  <p className="text-3xl font-heading italic text-foreground mb-4">{pack.price}</p>
                  <Button className="w-full">Buy Now</Button>
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

export default StudioBlessington;
