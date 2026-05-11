import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import LimerickLeadPopup from "@/components/LimerickLeadPopup";
import { Button } from "@/components/ui/button";
import { Sparkles, MapPin, Calendar, Users, Award } from "lucide-react";
import balanceLogo from "@/assets/balance-removebg-preview.png";
import studioReformersWide from "@/assets/studio-reformers-wide.jpg";
import limerickReformer from "@/assets/limerick-reformer-instructor.jpg";
import instructorLaughing from "@/assets/instructor-laughing.jpg";
import clientsStretching from "@/assets/clients-stretching.jpg";
import clientsMat from "@/assets/clients-mat-workout.jpg";
import studioInstructor from "@/assets/studio-instructor-helping.jpg";

const openLeadForm = () => {
  window.dispatchEvent(new Event("open-limerick-lead-popup"));
};

const LimerickComingSoon = () => {
  const classTypes = [
    { title: "Reformer Pilates", desc: "Dynamic, low-impact strength and tone on state-of-the-art reformers." },
    { title: "Mat Pilates", desc: "Classic mat-based Pilates to build core strength and mobility." },
    { title: "Yoga", desc: "Grounding flows for flexibility, balance, and mindful movement." },
    { title: "Barre", desc: "Ballet-inspired sculpting for long, lean lines and stamina." },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="balance Limerick — Coming 2026 | balance studios"
        description="balance is coming to Limerick. Reformer Pilates, Mat, Yoga and Barre at The Coach House, Henry Street. Register your interest for early access."
        canonical="/limerick-coming-soon"
        noindex
      />
      <Navigation />

      <main>
        {/* HERO */}
        <section
          className="relative min-h-[80vh] flex items-center justify-center pt-20"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${studioReformersWide})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto px-4 py-20 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#A3C1AD]/90 mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-black" />
              <p className="text-xs font-semibold uppercase tracking-widest text-black">
                Opening 2026
              </p>
              <Sparkles className="w-4 h-4 text-black" />
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              balance is coming to Limerick
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
              A beautifully designed new home for Reformer Pilates, Mat, Yoga and Barre —
              opening at The Coach House, Henry Street.
            </p>
            <Button
              size="lg"
              onClick={openLeadForm}
              className="bg-[#A3C1AD] text-black hover:bg-[#8fb39c] shadow-xl"
            >
              Register Your Interest
            </Button>
          </div>
        </section>

        {/* LOCATION + WHAT TO EXPECT */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <div className="flex items-center gap-2 mb-4 text-[#A3C1AD]">
                  <MapPin className="w-5 h-5" />
                  <p className="text-sm font-semibold uppercase tracking-wider">The Location</p>
                </div>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                  The Coach House, Henry Street
                </h2>
                <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                  Set in the heart of Limerick city, our newest studio brings the signature
                  balance experience to a stunning, light-filled space.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Expect a full timetable of classes for all levels, led by highly trained
                  instructors in a calm, beautifully designed environment.
                </p>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={studioInstructor}
                  alt="balance studio instructor"
                  className="w-full h-[480px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CLASS TYPES */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
                What to expect
              </h2>
              <p className="text-lg text-foreground/80">
                A full timetable of movement, designed for every level.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {classTypes.map((c) => (
                <div
                  key={c.title}
                  className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all"
                >
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    {c.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
                A community in motion
              </h2>
              <p className="text-lg text-foreground/80">
                Real people, real moments — what life at balance looks like.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {[limerickReformer, instructorLaughing, clientsStretching, clientsMat].map((src, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                >
                  <img
                    src={src}
                    alt="balance community"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT BALANCE */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <img
                src={balanceLogo}
                alt="balance logo"
                className="h-16 w-auto mx-auto mb-6 opacity-90"
              />
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                About balance
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-10">
                Founded in 2015, balance has grown from a small home studio into a premium
                multi-studio brand — known for high standards, expert teaching, and a loyal
                community across Ireland.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-6">
                  <Calendar className="w-8 h-8 mx-auto mb-3 text-[#A3C1AD]" />
                  <p className="text-3xl font-heading font-bold text-foreground">10+</p>
                  <p className="text-sm text-foreground/70 uppercase tracking-wider mt-1">
                    Years of expertise
                  </p>
                </div>
                <div className="p-6">
                  <Users className="w-8 h-8 mx-auto mb-3 text-[#A3C1AD]" />
                  <p className="text-3xl font-heading font-bold text-foreground">5+</p>
                  <p className="text-sm text-foreground/70 uppercase tracking-wider mt-1">
                    Studio locations
                  </p>
                </div>
                <div className="p-6">
                  <Award className="w-8 h-8 mx-auto mb-3 text-[#A3C1AD]" />
                  <p className="text-3xl font-heading font-bold text-foreground">1000s</p>
                  <p className="text-sm text-foreground/70 uppercase tracking-wider mt-1">
                    Happy clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* REGISTER INTEREST CTA */}
        <section
          id="register-interest"
          className="py-20 md:py-28"
          style={{
            background:
              "linear-gradient(180deg, #b8d4c3 0%, #A3C1AD 40%, #8fb39c 100%)",
          }}
        >
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-black/70" />
                <p className="text-xs font-semibold uppercase tracking-widest text-black/70">
                  Be first in line
                </p>
                <Sparkles className="w-4 h-4 text-black/70" />
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-black mb-6">
                Register your interest
              </h2>
              <p className="text-lg text-black/80 mb-8 leading-relaxed">
                Sign up for early access to our opening timetable, first-look bookings, and
                limited launch offers exclusive to our Limerick founding members.
              </p>
              <Button
                size="lg"
                onClick={openLeadForm}
                className="bg-black text-white hover:bg-black/85 shadow-xl"
              >
                Sign Up For Early Access
              </Button>
              <p className="text-sm text-black/70 mt-6">
                The sign-up form will appear shortly — or click above to open it now.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <LimerickLeadPopup />
    </div>
  );
};

export default LimerickComingSoon;
