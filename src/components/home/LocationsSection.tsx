import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const LocationsSection = () => {
  const locations = [
    {
      name: "Clane",
      county: "Co. Kildare",
      description: "Our original studio in the heart of Clane",
    },
    {
      name: "Kildare Town",
      county: "Co. Kildare",
      description: "Convenient town center location",
    },
    {
      name: "Blessington",
      county: "Co. Wicklow",
      description: "Scenic lakeside wellness space",
    },
    {
      name: "Enfield",
      county: "Co. Meath",
      description: "Modern studio with ample parking",
    },
    {
      name: "Bray",
      county: "Co. Wicklow",
      description: "Coastal studio with natural light",
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Find Your Nearest Studio
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Five beautifully designed studios across Kildare, Wicklow, and Meath. 
            Each location offers the same exceptional experience with our signature warm welcome.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-12">
          {locations.map((location, index) => (
            <Link
              key={location.name}
              to="/locations"
              className="bg-background p-4 md:p-6 rounded-lg border-2 border-primary/40 hover:border-primary/60 hover:shadow-md transition-all duration-300 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-1">
                    {location.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{location.county}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {location.description}
              </p>
            </Link>
          ))}

          {/* CTA Card */}
          <div className="bg-background p-4 md:p-6 rounded-lg border-2 border-primary/40 hover:border-primary/60 flex flex-col items-center justify-center text-center hover:shadow-md transition-all duration-300">
            <p className="text-lg font-heading font-semibold text-foreground mb-4">
              Ready to visit?
            </p>
            <Button asChild variant="default">
              <Link to="/locations">View All Locations</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
