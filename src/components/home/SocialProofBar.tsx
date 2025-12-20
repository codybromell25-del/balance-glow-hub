import { Star, Users, MapPin } from "lucide-react";

const SocialProofBar = () => {
  const stats = [
    {
      icon: MapPin,
      value: "5",
      label: "Studios",
      color: "#A3C1AD"
    },
    {
      icon: Users,
      value: "10,000+",
      label: "Classes Taught",
      color: "#A3C1AD"
    },
    {
      icon: Star,
      value: "4.9",
      label: "Google Rating",
      color: "#A3C1AD"
    }
  ];

  return (
    <section className="py-8 md:py-10 bg-gradient-to-b from-secondary/30 via-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Mobile: Stack vertically with cards */}
        <div className="grid grid-cols-3 gap-3 md:hidden">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/80 shadow-sm border border-border/30"
            >
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center mb-3 shadow-sm"
                style={{ background: `linear-gradient(180deg, #b8d4c3 0%, ${stat.color} 100%)` }}
              >
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-heading font-bold text-foreground">
                {stat.value}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1 leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Desktop: Horizontal layout */}
        <div className="hidden md:flex justify-center items-center gap-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4"
            >
              <div 
                className="w-14 h-14 rounded-full flex items-center justify-center shadow-md"
                style={{ background: `linear-gradient(180deg, #b8d4c3 0%, ${stat.color} 100%)` }}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-heading font-bold text-foreground tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;