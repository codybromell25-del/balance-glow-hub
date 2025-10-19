import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Zap, Award } from "lucide-react";

const ClassLevelsSection = () => {
  const levels = [
    {
      icon: TrendingUp,
      level: "Foundation",
      title: "New to Reformer?",
      description: "Perfect for beginners. Learn the fundamentals, build confidence, and master proper form in a supportive environment.",
      color: "from-primary/10 to-primary/5",
      borderColor: "border-primary/20",
    },
    {
      icon: Zap,
      level: "Level 1 & 2",
      title: "Build Your Practice",
      description: "Progress your skills with more dynamic flows and challenging transitions. Suitable for those comfortable with the basics.",
      color: "from-primary/10 to-primary/5",
      borderColor: "border-primary/20",
    },
    {
      icon: Award,
      level: "Advanced",
      title: "Challenge Yourself",
      description: "Complex sequences and specialty classes like Slow Burn. For experienced practitioners seeking intensity and variety.",
      color: "from-primary/10 to-primary/5",
      borderColor: "border-primary/20",
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Your Pilates Journey
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Clear progression pathways mean you always know which class is right for you. 
            Start where you are, progress at your pace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {levels.map((level, index) => {
            const Icon = level.icon;
            return (
              <div
                key={level.level}
                className={`relative bg-gradient-to-br ${level.color} p-8 rounded-xl border ${level.borderColor} hover:shadow-lg transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-primary uppercase tracking-wide">
                      {level.level}
                    </p>
                  </div>
                </div>
                
                <h3 className="text-2xl font-heading font-semibold mb-3 text-foreground">
                  {level.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {level.description}
                </p>

                <div className="absolute bottom-4 right-4">
                  <ArrowRight className="w-5 h-5 text-primary/40" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/classes">
              Explore All Classes
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClassLevelsSection;
