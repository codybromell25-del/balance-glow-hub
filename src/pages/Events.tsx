import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, Clock, ExternalLink } from "lucide-react";
import eventHero from "@/assets/balance-seawater-event.png";
import balanceLogo from "@/assets/balance-removebg-preview.png";

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
            <div className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12 space-y-6 text-center">
              <p>
                Join us for a beautiful morning by the sea designed to help you slow down, move your body, and completely reset.
              </p>
              <p>
                We begin with a Mat Pilates class at the stunning Seawater Saunas, where you will move through a full-body session designed to gently energise and strengthen.
              </p>
              <p>
                After class, enjoy access to Seawater Saunas' incredible rooftop wellness facilities overlooking the Irish Sea. Relax and unwind with hot tubs, plunge pools, ice baths and saunas, experiencing the powerful benefits of contrast therapy in a truly immersive coastal setting.
              </p>
              <p>
                Once you are fully relaxed and refreshed, we will take a short stroll across the road to Catalyst Coffee for a well deserved coffee and treat, and a chance to chat and connect with the group.
              </p>
              <p>
                Expect movement, sea air, warmth, great coffee, and great company.
              </p>
              <p>
                A perfect way to step away from the busy pace of life and give your mind and body the reset it deserves.
              </p>

              <div className="flex items-center justify-center gap-3 pt-4">
                <Waves size={24} className="text-primary" />
                <Heart size={24} className="text-white" fill="white" />
              </div>
            </div>

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
