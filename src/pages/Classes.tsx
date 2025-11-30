import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ClassesBrandStatement from "@/components/home/ClassesBrandStatement";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Zap, Award, Activity } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Classes = () => {
  const classLevels = [
    {
      icon: TrendingUp,
      level: "Gentle Flow",
      suitable: "Pregnancy, postnatal, injury recovery, or those seeking a slower pace",
      whatToExpect: [
        "Soft, supportive movements focusing on mobility and breath",
        "Low-impact sequences that build strength gently",
        "Suitable for all trimesters of pregnancy",
        "Perfect for older adults needing extra care and attention",
        "No prior Pilates experience required",
      ],
    },
    {
      icon: Activity,
      level: "Classic",
      suitable: "Perfect for beginners and foundation building",
      whatToExpect: [
        "Learn core Pilates principles with a full-body workout",
        "Thoughtful, powerful, and effective—not easy, just smart",
        "Great for new Reformer users or loyal regulars",
        "Instructors can modify to increase challenge if needed",
        "Inform instructor of any injuries or health concerns",
      ],
    },
    {
      icon: Zap,
      level: "Sculpt",
      suitable: "Build on your progress or maintain your gains",
      whatToExpect: [
        "A gentle step up from basics, accessible for all levels",
        "Thoughtful challenges with extra core work",
        "Sequences that make your muscles sing in the best way",
        "Strong, supportive, and full of feel-good fire",
        "Inform instructor of any injuries or concerns",
      ],
    },
    {
      icon: Award,
      level: "Challenge",
      suitable: "For confident clients ready to push further",
      whatToExpect: [
        "Creative combos with quicker transitions",
        "Tests strength, precision, and stamina with extra spice",
        "Tough but thoughtful—never chaotic, always curated",
        "Instructors keep things moving with personalized attention",
        "Previous Reformer experience necessary",
      ],
    },
    {
      icon: Zap,
      level: "Strength",
      suitable: "For those with Reformer experience seeking intensity",
      whatToExpect: [
        "Less stretching, more power moves with faster pace",
        "Weights, resistance bands, and props for extra challenge",
        "Dynamic and energizing—designed to make you feel strong",
        "All the burn, all the buzz, minus the scary stuff",
        "Choose beginner class if agility/balance are significantly affected",
      ],
    },
    {
      icon: Activity,
      level: "Circuit: Fast Burn",
      suitable: "Fast-paced circuits with Pilates precision",
      whatToExpect: [
        "Perfect balance of strength, cardio & Reformer Pilates",
        "Back-to-back combos with energizing music on and off Reformer",
        "Heart-thumping, muscle-burning, seriously fun",
        "Balance focus on form and control maintained throughout",
        "Available at Studio 2, Kildare Town only",
      ],
    },
    {
      icon: TrendingUp,
      level: "Circuit: Slow Burn",
      suitable: "High-rep, controlled circuits for serious sculpting",
      whatToExpect: [
        "Fewer moves, more reps—all about that delicious shake",
        "Slow, steady circuits that fire up every muscle group",
        "Full-body burner without jumping or chaos",
        "Dials up intensity through controlled, purposeful movement",
        "Pure fire, delivered the Balance way: strong, smart, satisfying",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <ClassesBrandStatement />
        
        {/* Class Levels Detail */}
        <section className="pt-8 pb-12 md:pt-12 md:pb-24">
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
                          className="w-full sm:w-auto relative bg-gradient-to-r from-[#d8a4a8] via-[#e8b4b8] to-[#d8a4a8] text-foreground border-0 shadow-lg hover:brightness-105"
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
