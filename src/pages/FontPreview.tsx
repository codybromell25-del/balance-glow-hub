import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/studio-blessington.jpg";

const FontPreview = () => {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Raleway', sans-serif" }}>
      {/* Floating preview badge */}
      <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-black/80 text-white text-xs px-4 py-2 rounded-full backdrop-blur-sm uppercase tracking-widest">
        Font Preview — Raleway Body + Libre Baskerville Italic
      </div>

      <Navigation />
      <main>
        {/* Hero Section — Libre Baskerville Italic headings */}
        <section
          className="min-h-[85vh] flex items-end bg-cover bg-center relative pt-32 md:pt-36"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          <div className="container mx-auto px-6 md:px-4 pb-12 md:pb-28 relative z-10">
            <div className="max-w-3xl animate-fade-in">
              <h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white mb-2 md:mb-4 leading-[0.9] tracking-tight"
                style={{ fontFamily: "'Libre Baskerville', serif", fontStyle: "italic" }}
              >
                balance<span className="text-primary">.</span>
              </h1>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <span className="w-8 md:w-12 h-[1px] bg-gradient-to-r from-white to-white/40"></span>
                <span className="text-white/80 text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] font-light">
                  Reformer Pilates
                </span>
              </div>
              <p
                className="text-white/90 text-lg md:text-2xl leading-relaxed mb-6 md:mb-8 max-w-xl italic font-light tracking-wide"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                Our Intro Offer: 3 Classes for €50
              </p>
              <p
                className="text-white/90 text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 md:mb-10 max-w-xl tracking-wide"
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontStyle: "italic",
                  textShadow: "0 2px 20px rgba(0,0,0,0.55)",
                }}
              >
                It's all about balance.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5">
                <a
                  href="https://momence.com/balance/membership/Intro-Offer---3-Reformer-Classes/574031"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-6 py-5 sm:px-8 sm:py-7 text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 text-black font-semibold"
                  style={{ background: "linear-gradient(180deg, #b8d4c3 0%, #A3C1AD 40%, #8fb39c 100%)" }}
                >
                  Buy now
                </a>
                <a
                  href="/pricing"
                  className="inline-flex items-center justify-center text-white hover:text-white hover:bg-white/10 rounded-full px-6 py-5 sm:px-8 sm:py-7 text-sm sm:text-base border border-white/30 hover:border-white/50 transition-all duration-300"
                >
                  View More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-8 md:py-10 bg-background">
          <div className="container mx-auto px-6">
            <div className="border-t border-b border-foreground/8 py-6 md:py-8">
              <div className="grid grid-cols-[0.9fr_1.2fr_0.9fr] gap-0 max-w-2xl mx-auto">
                {[
                  { value: "6", label: "Studios" },
                  { value: "10,000", suffix: "+", label: "Classes Taught" },
                  { value: "4.9", suffix: "★", label: "Google Rating" },
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`flex flex-col items-center text-center px-2 md:px-10 ${
                      index !== 2 ? "border-r border-foreground/8" : ""
                    }`}
                  >
                    <div className="flex items-baseline">
                      <span
                        className="text-2xl md:text-3xl text-foreground tracking-tight leading-none"
                        style={{ fontFamily: "'Libre Baskerville', serif", fontStyle: "italic" }}
                      >
                        {stat.value}
                      </span>
                      {stat.suffix && (
                        <span
                          className={`text-xs md:text-sm text-foreground/30 leading-none ${
                            stat.suffix === "+" ? "ml-3 md:ml-2 -translate-y-0.5" : "ml-1"
                          }`}
                        >
                          {stat.suffix}
                        </span>
                      )}
                    </div>
                    <span className="mt-1.5 text-[10px] md:text-[11px] uppercase tracking-[0.15em] text-foreground/40">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Body Text Sample */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2
                className="text-5xl sm:text-6xl md:text-7xl text-foreground tracking-tight leading-[0.9] mb-8"
                style={{ fontFamily: "'Libre Baskerville', serif", fontStyle: "italic" }}
              >
                Class Types<span className="text-primary">.</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mt-6">
                Expert-led Pilates, in beautifully designed studios, with workouts that actually work.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mt-4">
                Every balance instructor is fully qualified through comprehensive training, not weekend courses. Only the best make it into our timetable.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonial Card Sample */}
        <section className="py-10 md:py-14 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10 animate-fade-in">
              <h2
                className="text-4xl md:text-5xl text-foreground mb-6 tracking-tight"
                style={{ fontFamily: "'Libre Baskerville', serif", fontStyle: "italic" }}
              >
                Why People Keep Coming Back
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Honest words from the people living their best balance life.
              </p>
            </div>

            <div className="max-w-xl mx-auto">
              <div className="bg-background p-8 rounded-lg border-2 border-primary/40">
                <p
                  className="text-foreground leading-relaxed mb-6 italic"
                  style={{ fontFamily: "'Raleway', sans-serif" }}
                >
                  "I have been attending balance for reformer pilates for over 2 years now. The girls are so helpful and knowledgeable about which exercise is best for you. Beautiful studio and the staff are just amazing."
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p
                      className="text-foreground font-medium"
                      style={{ fontFamily: "'Libre Baskerville', serif", fontStyle: "italic" }}
                    >
                      Vanessa McIntyre
                    </p>
                    <p className="text-sm text-muted-foreground">Google Review</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500 text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FontPreview;
