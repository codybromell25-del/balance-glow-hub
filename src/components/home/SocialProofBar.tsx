import { Star, Users, MapPin } from "lucide-react";
const SocialProofBar = () => {
  const stats = [{
    icon: MapPin,
    value: "5",
    label: "Studios"
  }, {
    icon: Users,
    value: "10,000+",
    label: "Classes Taught"
  }, {
    icon: Star,
    value: "4.9★",
    label: "Google Rating"
  }];
  return <section className="py-4 md:py-5 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {stats.map((stat, index) => <div key={index} className="flex items-center gap-3">
              <stat.icon className="w-5 h-5 text-primary" />
              <div className="flex items-baseline gap-2">
                <span className="text-xl md:text-2xl font-heading font-bold text-foreground">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default SocialProofBar;