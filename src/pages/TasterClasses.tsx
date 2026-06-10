import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

type TasterType = "reformer" | "barre";

const reformerLinks = [
  { label: "Sat, Jun 6, 2026 · 11:00 AM", url: "https://momence.com/balance/Reformer---Taster-Class/137625346" },
  { label: "Mon, Jun 8, 2026 · 12:30 PM", url: "https://momence.com/balance/Reformer---Taster-Class/136247830" },
  { label: "Wed, Jun 10, 2026 · 8:00 PM", url: "https://momence.com/balance/Reformer---Taster-Class/136252815" },
  { label: "Sat, Jun 13, 2026 · 10:00 AM", url: "https://momence.com/balance/Reformer---Taster-Class/136865098" },
  { label: "Mon, Jun 15, 2026 · 7:00 PM", url: "https://momence.com/balance/Reformer---Taster-Class/136247092" },
  { label: "Thu, Jun 18, 2026 · 10:30 AM", url: "https://momence.com/balance/Reformer---Taster-Class/136249113" },
  { label: "Fri, Jun 19, 2026 · 9:30 AM", url: "https://momence.com/balance/Reformer---Taster-Class/136252895" },
  { label: "Tue, Jun 23, 2026 · 12:30 PM", url: "https://momence.com/balance/Reformer---Taster-Class/136248220" },
  { label: "Sun, Jun 28, 2026 · 9:00 AM", url: "https://momence.com/balance/Reformer---Taster-Class/136253025" },
];

const barreLinks = [
  { label: "Sat, Jun 13, 2026 · 9:00 AM", url: "https://momence.com/balance/Barre---Taster-Class/138071150" },
  { label: "Tue, Jun 16, 2026 · 10:30 AM", url: "https://momence.com/balance/Barre---Taster-Class/138072404" },
  { label: "Sat, Jun 20, 2026 · 9:00 AM", url: "https://momence.com/balance/Barre---Taster-Class/138072033" },
  { label: "Tue, Jun 23, 2026 · 10:30 AM", url: "https://momence.com/balance/Barre---Taster-Class/138072430" },
  { label: "Fri, Jun 26, 2026 · 7:00 PM", url: "https://momence.com/balance/Barre---Taster-Class/138072579" },
  { label: "Sat, Jun 27, 2026 · 9:00 AM", url: "https://momence.com/balance/Barre---Taster-Class/138072047" },
  { label: "Tue, Jun 30, 2026 · 10:30 AM", url: "https://momence.com/balance/Barre---Taster-Class/138072547" },
];

const TasterClasses = () => {
  const [type, setType] = useState<TasterType>("reformer");
  const links = type === "reformer" ? reformerLinks : barreLinks;

  return (
    <div className="min-h-screen">
      <SEO
        title="Taster Classes | balance studios"
        description="New to Reformer Pilates or Barre? Our Taster Classes gently guide first-time and nervous clients through their first class in a calm, supportive environment."
        canonical="/taster-classes"
      />
      <Navigation />
      <main className="pt-28">
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-heading italic text-foreground mb-6">
                Taster Classes
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Designed especially for nervous or first-time clients, our Taster Classes gently
                guide you through your first {type === "reformer" ? "Reformer" : "Barre"} experience
                in a calm and supportive environment. You'll learn how the class works, what to
                expect, and build confidence at your own pace, with plenty of opportunity to ask
                questions along the way.
              </p>
            </div>

            {/* Sliding toggle */}
            <div className="max-w-md mx-auto mt-10">
              <div className="relative grid grid-cols-2 p-1 rounded-full bg-secondary/50 border border-border/50">
                <span
                  aria-hidden
                  className="absolute top-1 bottom-1 left-1 w-[calc(50%-0.25rem)] rounded-full shadow-md transition-transform duration-300 ease-out"
                  style={{
                    background: 'linear-gradient(180deg, #b8d4c3 0%, #A3C1AD 40%, #8fb39c 100%)',
                    transform: type === "barre" ? "translateX(100%)" : "translateX(0%)",
                  }}
                />
                <button
                  type="button"
                  onClick={() => setType("reformer")}
                  className={`relative z-10 py-2.5 text-sm md:text-base font-semibold rounded-full transition-colors ${
                    type === "reformer" ? "text-black" : "text-foreground/70"
                  }`}
                >
                  Reformer
                </button>
                <button
                  type="button"
                  onClick={() => setType("barre")}
                  className={`relative z-10 py-2.5 text-sm md:text-base font-semibold rounded-full transition-colors ${
                    type === "barre" ? "text-black" : "text-foreground/70"
                  }`}
                >
                  Barre
                </button>
              </div>
            </div>

            <div className="max-w-2xl mx-auto mt-8 grid gap-4">
              {links.map((link) => (
                <Button
                  key={link.url}
                  asChild
                  size="lg"
                  className="w-full text-base py-6 text-black border-0 shadow-lg hover:brightness-105"
                  style={{ background: 'linear-gradient(180deg, #b8d4c3 0%, #A3C1AD 40%, #8fb39c 100%)' }}
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <Calendar className="w-5 h-5 mr-2" />
                    {link.label}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TasterClasses;
