import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ClassesBrandStatement from "@/components/home/ClassesBrandStatement";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Heart, BookOpen, Flame, Trophy, Users } from "lucide-react";

// Difficulty indicator component
const DifficultyDots = ({ level }: { level: number }) => {
  return (
    <div className="flex gap-1 items-center">
      {[1, 2, 3, 4, 5].map((dot) => (
        <span
          key={dot}
          className={`w-2 h-2 rounded-full ${
            dot <= level ? "bg-primary" : "bg-muted"
          }`}
        />
      ))}
      <span className="text-xs text-muted-foreground ml-2">
        {level === 1 && "Gentle"}
        {level === 2 && "Beginner/Mixed"}
        {level === 3 && "Mixed Levels"}
        {level === 4 && "Advanced"}
        {level === 5 && "Intense"}
      </span>
    </div>
  );
};

// Class card component
const ClassCard = ({ 
  icon: Icon, 
  level, 
  suitable, 
  whatToExpect, 
  difficulty,
}: { 
  icon: React.ElementType;
  level: string;
  suitable: string;
  whatToExpect: string[];
  difficulty: number;
}) => {
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
            <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(180deg, #b8d4c3 0%, #A3C1AD 40%, #8fb39c 100%)' }}>
              <Icon className="w-7 h-7 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-heading font-bold text-foreground mb-2">{level}</h2>
          <p className="text-sm text-foreground font-semibold uppercase tracking-wide mb-3">
            {suitable}
          </p>
          <DifficultyDots level={difficulty} />
        </div>

        {/* Content */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">What to Expect:</h3>
            <ul className="space-y-2">
              {whatToExpect.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1" style={{ color: '#A3C1AD' }}>•</span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button
            asChild
            className="w-full sm:w-auto relative text-black border-0 shadow-lg hover:brightness-105"
            style={{ background: 'linear-gradient(180deg, #b8d4c3 0%, #A3C1AD 40%, #8fb39c 100%)' }}
          >
            <a href="/our-studios">Book Class</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

const Classes = () => {
  const allClasses = [
    {
      icon: BookOpen,
      level: "Classic",
      suitable: "Perfect for beginners and foundation building",
      difficulty: 2,
      whatToExpect: [
        "Learn core Pilates principles with a full-body workout",
        "Thoughtful, powerful, and effective—not easy, just smart",
        "Great for new Reformer users or loyal regulars",
        "Instructors can modify to increase challenge if needed",
        "Inform instructor of any injuries or health concerns",
      ],
    },
    {
      icon: Flame,
      level: "Sculpt",
      suitable: "Build on your progress or maintain your gains",
      difficulty: 3,
      whatToExpect: [
        "A gentle step up from basics, accessible for all levels",
        "Thoughtful challenges with extra core work",
        "Sequences that make your muscles sing in the best way",
        "Strong, supportive, and full of feel-good fire",
        "Inform instructor of any injuries or concerns",
      ],
    },
    {
      icon: Trophy,
      level: "Challenge",
      suitable: "For confident clients ready to push further",
      difficulty: 4,
      whatToExpect: [
        "Creative combos with quicker transitions",
        "Tests strength, precision, and stamina with extra spice",
        "Tough but thoughtful—never chaotic, always curated",
        "Instructors keep things moving with personalized attention",
        "Previous Reformer experience necessary",
      ],
    },
    {
      icon: Heart,
      level: "Gentle Flow",
      suitable: "Pregnancy, postnatal, injury recovery, or those seeking a slower pace",
      difficulty: 1,
      whatToExpect: [
        "Soft, supportive movements focusing on mobility and breath",
        "Low-impact sequences that build strength gently",
        "Suitable for all trimesters of pregnancy",
        "Perfect for older adults needing extra care and attention",
        "No prior Pilates experience required",
      ],
    },
    {
      icon: Users,
      level: "Mat Class",
      suitable: "Traditional Pilates on the mat — available at Kildare Town only",
      difficulty: 3,
      whatToExpect: [
        "Classic mat Pilates exercises focusing on core strength and flexibility",
        "No equipment needed — just you and the mat",
        "Perfect complement to your Reformer practice",
        "Builds body awareness and foundational strength",
        "Suitable for all levels with modifications available",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24">
        <ClassesBrandStatement />
        
        {/* All Classes - Clean Flow */}
        <section className="py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="space-y-6">
                {allClasses.map((classData) => (
                  <ClassCard 
                    key={classData.level} 
                    {...classData} 
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 md:py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Still Not Sure Which Class?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our instructors are happy to help you find the right starting point. We recommend starting with a
                Classic class to learn the fundamentals and find your flow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="text-black border-0 shadow-lg hover:brightness-105"
                  style={{ background: 'linear-gradient(180deg, #b8d4c3 0%, #A3C1AD 40%, #8fb39c 100%)' }}
                >
                  <a href="/our-studios">View Our Studios</a>
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
