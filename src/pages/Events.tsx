import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, Clock, ExternalLink } from "lucide-react";
import eventHero from "@/assets/balance-seawater-event.png";

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Events | balance studios"
        description="Join balance studios for special wellness events. Mat Pilates, Sauna & Coffee Morning in Bray with Seawater Saunas & Catalyst."
        canonical="/events"
      />
      <Navigation />

      <main className="pt-32 md:pt-40">
        <section className="container mx-auto px-4 pb-20">
          <div className="max-w-3xl mx-auto">
            {/* Title & Meta */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-foreground leading-tight mb-6 text-center">
              Mat Pilates, Sauna & Coffee Morning<span className="text-primary">.</span>
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground mb-10">
              <span className="flex items-center gap-2">
                <CalendarDays size={18} className="text-primary" />
                Saturday March 21st
              </span>
              <span className="flex items-center gap-2">
                <Clock size={18} className="text-primary" />
                9:00 AM
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={18} className="text-primary" />
                Bray
              </span>
            </div>

            {/* Hero Image */}
            <img
              src={eventHero}
              alt="Balance Studios x Seawater Saunas & Catalyst event – Mat Pilates, Sauna & Coffee Morning in Bray"
              className="w-full rounded-2xl shadow-xl mb-12"
            />

            {/* Body Copy */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12 text-center">
              Start with Mat Pilates at Seawater Saunas, then relax with use of the rooftop saunas, hot tubs, plunge pools and ice baths, before heading to Catalyst for coffee, a treat and a chat. A gorgeous morning to reset by the sea.
            </p>

            {/* CTA */}
            <div className="text-center">
              <a
                href="https://momence.com/balance/balance-by-the-sea-%F0%9F%A4%8D%F0%9F%8C%8A-/132959814?skipPreview=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="text-base px-10 py-6 gap-2 bg-[#A3C1AD] hover:bg-[#8FB09A] text-white">
                  Book Your Spot
                  <ExternalLink size={16} />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
