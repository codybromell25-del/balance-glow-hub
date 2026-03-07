import { useState } from "react";
import { MapPin, Calendar, ArrowRight, Sparkles, Heart, Users, Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import balanceLogo from "@/assets/balance-removebg-preview.png";
import studioReformersWide from "@/assets/studio-reformers-wide.jpg";
import clientsLaughing from "@/assets/clients-laughing.jpg";
import instructorLaughing from "@/assets/instructor-laughing.jpg";
import clientsStretching from "@/assets/clients-stretching.jpg";
import studioInstructorHelping from "@/assets/studio-instructor-helping.jpg";
import studioInteriorPlants from "@/assets/studio-interior-plants.jpg";
import studioWelcome from "@/assets/studio-welcome.jpg";

const Limerick = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    try {
      const { data, error: fnError } = await supabase.functions.invoke("send-limerick-interest", {
        body: { name, email },
      });
      if (fnError) throw fnError;
      setSubmitted(true);
    } catch (err) {
      console.error("Error submitting interest:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="balance studios | Coming to Limerick May 2026"
        description="balance is opening in Limerick at The Coach House, Henry Street. Reformer Pilates, Mat Pilates, Yoga & Barre. Register for early access to timetables and launch offers."
        canonical="/studio/limerick"
        noindex={true}
      />
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          <img
            src={studioReformersWide}
            alt="balance studio reformer pilates"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl pt-12">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-5 h-5 text-[#A3C1AD]" />
                <span className="text-[#A3C1AD] text-sm font-heading font-semibold uppercase tracking-[0.2em]">
                  Opening May 2026
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-light text-white tracking-tight leading-[0.95] mb-6">
                balance is
                <br />
                coming to
                <br />
                <span className="font-medium">Limerick.</span>
              </h1>

              <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
                A beautifully designed space for Reformer Pilates, Mat Pilates, Yoga & Barre — opening at The Coach House, Henry Street.
              </p>

              <a href="#register" className="inline-block">
                <Button size="lg" className="h-14 px-10 text-base rounded-full bg-[#A3C1AD] hover:bg-[#8FB09A] text-black shadow-lg">
                  Register Your Interest
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Location Announcement */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <MapPin className="w-5 h-5 text-[#A3C1AD]" />
                <span className="text-sm text-[#A3C1AD] font-heading font-semibold uppercase tracking-[0.15em]">
                  Our New Home
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground mb-6 tracking-tight">
                The Coach House, Henry Street
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
                Expect a full timetable of Reformer Pilates, Mat Pilates, Yoga, and Barre — for all levels, led by highly trained instructors in a calm, beautifully designed space.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: "Reformer Pilates", label: "Reformer Pilates" },
                  { icon: "Mat Pilates", label: "Mat Pilates" },
                  { icon: "Yoga", label: "Yoga" },
                  { icon: "Barre", label: "Barre" },
                ].map((item) => (
                  <div key={item.label} className="bg-card rounded-2xl p-6 shadow-sm border border-border/50">
                    <p className="font-heading font-medium text-foreground text-lg">{item.label}</p>
                    <p className="text-sm text-muted-foreground mt-1">All levels welcome</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Human Moments Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground mb-4 tracking-tight">
                  This is balance.
                </h2>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                  Real people. Real connections. A studio experience that feels like home.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] group col-span-1">
                  <img
                    src={clientsLaughing}
                    alt="Clients enjoying pilates together"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <p className="absolute bottom-5 left-5 right-5 text-white font-heading text-lg font-medium">
                    The joy of moving together
                  </p>
                </div>

                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] group col-span-1">
                  <img
                    src={instructorLaughing}
                    alt="Instructor guiding a client"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <p className="absolute bottom-5 left-5 right-5 text-white font-heading text-lg font-medium">
                    Expert guidance, always
                  </p>
                </div>

                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] group col-span-2 md:col-span-1">
                  <img
                    src={clientsStretching}
                    alt="Clients stretching in class"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <p className="absolute bottom-5 left-5 right-5 text-white font-heading text-lg font-medium">
                    Find your flow
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About balance */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={studioInstructorHelping}
                  alt="balance instructor helping a client on the reformer"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              
              <div>
                <span className="text-sm text-[#A3C1AD] font-heading font-semibold uppercase tracking-[0.15em] mb-4 block">
                  About balance
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground mb-6 tracking-tight">
                  For those who expect more.
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Founded in 2015, balance has grown from a small home studio into a premium multi-studio brand — known for high standards, expert teaching, and a fiercely loyal community.
                  </p>
                  <p>
                    With five studios across Kildare, Wicklow and Meath, we're now bringing the balance experience to Limerick — the same warmth, the same quality, and the same commitment to helping you feel your absolute best.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-6 mt-10">
                  <div className="text-center">
                    <p className="text-3xl font-heading font-medium text-foreground">10+</p>
                    <p className="text-sm text-muted-foreground mt-1">Years</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-heading font-medium text-foreground">6</p>
                    <p className="text-sm text-muted-foreground mt-1">Studios</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-heading font-medium text-foreground">5★</p>
                    <p className="text-sm text-muted-foreground mt-1">Rated</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground mb-8 tracking-tight">
                  What to expect at balance Limerick
                </h2>
                
                <div className="space-y-6">
                  {[
                    { icon: Star, title: "Premium Equipment", desc: "State-of-the-art reformers in a purpose-built, beautifully designed space." },
                    { icon: Users, title: "Small Group Classes", desc: "Intimate class sizes so you get the attention you deserve, every single session." },
                    { icon: Heart, title: "All Levels Welcome", desc: "Whether it's your first class or your five hundredth, you belong here." },
                    { icon: Calendar, title: "Full Timetable", desc: "Reformer Pilates, Mat Pilates, Yoga and Barre — all under one roof." },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-[#A3C1AD]/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <item.icon className="w-5 h-5 text-[#A3C1AD]" />
                      </div>
                      <div>
                        <h3 className="font-heading font-medium text-foreground text-lg mb-1">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                  <img
                    src={studioInteriorPlants}
                    alt="balance studio interior"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mt-8">
                  <img
                    src={studioWelcome}
                    alt="balance studio welcome"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Register Interest CTA */}
        <section id="register" className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, #b8d4c3 0%, #A3C1AD 40%, #8fb39c 100%)' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <Sparkles className="w-8 h-8 text-black/70 mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-heading font-medium text-black mb-4 tracking-tight">
                Be the first to know.
              </h2>
              <p className="text-black/80 text-lg mb-10 leading-relaxed">
                Register your interest for early access to our opening timetable, bookings, and limited launch offers.
              </p>

              {submitted ? (
                <div className="bg-white/30 rounded-2xl p-8 backdrop-blur-sm">
                  <Heart className="w-10 h-10 text-black/70 mx-auto mb-4" />
                  <h3 className="text-2xl font-heading font-medium text-black mb-2">You're on the list!</h3>
                  <p className="text-black/70">We'll be in touch with all the details as we get closer to opening day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                  <Input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="h-14 bg-white/30 border-white/40 text-black placeholder:text-black/60 font-heading text-base rounded-xl"
                  />
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-14 bg-white/30 border-white/40 text-black placeholder:text-black/60 font-heading text-base rounded-xl"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-black text-white font-heading font-semibold text-base rounded-xl hover:bg-black/90 shadow-lg disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Register Your Interest"}
                    {!isSubmitting && <ArrowRight className="w-5 h-5 ml-2" />}
                  </Button>
                  {error && <p className="text-red-800 text-sm mt-2">{error}</p>}
                  <p className="text-black/60 text-xs mt-4">
                    By registering, you consent to receive updates from balance about our Limerick studio launch.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Limerick;
