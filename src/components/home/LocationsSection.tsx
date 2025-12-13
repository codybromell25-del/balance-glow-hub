import { MapPin } from "lucide-react";
import studioClane from "@/assets/studio-clane.png";
import studioKildare from "@/assets/studio-kildare.png";
import studioBlessington from "@/assets/studio-blessington.png";
import studioEnfield from "@/assets/studio-enfield.png";
import studioBray from "@/assets/studio-bray.png";
const LocationsSection = () => {
  const locations = [{
    name: "Clane",
    county: "Co. Kildare",
    description: "Our original studio in the heart of Clane",
    image: studioClane,
    size: "tall" // tall, wide, or normal
  }, {
    name: "Kildare Town",
    county: "Co. Kildare",
    description: "Convenient town center location",
    image: studioKildare,
    size: "normal"
  }, {
    name: "Blessington",
    county: "Co. Wicklow",
    description: "Scenic lakeside wellness space",
    image: studioBlessington,
    size: "wide"
  }, {
    name: "Enfield",
    county: "Co. Meath",
    description: "Modern studio with ample parking",
    image: studioEnfield,
    size: "normal"
  }, {
    name: "Bray",
    county: "Co. Wicklow",
    description: "Coastal studio with natural light",
    image: studioBray,
    size: "tall"
  }];
  return <section className="py-10 md:py-14 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 tracking-tight text-[#1e1a1a]">
            Pick Your Pilates Playground
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Five beautifully designed studios across Kildare, Wicklow, and Meath. Each location offers the same
            exceptional experience with our signature warm welcome.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
        {locations.map((location, index) => {
          const heightClass = location.size === "tall" ? "h-96" : location.size === "wide" ? "h-64" : "h-80";
          const studioSlug = location.name.toLowerCase().replace(" ", "-");
          return <a key={location.name} href={`/studio/${studioSlug === "kildare-town" ? "kildare" : studioSlug}`} className={`group relative block ${heightClass} break-inside-avoid rounded-lg overflow-hidden animate-fade-in hover:scale-[1.02] transition-all duration-300`} style={{
            animationDelay: `${index * 0.1}s`
          }}>
                {/* Image */}
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{
              backgroundImage: `url(${location.image})`
            }} />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-5 h-5 text-white" />
                      <p className="text-sm text-white/90 font-medium">{location.county}</p>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-white mb-2 tracking-tight">{location.name}</h3>
                    <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {location.description}
                    </p>
                  </div>
                </div>

                {/* Book Now Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide">Book Now</p>
                </div>
              </a>;
        })}
        </div>
      </div>
    </section>;
};
export default LocationsSection;