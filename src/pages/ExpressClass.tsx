import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import heroImage from "@/assets/studio-kildare.jpg";

interface ExpressSession {
  date: string;
  dateLabel: string;
  time: string;
  location: string;
  url: string;
}

const sessions: ExpressSession[] = [
  { date: "2026-07-22", dateLabel: "Wed, 22 July", time: "9:30 AM", location: "Bray", url: "https://momence.com/balance/Reformer-Express/139805246" },
  { date: "2026-07-29", dateLabel: "Wed, 29 July", time: "9:30 AM", location: "Bray", url: "https://momence.com/balance/Reformer-Express/139805248" },
  { date: "2026-08-05", dateLabel: "Wed, 5 August", time: "9:30 AM", location: "Bray", url: "https://momence.com/balance/Reformer-Express/139805250" },
  { date: "2026-08-12", dateLabel: "Wed, 12 August", time: "9:30 AM", location: "Bray", url: "https://momence.com/balance/Reformer-Express/139805247" },
];

const ExpressClass = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Express Class | balance studios"
        description="30-minute Reformer Express classes at balance studios. Strength, flow and feel-good energy — perfect when you're short on time."
        canonical="/express-class"
      />
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-end pt-32 pb-16 md:pb-24">
        <div className="absolute inset-0">
          <img src={heroImage} alt="balance studio" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/80 mb-6 font-heading drop-shadow">
            30 Minutes · Reformer
          </p>
          <h1
            className="font-heading italic text-5xl md:text-7xl lg:text-8xl text-white mb-6 drop-shadow-lg"
            style={{ color: "#C8E0CC" }}
          >
            Express Class
          </h1>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto font-body drop-shadow">
            Strength, flow and feel-good energy packed into a shorter class — perfect when you're short on time but still want an effective workout.
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
            Short on time. Big on results.
          </h2>
          <p className="text-foreground/75 leading-relaxed text-base md:text-lg font-body">
            Reformer Express packs strength, flow and feel-good energy into a focused 30-minute session. Suitable for mixed levels — a smart way to move when your day is full.
          </p>
        </div>
      </section>

      {/* Sessions */}
      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/60 mb-4 font-heading">
              02 — Book Your Session
            </p>
            <h2 className="font-heading italic text-3xl md:text-4xl text-foreground">
              Choose your date.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {sessions.map((s) => (
              <a
                key={s.url}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white border border-foreground/10 p-8 hover:border-[#A3C1AD] transition-all duration-300 hover:shadow-lg"
              >
                <h3 className="font-heading italic text-3xl md:text-4xl text-foreground mb-6">
                  {s.dateLabel}
                </h3>
                <div className="space-y-3 mb-8 font-body text-foreground/70">
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{s.time} · 30 min</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>balance {s.location}</span>
                  </div>
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

export default ExpressClass;
