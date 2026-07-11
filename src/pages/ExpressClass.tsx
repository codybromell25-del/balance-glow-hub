import { useState } from "react";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import heroImage from "@/assets/studio-kildare.jpg";

type Day = "wednesday" | "monday" | "friday";

interface ExpressSession {
  day: Day;
  dateLabel: string;
  time: string;
  location: string;
  url: string;
}

const sessions: ExpressSession[] = [
  // Wednesday 9:30 AM
  { day: "wednesday", dateLabel: "Wed, 22 July", time: "9:30 AM", location: "Bray", url: "https://momence.com/balance/Reformer-Express/139805246" },
  { day: "wednesday", dateLabel: "Wed, 29 July", time: "9:30 AM", location: "Bray", url: "https://momence.com/balance/Reformer-Express/139805248" },
  { day: "wednesday", dateLabel: "Wed, 5 August", time: "9:30 AM", location: "Bray", url: "https://momence.com/balance/Reformer-Express/139805250" },
  { day: "wednesday", dateLabel: "Wed, 12 August", time: "9:30 AM", location: "Bray", url: "https://momence.com/balance/Reformer-Express/139805247" },
  // Monday 1:00 PM
  { day: "monday", dateLabel: "Mon, 20 July", time: "1:00 PM", location: "Bray", url: "https://momence.com/balance/Reformer-Express/139805253" },
  { day: "monday", dateLabel: "Mon, 27 July", time: "1:00 PM", location: "Bray", url: "https://momence.com/balance/Reformer-Express/139805252" },
  { day: "monday", dateLabel: "Mon, 3 August", time: "1:00 PM", location: "Bray", url: "https://momence.com/balance/Reformer-Express/139805257" },
  { day: "monday", dateLabel: "Mon, 10 August", time: "1:00 PM", location: "Bray", url: "https://momence.com/balance/Reformer-Express/139805254" },
  { day: "monday", dateLabel: "Mon, 17 August", time: "1:00 PM", location: "Bray", url: "https://momence.com/balance/Reformer-Express/139805256" },
  { day: "monday", dateLabel: "Mon, 24 August", time: "1:00 PM", location: "Bray", url: "https://momence.com/balance/Reformer-Express/139805255" },
  // Friday 1:00 PM
  { day: "friday", dateLabel: "Fri, 24 July", time: "1:00 PM", location: "Bray", url: "https://momence.com/balance/Reformer-Express/139805281" },
  { day: "friday", dateLabel: "Fri, 31 July", time: "1:00 PM", location: "Bray", url: "https://momence.com/balance/Reformer-Express/139805279" },
  { day: "friday", dateLabel: "Fri, 7 August", time: "1:00 PM", location: "Bray", url: "https://momence.com/balance/Reformer-Express/139805280" },
  { day: "friday", dateLabel: "Fri, 14 August", time: "1:00 PM", location: "Bray", url: "https://momence.com/balance/Reformer-Express/139805283" },
  { day: "friday", dateLabel: "Fri, 21 August", time: "1:00 PM", location: "Bray", url: "https://momence.com/balance/Reformer-Express/139805282" },
];

const ExpressClass = () => {
  const [filter, setFilter] = useState<Day>("monday");
  const filtered = sessions.filter((s) => s.day === filter);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Express Class | balance studios"
        description="30-minute Reformer Express classes at balance studios Bray. Strength, flow and feel-good energy — perfect when you're short on time."
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
            Reformer Express packs strength, flow and feel-good energy into a focused 30-minute session. Suitable for mixed levels — a smart way to move when your day is full. Available in our Bray studio only.
          </p>
        </div>
      </section>

      {/* Sessions */}
      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/60 mb-4 font-heading">
              02 — Book Your Session
            </p>
            <h2 className="font-heading italic text-3xl md:text-4xl text-foreground mb-8">
              Choose your date.
            </h2>

            {/* Day filter */}
            <div className="inline-flex items-center border border-foreground/15 rounded-full p-1 bg-white">
              {([
                { value: "monday" as const, label: "Mondays · 1:00 PM" },
                { value: "wednesday" as const, label: "Wednesdays · 9:30 AM" },
              ]).map((opt) => {
                const active = filter === opt.value;
                return (
                  <button
                    key={opt.value}
                    onClick={() => setFilter(opt.value)}
                    className={`px-5 md:px-6 py-2.5 rounded-full text-xs md:text-sm font-heading uppercase tracking-[0.15em] transition-all ${
                      active
                        ? "bg-[#A3C1AD] text-black"
                        : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filtered.map((s) => (
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
