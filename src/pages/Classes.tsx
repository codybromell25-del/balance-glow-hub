import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Zap, Award, Activity } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Classes = () => {
  const classLevels = [
    {
      icon: TrendingUp,
      level: "Foundation / Beginner",
      suitable: "Brand new to reformer Pilates",
      whatToExpect: [
        "Slower pace with detailed instruction",
        "Focus on alignment and breathing",
        "Introduction to reformer equipment",
        "Modifications for all bodies",
      ],
    },
    {
      icon: Zap,
      level: "Level 1 & 2",
      suitable: "Comfortable with basics, ready to progress",
      whatToExpect: [
        "Faster-paced sequences",
        "More complex movement patterns",
        "Introduction to props (weights, bands)",
        "Progressive challenge options",
      ],
    },
    {
      icon: Award,
      level: "Advanced",
      suitable: "Experienced practitioners seeking intensity",
      whatToExpect: [
        "Complex choreography",
        "High intensity and endurance",
        "Advanced variations",
        "Minimal rest periods",
      ],
    },
    {
      icon: Activity,
      level: "Specialty Classes",
      suitable: "Varies by class type",
      whatToExpect: [
        "Reformer Slow Burn: controlled holds",
        "Mat Pilates: core-focused floor work",
        "Combination classes available",
        "Themed workshops periodically",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <section className="pt-8 pb-12 md:pt-12 md:pb-24 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
                Find Your Vibe
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                From "wait, what's a reformer?" to full-on reformer royalty. Pick your level, own your journey, and get ready to feel amazing.
              </p>
              <Button asChild size="lg">
                <a href="/book-class">Book a Class Now</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Class Levels Detail */}
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-8 md:space-y-16">
              {classLevels.map((classLevel) => {
                const Icon = classLevel.icon;
                const ClassLevelCard = () => {
                  const { ref, isVisible } = useScrollAnimation(0.2);
                  
                  return (
                    <div
                      ref={ref}
                      className={`bg-background p-4 md:p-8 rounded-xl border-2 border-primary/40 hover:border-primary/60 hover:shadow-lg transition-all duration-500 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                      }`}
                    >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
                      {/* Level Header */}
                      <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                            <Icon className="w-7 h-7 text-primary" />
                          </div>
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-foreground mb-2">{classLevel.level}</h2>
                        <p className="text-sm text-primary font-semibold uppercase tracking-wide mb-4">
                          {classLevel.suitable}
                        </p>
                      </div>

                      {/* Content */}
                      <div className="lg:col-span-2 space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-3">What to Expect:</h3>
                          <ul className="space-y-2">
                            {classLevel.whatToExpect.map((item) => (
                              <li key={item} className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span className="text-muted-foreground">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Button
                          asChild
                          className="w-full sm:w-auto"
                        >
                          <Link to="/locations">Book Class</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                  );
                };
                
                return <ClassLevelCard key={classLevel.level} />;
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Still Not Sure Which Level?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our instructors are happy to help you find the right starting point. Get in touch or simply book a
                Foundation class to begin your journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/book">Book Foundation Class</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                >
                  <Link to="/contact">Ask Us Anything</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Classes;
