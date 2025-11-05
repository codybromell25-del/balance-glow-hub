import { Heart, Users, Target } from "lucide-react";

const PhilosophySection = () => {
  const values = [
    {
      icon: Heart,
      title: "Every Body Welcome",
      description: "We believe that strength, flexibility and confidence are for every body. Our inclusive approach means you'll feel supported regardless of your starting point.",
    },
    {
      icon: Users,
      title: "Small Group Experience",
      description: "Small class sizes ensure personalized attention from our expert instructors. You're not just a number—you're part of our community.",
    },
    {
      icon: Target,
      title: "Tailored Journey",
      description: "From foundation to advanced, we guide your Pilates journey at your pace. Clear progression pathways help you achieve your wellness goals.",
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Why Balance Studios?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Balance Studios, we believe that strength, flexibility and confidence are for every body. 
            With small-group reformer classes, expert instructors and five beautifully designed 
            studios across Kildare and Wicklow, we tailor your Pilates journey so you feel great in body and mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="bg-background p-4 md:p-8 rounded-lg border-2 border-primary/40 hover:border-primary/60 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
