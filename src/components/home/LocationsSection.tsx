import { MapPin, Sparkles } from "lucide-react";
import studioClane from "@/assets/studio-clane.jpg";
import studioKildare from "@/assets/studio-kildare.jpg";
import studioBlessington from "@/assets/studio-blessington.jpg";
import studioEnfield from "@/assets/studio-enfield.jpg";
import studioBray from "@/assets/studio-bray.jpg";
import balanceLogo from "@/assets/balance-removebg-preview.png";
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
            6 beautifully designed studios across Limerick, Kildare, Wicklow, and Meath. Each location offers the same
            exceptional experience with our signature warm welcome.
          </p>
        </div>

        {/* Studios Grid - matching Our Story page style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {locations.map((location, index) => {
            const studioSlug = location.name.toLowerCase().replace(" ", "-");
            return (
              <a 
                key={location.name} 
                href={`/studio/${studioSlug === "kildare-town" ? "kildare" : studioSlug}`} 
                className="group relative block h-64 rounded-2xl overflow-hidden shadow-lg animate-fade-in hover:scale-[1.02] transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <img 
                  src={location.image} 
                  alt={`Balance studio ${location.name}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-white/90" />
                      <p className="text-xs text-white/80 font-medium uppercase tracking-wider">{location.county}</p>
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-white mb-1 tracking-tight">{location.name}</h3>
                    <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {location.description}
                    </p>
                  </div>
                </div>

                {/* View Studio Badge */}
                <div className="absolute top-4 right-4 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg" style={{ background: 'linear-gradient(180deg, #b8d4c3 0%, #A3C1AD 40%, #8fb39c 100%)' }}>
                  <p className="text-xs font-semibold text-black uppercase tracking-wide">View Studio</p>
                </div>
              </a>
            );
          })}
          
          {/* Limerick Coming Soon Tile */}
          <a 
            href="/limerick-coming-soon"
            className="group relative block h-64 rounded-2xl overflow-hidden shadow-lg animate-fade-in hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
            style={{ 
              animationDelay: '0.5s',
              background: 'linear-gradient(135deg, #b8d4c3 0%, #A3C1AD 40%, #8fb39c 100%)'
            }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/30 rounded-full blur-2xl group-hover:bg-white/40 transition-all duration-300" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/20 rounded-full blur-3xl group-hover:bg-white/30 transition-all duration-300" />
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center transform group-hover:scale-105 transition-transform duration-300">
              <img 
                src={balanceLogo} 
                alt="balance logo"
                className="h-20 w-auto mb-4 opacity-90"
              />
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-black/70" />
                <p className="text-xs text-black/70 font-semibold uppercase tracking-widest">Coming Soon</p>
                <Sparkles className="w-4 h-4 text-black/70" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-black tracking-tight">Limerick</h3>
              <p className="text-black/80 text-sm mt-2 font-semibold group-hover:text-black transition-colors">Click Here To See More</p>
            </div>

            {/* Coming Soon Badge */}
            <div className="absolute top-4 right-4 px-4 py-2 rounded-full shadow-md bg-white/40 backdrop-blur-sm group-hover:bg-white/60 transition-all duration-300">
              <p className="text-xs font-semibold text-black uppercase tracking-wide">2026</p>
            </div>
          </a>
        </div>
      </div>
    </section>;
};
export default LocationsSection;