import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Zap, Award, Activity } from "lucide-react";

const Classes = () => {
  const classLevels = [
    {
      icon: TrendingUp,
      level: "Foundation / Beginner",
      suitable: "Brand new to reformer Pilates",
      description: "Learn the fundamentals in a supportive, low-pressure environment. We'll guide you through basic movements, proper form, and machine setup. Perfect for building confidence before progressing.",
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
      description: "Build on your foundation with more dynamic sequences and flowing transitions. Increase challenge while maintaining proper form. Ideal for regular practitioners.",
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
      description: "Master challenging sequences with precision and control. These classes demand strength, flexibility, and mind-body connection. Push your limits safely.",
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
      description: "Unique formats like Reformer Slow Burn (low-impact, high-intensity) and Mat Pilates. Add variety to your routine and target specific goals.",
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
        <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
                Find Your Perfect Class
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Clear progression pathways mean you'll always know which class level suits you best. 
                Start where you are, progress at your pace, and feel confident every step of the way.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/locations">Book a Class Now</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Class Levels Detail */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-16">
              {classLevels.map((classLevel, index) => {
                const Icon = classLevel.icon;
                return (
                  <div
                    key={classLevel.level}
                    className="bg-background p-8 rounded-xl border-2 border-primary/40 hover:border-primary/60 hover:shadow-lg transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Level Header */}
                      <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                            <Icon className="w-7 h-7 text-primary" />
                          </div>
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-foreground mb-2">
                          {classLevel.level}
                        </h2>
                        <p className="text-sm text-primary font-semibold uppercase tracking-wide mb-4">
                          {classLevel.suitable}
                        </p>
                      </div>

                      {/* Content */}
                      <div className="lg:col-span-2 space-y-6">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {classLevel.description}
                        </p>

                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-3">
                            What to Expect:
                          </h3>
                          <ul className="space-y-2">
                            {classLevel.whatToExpect.map((item) => (
                              <li key={item} className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span className="text-muted-foreground">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Still Not Sure Which Level?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our instructors are happy to help you find the right starting point. 
                Get in touch or simply book a Foundation class to begin your journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="/book">Book Foundation Class</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10">
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
