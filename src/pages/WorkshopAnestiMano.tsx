import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Award, CheckCircle } from "lucide-react";
import anestiImage from "@/assets/anesti-mano.jpg";

const WorkshopAnestiMano = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Reformer Gym Vibes® Workshop with Anesti Mano | balance studios"
        description="2-day NPCP-accredited Reformer Gym Vibes® workshop with Anesti Mano at balance Bray. 10 hours, 12 CEC points. May 16-17, 2026."
        canonical="/workshop/anesti-mano"
        noindex />

      <Navigation />
      <main className="pt-28 md:pt-32">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90" />
          <div className="relative container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              {/* Text */}
              <div className="text-center md:text-left space-y-6">
                <p className="text-primary font-heading font-bold tracking-[0.3em] uppercase text-sm">
                  balance studios x Algo Pilates
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-background leading-[0.95] tracking-tight">
                  Reformer
                  <br />
                  Gym Vibes<span className="text-primary">®</span>
                </h1>
                <p className="text-background/70 text-lg md:text-xl font-heading font-light max-w-lg">
                  A 2-day intensive workshop with internationally recognised Pilates educator{" "}
                  <span className="text-background font-medium">Anesti Mano</span>
                </p>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
                  <div className="flex items-center gap-2 bg-background/10 backdrop-blur-sm rounded-full px-4 py-2">
                    <Calendar size={16} className="text-[#A3C1AD]" />
                    <span className="text-background/90 text-sm font-heading">16 & 17 May 2026</span>
                  </div>
                  <div className="flex items-center gap-2 bg-background/10 backdrop-blur-sm rounded-full px-4 py-2">
                    <Clock size={16} className="text-[#A3C1AD]" />
                    <span className="text-background/90 text-sm font-heading">12 Hours</span>
                  </div>
                  <div className="flex items-center gap-2 bg-background/10 backdrop-blur-sm rounded-full px-4 py-2">
                    <MapPin size={16} className="text-[#A3C1AD]" />
                    <span className="text-background/90 text-sm font-heading">balance Bray -Ireland </span>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-background/50 text-xs font-heading uppercase tracking-widest mb-1">Investment</p>
                  <p className="text-5xl md:text-6xl font-heading font-black text-background">
                    €495
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={anestiImage}
                    alt="Anesti Mano - Pilates educator and creator of Reformer Gym Vibes"
                    className="w-full h-full object-cover object-top" />

                </div>
                <div className="absolute -bottom-4 -left-4 bg-primary text-foreground rounded-xl px-5 py-3 shadow-lg">
                  <p className="font-heading font-bold text-sm">NPCP Accredited</p>
                  <p className="font-heading text-xs">12 CEC Points</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accreditation Banner */}
        <section className="bg-primary py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
              <div className="flex items-center gap-2">
                <Award size={20} className="text-foreground" />
                <span className="font-heading font-bold text-foreground text-sm">NPCP Accredited</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-foreground" />
                <span className="font-heading font-bold text-foreground text-sm">12 CEC Points</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={20} className="text-foreground" />
                <span className="font-heading font-bold text-foreground text-sm">10 Hours Training</span>
              </div>
            </div>
          </div>
        </section>

        {/* About the Workshop */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-[#A3C1AD] font-heading font-bold tracking-[0.2em] uppercase text-xs mb-4">
                About the Workshop
              </p>
              <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground mb-8 leading-tight">
                Where Pilates Meets
                <br />
                Modern Strength<span className="text-primary">.</span>
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-heading font-light">
                <p>
                  Reformer Gym Vibes® is an innovative resistance-based strength workout that combines 
                  Pilates with the benefits of 3-dimensional movement. What started as a single class that 
                  became the most in-demand session in the UAE has now evolved into a global workshop series, 
                  training instructors worldwide and redefining how Pilates can unlock true strength.
                </p>
                <p>
                  This 2-day intensive at balance Bray will equip you with the tools and methodology to 
                  bring this contemporary, athletic-inspired approach to your own teaching — blending movement 
                  principles with modern strength training for stronger, more resilient bodies at any age.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Anesti */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-[#A3C1AD] font-heading font-bold tracking-[0.2em] uppercase text-xs mb-4">
                Your Educator
              </p>
              <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground mb-8 leading-tight">
                Anesti Mano<span className="text-primary">.</span>
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-heading font-light">
                <p>
                  Anesti Mano is an internationally recognised Pilates educator and a leader in modern 
                  Pilates education. With deep roots in strength training and competitive men's physique 
                  as a natural bodybuilding athlete, he transitioned to Pilates, believing it offers a safer, 
                  more effective path to strength and longevity than traditional gym training.
                </p>
                <p>
                  His approach blends movement principles with athletic-inspired movements, helping people 
                  build stronger, more resilient bodies at any age.
                </p>
                <p>
                  Founder of <strong className="text-foreground">Algo Pilates</strong> and official brand ambassador of{" "}
                  <strong className="text-foreground">Align Pilates</strong>, Anesti's NPCP-accredited workshops have 
                  trained instructors across the globe.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-[#A3C1AD] font-heading font-bold tracking-[0.2em] uppercase text-xs mb-4">
                Workshop Details
              </p>
              <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground mb-12 leading-tight">
                Everything You Need
                <br />
                to Know<span className="text-primary">.</span>
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                { icon: Calendar, label: "Dates", value: "Saturday 16 & Sunday 17 May 2026" },
                { icon: Clock, label: "Duration", value: "10 hours across 2 days" },
                { icon: MapPin, label: "Location", value: "balance Bray Studio" },
                { icon: Award, label: "Accreditation", value: "NPCP Accredited — 12 CEC Points" }].
                map((item) =>
                <div
                  key={item.label}
                  className="bg-secondary/30 rounded-xl p-6 border border-border">

                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-[#A3C1AD]/20 flex items-center justify-center">
                        <item.icon size={18} className="text-[#A3C1AD]" />
                      </div>
                      <p className="font-heading font-bold text-foreground text-sm uppercase tracking-wider">
                        {item.label}
                      </p>
                    </div>
                    <p className="text-muted-foreground font-heading text-lg">{item.value}</p>
                  </div>
                )}
              </div>

              {/* CTA */}
              <div className="mt-16 text-center bg-foreground rounded-2xl p-10 md:p-14">
                <p className="text-background/60 font-heading text-sm uppercase tracking-[0.2em] mb-2">
                  Secure your spot
                </p>
                <p className="text-4xl md:text-5xl font-heading font-black text-background mb-2">€495</p>
                <p className="text-background/60 font-heading text-sm mb-8">
                  Limited spaces available
                </p>
                <a href="https://momence.com/balance/Anesti-Mano-Workshop-/131993809" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="h-14 px-10 text-base bg-[#A3C1AD] hover:bg-[#8FB09A] text-white">

                    Book Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>);

};

export default WorkshopAnestiMano;