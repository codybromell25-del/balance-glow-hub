import { ArrowRight, Calendar, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import heroImage from "@/assets/studio-kildare.jpg";

const studios = [
  { name: "Limerick", time: "12:00 PM", url: "https://momence.com/l/0OhMV3lo" },
  { name: "Blessington", time: "1:00 PM", url: "https://momence.com/l/R5hwEqkW" },
  { name: "Enfield", time: "1:00 PM", url: "https://momence.com/l/OehBK0WO" },
  { name: "Bray", time: "1:00 PM", url: "https://momence.com/l/GBhB9OA9" },
  { name: "Clane", time: "2:00 PM", url: "https://momence.com/l/4ZhQJjJ4" },
  { name: "Kildare Town", time: "2:00 PM", url: "https://momence.com/l/DAh6lgMA" },
];

const ReformerBarrePopup = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Reformer x Barre Pop-Up | balance studios"
        description="A one-day pop-up across all 6 balance studios. Friday 25th July — Reformer x Barre, a fusion class for every body."
        canonical="/reformer-barre-popup"
      />
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end pt-32 pb-16 md:pb-24">
        <div className="absolute inset-0">
          <img src={heroImage} alt="balance studio" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/80 mb-6 font-heading drop-shadow">
            Pop-Up Event · Friday 25th July
          </p>
          <h1
            className="font-heading italic text-5xl md:text-7xl lg:text-8xl text-white mb-6 drop-shadow-lg"
            style={{ color: "#C8E0CC" }}
          >
            Reformer x Barre
          </h1>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto font-body drop-shadow">
            A fusion class blending the strength of Reformer with the grace of Barre — taking place across all 6 balance studios on the same day.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/60 mb-6 font-heading">
            01 — The Class
          </p>
          <h2 className="font-heading italic text-3xl md:text-5xl mb-8 text-foreground">
            One day. Six studios. One unforgettable class.
          </h2>
          <p className="text-foreground/75 leading-relaxed text-base md:text-lg font-body">
            Join us across all balance locations for a one-of-a-kind Reformer x Barre pop-up. Designed to challenge, energise and inspire — this fusion class brings together the precision of Reformer Pilates and the elegance of Barre into a single 45-minute experience. Open to all levels.
          </p>
        </div>
      </section>

      {/* Studio Grid */}
      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/60 mb-4 font-heading">
              02 — Book Your Studio
            </p>
            <h2 className="font-heading italic text-3xl md:text-4xl text-foreground">
              Choose your location.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {studios.map((studio) => (
              <a
                key={studio.name}
                href={studio.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white border border-foreground/10 p-8 hover:border-[#A3C1AD] transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center gap-2 text-foreground/60 mb-4">
                  <MapPin size={14} />
                  <span className="text-xs uppercase tracking-[0.2em] font-heading">
                    balance {studio.name}
                  </span>
                </div>
                <h3 className="font-heading italic text-3xl md:text-4xl text-foreground mb-6">
                  {studio.name}
                </h3>
                <div className="flex items-center gap-2 text-foreground/70 mb-8 font-body">
                  <Calendar size={16} />
                  <span>Fri, 25 July · {studio.time}</span>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-foreground/10">
                  <span className="text-sm font-heading uppercase tracking-[0.15em] text-foreground group-hover:text-[#A3C1AD] transition-colors">
                    Book Now
                  </span>
                  <ArrowRight
                    size={18}
                    className="text-foreground group-hover:text-[#A3C1AD] group-hover:translate-x-1 transition-all"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-20 md:py-28 border-t border-foreground/10">
        <div className="container mx-auto px-6 text-center">
          <p className="font-heading italic text-3xl md:text-5xl text-foreground">
            It's all about balance.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReformerBarrePopup;
