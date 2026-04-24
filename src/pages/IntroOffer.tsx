import { Link } from "react-router-dom";
import { Check, ShoppingCart, Clock, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { useTestimonials } from "@/hooks/use-cms-data";
import balanceLogo from "@/assets/balance-removebg-preview.png";
import heroImage from "@/assets/hero-studio-new.png";

const MOMENCE_URL =
  "https://momence.com/balance/membership/Intro-Offer---3-Reformer-Classes/574031";

const includes = [
  "3 reformer Pilates classes",
  "Use across any of our 5 studios",
  "Try any class level — beginner friendly",
  "Try different instructors & class styles",
  "First-time clients only",
];

const locations = ["Clane", "Kildare", "Blessington", "Enfield", "Bray"];

const expectations = [
  {
    icon: Clock,
    title: "Arrive 10 minutes early",
    text: "We'll show you around and get you set up on the reformer.",
  },
  {
    icon: Sparkles,
    title: "Wear comfy clothes",
    text: "Leggings or shorts, fitted top, and grippy socks (we sell them in studio).",
  },
  {
    icon: MapPin,
    title: "We guide you through it",
    text: "Our instructors talk you through every move — no experience needed.",
  },
];

const IntroOffer = () => {
  const { data: testimonials } = useTestimonials();
  const featured = (testimonials || []).slice(0, 3);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="3 Reformer Pilates Classes for €50 | balance studios"
        description="New to balance? Try 3 reformer Pilates classes for just €50. Available at our 5 studios across Kildare and Wicklow. First-time clients only."
        noindex
      />

      {/* Minimal header — logo only, no nav */}
      <header className="w-full py-4 border-b border-border">
        <div className="container mx-auto px-4 flex justify-center">
          <img src={balanceLogo} alt="balance reformer pilates" className="h-14 w-auto" />
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
                New Client Offer
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-normal text-white mb-6 leading-[0.95] tracking-tight">
              3 Reformer Classes for{" "}
              <span style={{ color: "#A3C1AD" }}>€50</span>
            </h1>

            <p className="text-white/90 text-lg md:text-2xl leading-relaxed mb-10 max-w-xl mx-auto italic font-light">
              For those who expect <span className="not-italic font-semibold">more</span>.
              Discover balance studios across Kildare & Wicklow.
            </p>

            <Button
              asChild
              size="lg"
              className="rounded-full px-8 py-7 font-heading font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 text-black"
              style={{
                background:
                  "linear-gradient(180deg, #b8d4c3 0%, #A3C1AD 40%, #8fb39c 100%)",
              }}
            >
              <a href={MOMENCE_URL} target="_blank" rel="noopener noreferrer">
                Claim Your Intro Offer
                <ShoppingCart className="w-4 h-4 ml-2" />
              </a>
            </Button>

            <p className="text-white/70 text-sm mt-6 font-light">
              First-time clients only
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-heading font-black text-center text-foreground mb-10 tracking-tight">
            What's included
          </h2>
          <ul className="space-y-4">
            {includes.map((item) => (
              <li
                key={item}
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground text-base md:text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Social proof */}
      {featured.length > 0 && (
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-heading font-black text-center text-foreground mb-10 tracking-tight">
              Loved by our community
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {featured.map((t) => (
                <div
                  key={t.id}
                  className="bg-background p-6 rounded-2xl border border-border shadow-sm"
                >
                  <div className="flex gap-1 mb-3 text-primary">
                    {Array.from({ length: t.rating || 5 }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-foreground/80 italic mb-4 leading-relaxed">
                    "{t.review_text}"
                  </p>
                  <p className="text-sm font-heading font-semibold text-foreground">
                    — {t.customer_name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Locations */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 font-light">
            Use it at any of our 5 studios
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {locations.map((loc) => (
              <span
                key={loc}
                className="text-foreground font-heading text-lg md:text-xl flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-primary" />
                {loc}
              </span>
            ))}
          </div>
        </div>
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
            Ready to feel the balance difference?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            3 classes. €50. No commitment after.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 py-7 font-heading font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 text-black"
            style={{
              background:
                "linear-gradient(180deg, #b8d4c3 0%, #A3C1AD 40%, #8fb39c 100%)",
            }}
          >
            <a href={MOMENCE_URL} target="_blank" rel="noopener noreferrer">
              Claim Your Intro Offer
              <ShoppingCart className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </section>

      {/* Tiny footer */}
      <footer className="py-8 border-t border-border mt-auto">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} balance studios</p>
          <Link to="/terms" className="hover:text-primary transition-colors">
            Terms & Conditions
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default IntroOffer;
