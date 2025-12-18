import { Star, Users, MapPin } from "lucide-react";

const SocialProofBar = () => {
  const stats = [
    {
      icon: MapPin,
      value: "5",
      label: "Studios"
    },
    {
      icon: Users,
      value: "10,000+",
      label: "Classes Taught"
    },
    {
      icon: Star,
      value: "4.9",
      label: "Google Rating"
    }
  ];

  return (
    <section className="py-6 md:py-8 border-y border-primary/20 bg-gradient-to-r from-transparent via-primary/5 to-transparent">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-0">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`flex items-center gap-3 px-6 md:px-10 ${
                index < stats.length - 1 ? 'md:border-r md:border-primary/30' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-foreground/70" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-heading font-semibold text-foreground tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground/80">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;