import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, Clock, ExternalLink, Sparkles } from "lucide-react";
import balanceLogo from "@/assets/balance-removebg-preview.png";

const LittleMoreBalance = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="A Little More balance | balance studios"
        description="A relaxed afternoon of movement, conversation and practical ideas for everyday life at balance Limerick."
        canonical="/a-little-more-balance"
      />
      <Navigation />

      <main className="pt-32 md:pt-40">
        <section className="container mx-auto px-4 pb-20">
          <div className="max-w-3xl mx-auto">
            {/* Title & Meta */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium uppercase tracking-wider text-foreground">Special Event</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-foreground leading-tight">
                A Little More balance<span className="text-primary">.</span>
              </h1>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground mb-10">
              <span className="flex items-center gap-2">
                <CalendarDays size={18} className="text-primary" />
                Sunday 27 September
              </span>
              <span className="flex items-center gap-2">
                <Clock size={18} className="text-primary" />
                1.00–2.30pm
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={18} className="text-primary" />
                balance Limerick
              </span>
            </div>

            {/* Body Copy */}
            <div className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12 space-y-6 text-center">
              <p>
                A relaxed afternoon of movement, conversation and practical ideas for everyday life.
              </p>
              <p>
                Join us for a 20-minute Reformer class with balance owner Kelly O’Neill, followed by a 20-minute Mat Pilates class and a relaxed talk and Q&A with neuroscientist turned coach Elva O’Conaire.
              </p>
              <p>
                Elva will share practical ways to build better habits, with realistic ideas for everyday life.
              </p>
              <p>
                There’ll also be refreshments, light bites, goodie bags and spot prizes.
              </p>
            </div>

            {/* Ticket Includes */}
            <div className="bg-white rounded-2xl shadow-lg border border-border/50 p-8 md:p-10 mb-12 max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading italic text-foreground mb-6 text-center">
                Your ticket includes
              </h2>
              <ul className="space-y-4 text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
                  <span>20-minute Reformer Pilates class</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
                  <span>20-minute Mat Pilates class</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
                  <span>Talk and Q&A with Elva O’Conaire</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
                  <span>Refreshments and light bites</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
                  <span>Goodie bag</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
                  <span>Spot prizes</span>
                </li>
              </ul>

              <div className="mt-8 pt-8 border-t border-border/30 text-center">
                <p className="text-2xl font-heading italic text-foreground mb-2">
                  €XX per person
                </p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  Limited spaces available. Advance booking required.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mb-12">
              <a
                href="/booking/limerick"
              >
                <Button size="lg" className="text-base px-10 py-6 gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                  Book Your Spot
                  <ExternalLink size={16} />
                </Button>
              </a>
            </div>

            <div className="flex items-center justify-center">
              <img src={balanceLogo} alt="balance studios" className="h-16 w-auto opacity-70" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LittleMoreBalance;
