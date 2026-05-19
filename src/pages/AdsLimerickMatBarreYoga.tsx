import { Link } from "react-router-dom";
import { Check, ShoppingCart, Clock, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import balanceLogo from "@/assets/balance-removebg-preview.png";
import heroImage from "@/assets/balance-studio-interior-hero.jpg";
import matImg from "@/assets/stock/stock-mat-pilates.jpg";
import barreImg from "@/assets/stock/stock-barre.jpg";
import yogaImg from "@/assets/stock/stock-yoga.jpg";

const CHECKOUT_URL =
  "https://momence.com/balance/membership/Intro-Offer---3-Mat-%2F-Barre-%2F-Yoga-classes-for-%E2%82%AC40/771466";

const includes = [
  "3 classes — mix & match",
  "Choose mat pilates, barre or yoga",
  "30-day expiry from first class",
  "Suitable for all levels — beginner friendly",
];

const expectations = [
  {
    icon: Clock,
    title: "Arrive 10 minutes early",
    text: "We'll get you settled and set up for class.",
  },
  {
    icon: Sparkles,
    title: "Wear comfy clothes",
    text: "Leggings or shorts and a fitted top. Bare feet or grippy socks.",
  },
  {
    icon: MapPin,
    title: "We guide you through it",
    text: "Expert instructors talk you through every move — no experience needed.",
  },
];

const classTypes = [
  {
    name: "Mat Pilates",
    img: matImg,
    text: "Deep core, mobility, posture and alignment — all from the mat.",
  },
  {
    name: "Barre",
    img: barreImg,
    text: "Low impact, full body burn inspired by pilates and ballet. Upbeat and welcoming.",
  },
  {
    name: "Yoga",
    img: yogaImg,
    text: "Slow down, reset and reconnect. Flexibility, strength and calm.",
  },
];

const ctaButtonStyle = {
  background: "linear-gradient(180deg, #b8d4c3 0%, #A3C1AD 40%, #8fb39c 100%)",
};

const AdsLimerickMatBarreYoga = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col pb-20 md:pb-0">
      <SEO
        title="3 Mat / Barre / Yoga Classes for €40 | balance Limerick"
        description="Limerick intro offer — 3 mat, barre or yoga classes for €40. Mix & match across all three. It's all about balance."
        noindex
      />

      {/* Minimal logo-only header */}
      <header className="w-full py-3 md:py-4 border-b border-border">
        <div className="container mx-auto px-4 flex justify-center">
          <img
            src={balanceLogo}
            alt="balance studios"
            className="h-14 md:h-20 w-auto"
          />
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative flex items-center justify-center min-h-[85vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30" />
        <div className="container mx-auto px-6 py-16 md:py-24 relative z-10 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white/90 text-xs uppercase tracking-[0.2em] font-light">
                Limerick · Intro Offer
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-normal text-white mb-6 leading-[0.95] tracking-tight">
              3 Mat · Barre · Yoga Classes for{" "}
              <span style={{ color: "#ffffff" }}>€40</span>
            </h1>

            <p className="text-white/90 text-lg md:text-2xl leading-relaxed mb-8 max-w-2xl mx-auto italic font-light">
              Mix & match across mat pilates, barre and yoga — only at balance Limerick.
            </p>

            <Button
              asChild
              size="lg"
              className="rounded-full px-10 py-7 font-heading font-semibold text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 text-black"
              style={ctaButtonStyle}
            >
              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                Claim Offer — €40
                <ShoppingCart className="w-5 h-5 ml-2" />
              </a>
            </Button>

            <p className="text-white/80 text-sm mt-4">
              It's all about balance.
            </p>
          </div>
        </div>
      </section>

      {/* Offer card */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative bg-background p-8 md:p-12 rounded-2xl border-2 border-primary/40 shadow-lg">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-primary text-primary-foreground px-5 py-1.5 rounded-full text-xs uppercase tracking-[0.2em] font-semibold shadow-lg text-center">
                  Mat · Barre · Yoga
                </div>
              </div>

              <div className="text-center mb-8 mt-2">
                <h2 className="text-2xl md:text-3xl font-heading font-black text-foreground mb-3 tracking-tight">
                  3 Classes — Pick & Mix
                </h2>
                <div className="text-6xl md:text-7xl font-heading font-black text-foreground">
                  €40
                </div>
                <p className="text-muted-foreground text-sm mt-2">
                  Limerick intro offer
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className="w-full h-auto min-h-14 rounded-full py-4 px-4 font-heading font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-0 text-black [&>a]:w-full [&>a]:flex [&>a]:items-center [&>a]:justify-center [&>a]:gap-2 [&>a]:text-center"
                style={ctaButtonStyle}
              >
                <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                  <span>Claim 3 Classes for €40</span>
                  <ShoppingCart className="w-4 h-4 flex-shrink-0" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Three class types */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3 font-light">
              Three ways to move
            </p>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground tracking-tight">
              One studio. Three classes.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {classTypes.map((c) => (
              <div
                key={c.name}
                className="bg-background rounded-2xl overflow-hidden border border-border shadow-sm"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={c.img}
                    alt={`${c.name} class at balance Limerick`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-2">
                    {c.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {c.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* It's all about balance band */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4 font-light">
            Our philosophy
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground mb-6 tracking-tight italic">
            It's all about balance.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Strength and softness. Movement and stillness. balance Limerick is the only
            place where you can mix mat pilates, barre and yoga across one offer —
            built for those who expect more from their wellness routine.
          </p>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-16 md:py-20">
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
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-24 text-center bg-muted/20">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground mb-6 tracking-tight">
            Mat. Barre. Yoga. All at balance Limerick.
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            3 classes. €40. Pick & mix across all three.
          </p>

          <Button
            asChild
            size="lg"
            className="rounded-full px-10 py-7 font-heading font-semibold text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 text-black"
            style={ctaButtonStyle}
          >
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              Claim 3 Classes for €40
              <ShoppingCart className="w-5 h-5 ml-2" />
            </a>
          </Button>

          <p className="text-muted-foreground text-sm mt-6 italic">
            It's all about balance.
          </p>
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-md border-t border-border p-3 shadow-2xl">
        <Button
          asChild
          size="lg"
          className="w-full h-auto min-h-12 rounded-full py-3 px-4 font-heading font-semibold text-sm shadow-lg border-0 text-black [&>a]:w-full [&>a]:flex [&>a]:items-center [&>a]:justify-center [&>a]:gap-2"
          style={ctaButtonStyle}
        >
          <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
            <span>Claim 3 Classes — €40</span>
            <ShoppingCart className="w-4 h-4" />
          </a>
        </Button>
      </div>

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

export default AdsLimerickMatBarreYoga;
