import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ClassesBrandStatement from "@/components/home/ClassesBrandStatement";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Heart, BookOpen, Flame, Trophy, Dumbbell, Timer, Hourglass } from "lucide-react";
import { useEffect, useState } from "react";

import clientsStretching from "@/assets/clients-stretching.jpg";
import clientsMatWorkout from "@/assets/clients-mat-workout.jpg";

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
        {level === 2 && "Beginner"}
        {level === 3 && "Moderate"}
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
  accentColor 
}: { 
  icon: React.ElementType;
  level: string;
  suitable: string;
  whatToExpect: string[];
  difficulty: number;
  accentColor: string;
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
            <div className={`w-14 h-14 rounded-full flex items-center justify-center ${accentColor}`}>
              <Icon className="w-7 h-7 text-primary" />
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
                  <span className="text-primary mt-1">•</span>
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
            <a href="/book-class">Book Class</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

// Visual break component
const VisualBreak = ({ image, quote }: { image: string; quote: string }) => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  
  return (
    <div 
      ref={ref}
      className={`relative h-64 md:h-80 rounded-2xl overflow-hidden my-8 transition-all duration-700 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      <img 
        src={image} 
        alt="balance studio moment" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
        <p className="text-background text-xl md:text-2xl font-heading italic text-center px-8 max-w-2xl">
          "{quote}"
        </p>
      </div>
    </div>
  );
};

const Classes = () => {
  const [activeSection, setActiveSection] = useState("foundations");

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 140;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: "smooth"
      });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["foundations", "build-sculpt", "circuit"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const foundationsClasses = [
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
  ];

  const buildSculptClasses = [
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
      icon: Dumbbell,
      level: "Strength",
      suitable: "For those with Reformer experience seeking intensity",
      difficulty: 4,
      whatToExpect: [
        "Less stretching, more power moves with faster pace",
        "Weights, resistance bands, and props for extra challenge",
        "Dynamic and energizing—designed to make you feel strong",
        "All the burn, all the buzz, minus the scary stuff",
        "Choose beginner class if agility/balance are significantly affected",
      ],
    },
  ];

  const circuitClasses = [
    {
      icon: Timer,
      level: "Circuit: Fast Burn",
      suitable: "Fast-paced circuits with Pilates precision",
      difficulty: 5,
      whatToExpect: [
        "Perfect balance of strength, cardio & Reformer Pilates",
        "Back-to-back combos with energizing music on and off Reformer",
        "Heart-thumping, muscle-burning, seriously fun",
        "balance focus on form and control maintained throughout",
        "Available at Studio 2, Kildare Town only",
      ],
    },
    {
      icon: Hourglass,
      level: "Circuit: Slow Burn",
      suitable: "High-rep, controlled circuits for serious sculpting",
      difficulty: 3,
      whatToExpect: [
        "Fewer moves, more reps—all about that delicious shake",
        "Slow, steady circuits that fire up every muscle group",
        "Full-body burner without jumping or chaos",
        "Dials up intensity through controlled, purposeful movement",
        "Pure fire, delivered the balance way: strong, smart, satisfying",
      ],
    },
  ];

  const navItems = [
    { id: "foundations", label: "Foundations & Flow" },
    { id: "build-sculpt", label: "Build & Sculpt" },
    { id: "circuit", label: "Circuit Training" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <ClassesBrandStatement />

        {/* Sticky Quick Navigation */}
        <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b border-border py-3">
          <div className="container mx-auto px-4">
            <div className="flex justify-center gap-2 md:gap-4 flex-wrap">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Foundations & Flow Section */}
        <section id="foundations" className="py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
                  Foundations & Flow
                </span>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                  Start Your Journey
                </h2>
                <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
                  Perfect for beginners, those returning after a break, or anyone seeking mindful movement.
                </p>
              </div>
              
              <div className="space-y-6">
                {foundationsClasses.map((classData) => (
                  <ClassCard 
                    key={classData.level} 
                    {...classData} 
                    accentColor="bg-primary/10"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Visual Break 1 */}
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <VisualBreak 
              image={clientsStretching} 
              quote="Movement is medicine. Every class is a step toward a stronger you."
            />
          </div>
        </div>

        {/* Build & Sculpt Section */}
        <section id="build-sculpt" className="py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-1 bg-accent/30 text-accent-foreground rounded-full text-sm font-medium mb-3">
                  Build & Sculpt
                </span>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                  Level Up Your Practice
                </h2>
                <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
                  For those ready to challenge themselves and build real strength.
                </p>
              </div>
              
              <div className="space-y-6">
                {buildSculptClasses.map((classData) => (
                  <ClassCard 
                    key={classData.level} 
                    {...classData} 
                    accentColor="bg-accent/20"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Visual Break 2 */}
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <VisualBreak 
              image={clientsMatWorkout} 
              quote="Strong is beautiful. Every rep brings you closer to your best self."
            />
          </div>
        </div>

        {/* Circuit Training Section */}
        <section id="circuit" className="py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-1 bg-secondary/50 text-foreground rounded-full text-sm font-medium mb-3">
                  Circuit Training
                </span>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                  Maximum Intensity
                </h2>
                <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
                  High-energy circuits that combine the best of Pilates with heart-pumping cardio.
                </p>
              </div>
              
              <div className="space-y-6">
                {circuitClasses.map((classData) => (
                  <ClassCard 
                    key={classData.level} 
                    {...classData} 
                    accentColor="bg-secondary/30"
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
                  <a href="/book-class">Book a Classic Class</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
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
