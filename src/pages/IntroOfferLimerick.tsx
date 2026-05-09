import { Link } from "react-router-dom";
import { Check, ShoppingCart, Clock, MapPin, Sparkles, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import balanceLogo from "@/assets/balance-removebg-preview.png";
import heroImage from "@/assets/intro-offer-hero.jpeg";
import limerickStudio1 from "@/assets/limerick-studio-1.jpg";
import limerickStudio2 from "@/assets/limerick-studio-2.jpg";

const REFORMER_URL =
  "https://momence.com/balance/membership/Launch-offer---3-Reformer-classes-for-%E2%82%AC45/766017";
const MAT_URL =
  "https://momence.com/balance/membership/Launch-offer---3-Mat%2FBarre%2FYoga-classes-for-%E2%82%AC35/766025";

const reformerIncludes = [
  "3 reformer Pilates classes",
  "Beginner friendly — no experience needed",
  "Try different instructors & class times",
  "Expert-led, small group sessions",
];

const matIncludes = [
  "3 classes — mix & match",
  "Choose mat Pilates, barre or yoga",
  "Suitable for all levels",
  "A full-body wellness reset",
];

const expectations = [
  {
    icon: Clock,
    title: "Arrive 10 minutes early",
    text: "We'll show you around and get you set up for class.",
  },
  {
    icon: Sparkles,
    title: "Wear comfy clothes",
    text: "Leggings or shorts, fitted top, and grippy socks for reformer.",
  },
  {
    icon: MapPin,
    title: "We guide you through it",
    text: "Our instructors talk you through every move — no experience needed.",
  },
];

const IntroOfferLimerick = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Limerick Launch Offer | balance studios"
        description="balance studios Limerick is opening. One week only — 3 reformer classes for €45 or 3 mat/barre/yoga classes for €35."
        noindex
      />

      {/* Minimal header */}
      <header className="w-full py-6 md:py-8 border-b border-border">
        <div className="container mx-auto px-4 flex justify-center">
          <img src={balanceLogo} alt="balance reformer pilates" className="h-24 md:h-32 w-auto" />
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative flex items-center justify-center min-h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/35" />
        <div className="container mx-auto px-6 py-16 md:py-24 relative z-10 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white/90 text-xs uppercase tracking-[0.2em] font-light">
                Limerick Launch · One Week Only
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-normal text-white mb-6 leading-[0.95] tracking-tight">
              balance is coming to{" "}
              <span style={{ color: "#A3C1AD" }}>Limerick</span>
            </h1>

            <p className="text-white/90 text-lg md:text-2xl leading-relaxed mb-6 max-w-2xl mx-auto italic font-light">
              A new kind of wellness hub — reformer pilates, mat, barre & yoga, all under one roof.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white text-sm md:text-base">
              <Calendar className="w-4 h-4" />
              <span>Launch offer runs Monday to Monday — one week only</span>
            </div>
          </div>
        </div>
      </section>

      {/* The two offers */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground mb-4 tracking-tight">
              Choose your launch offer
            </h2>
            <p className="text-muted-foreground text-lg">
              Two ways to discover balance Limerick. Pick what suits you — or grab both.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Reformer offer */}
            <div className="relative bg-background p-8 md:p-10 rounded-2xl border-2 border-primary/40 hover:border-primary/70 hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-primary text-primary-foreground px-5 py-1.5 rounded-full text-xs uppercase tracking-[0.2em] font-semibold shadow-lg">
                  Reformer
                </div>
              </div>

              <div className="text-center mb-6 mt-2">
                <h3 className="text-2xl md:text-3xl font-heading font-black text-foreground mb-3 tracking-tight">
                  3 Reformer Classes
                </h3>
                <div className="text-5xl md:text-6xl font-heading font-black text-foreground">
                  €45
                </div>
                <p className="text-muted-foreground text-sm mt-2">Launch week only</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {reformerIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className="w-full rounded-full py-7 font-heading font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-0 text-black"
                style={{
                  background:
                    "linear-gradient(180deg, #b8d4c3 0%, #A3C1AD 40%, #8fb39c 100%)",
                }}
              >
                <a href={REFORMER_URL} target="_blank" rel="noopener noreferrer">
                  Claim Reformer Offer
                  <ShoppingCart className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>

            {/* Mat/Barre/Yoga offer */}
            <div className="relative bg-background p-8 md:p-10 rounded-2xl border-2 border-primary/40 hover:border-primary/70 hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-primary text-primary-foreground px-5 py-1.5 rounded-full text-xs uppercase tracking-[0.2em] font-semibold shadow-lg">
                  Mat · Barre · Yoga
                </div>
              </div>

              <div className="text-center mb-6 mt-2">
                <h3 className="text-2xl md:text-3xl font-heading font-black text-foreground mb-3 tracking-tight">
                  3 Mat / Barre / Yoga
                </h3>
                <div className="text-5xl md:text-6xl font-heading font-black text-foreground">
                  €35
                </div>
                <p className="text-muted-foreground text-sm mt-2">Launch week only</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {matIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className="w-full rounded-full py-7 font-heading font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-0 text-black"
                style={{
                  background:
                    "linear-gradient(180deg, #b8d4c3 0%, #A3C1AD 40%, #8fb39c 100%)",
                }}
              >
                <a href={MAT_URL} target="_blank" rel="noopener noreferrer">
                  Claim Mat / Barre / Yoga Offer
                  <ShoppingCart className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>

          <p className="text-center text-muted-foreground mt-10 text-sm md:text-base">
            ⏳ Offer runs for one week only — from Monday to Monday. Once it's gone, it's gone.
          </p>
        </div>
      </section>

      {/* Wellness hub */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4 font-light">
            More than a studio
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground mb-6 tracking-tight">
            Limerick's first true wellness hub
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
            One stunning space. Four ways to move. Reformer pilates, mat, barre and yoga —
            led by expert instructors in a studio designed to feel like a breath of fresh air.
            There's nothing else like it in Limerick. Come build strength, find calm, move better,
            and meet your people. This is where your balance begins.
          </p>

          <div className="my-10 rounded-3xl overflow-hidden shadow-xl">
            <img
              src={limerickStudio1}
              alt="Inside the balance Limerick reformer pilates studio"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-10">
            {["Reformer Pilates", "Mat Pilates", "Barre", "Yoga"].map((item) => (
              <div
                key={item}
                className="p-5 rounded-2xl border border-border bg-card font-heading font-semibold text-foreground"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio image band */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={limerickStudio2}
          alt="balance Limerick instructors guiding a reformer pilates client"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </section>

      {/* What to expect */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-heading font-black text-center text-foreground mb-12 tracking-tight">
            Your first class, made easy
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {expectations.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-background p-6 rounded-2xl border border-border text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-24 text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground mb-6 tracking-tight">
            One week. Two offers. Limerick's new home of wellness.
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            Pick your launch pack below and start strong with balance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 py-7 font-heading font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 text-black"
              style={{
                background:
                  "linear-gradient(180deg, #b8d4c3 0%, #A3C1AD 40%, #8fb39c 100%)",
              }}
            >
              <a href={REFORMER_URL} target="_blank" rel="noopener noreferrer">
                Reformer · €45
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 py-7 font-heading font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 text-black"
              style={{
                background:
                  "linear-gradient(180deg, #b8d4c3 0%, #A3C1AD 40%, #8fb39c 100%)",
              }}
            >
              <a href={MAT_URL} target="_blank" rel="noopener noreferrer">
                Mat / Barre / Yoga · €35
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Tiny footer */}
      <footer className="py-8 border-t border-border mt-auto">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} balance studios Limerick</p>
          <Link to="/terms" className="hover:text-primary transition-colors">
            Terms & Conditions
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default IntroOfferLimerick;
