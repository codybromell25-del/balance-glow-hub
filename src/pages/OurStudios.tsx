import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OurStudios = () => {
  const studios = [
    {
      name: "Clane Studio",
      address: "Unit 4a, Yew Tree Square, Prosperous Rd, Abbeyland, Clane, Co. Kildare, W91 R642, Ireland",
      parking: "Free parking available nearby",
      hours: "Mon-Fri: 6am-8pm, Sat-Sun: 8am-2pm",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Unit+4a+Yew+Tree+Square+Prosperous+Rd+Abbeyland+Clane+Co.+Kildare+W91+R642+Ireland",
    },
    {
      name: "Kildare Town Studio",
      address: "Unit 3 Claregate St, Kildare, R51 E772, Ireland",
      parking: "Street parking and public car park",
      hours: "Mon-Fri: 6am-8pm, Sat-Sun: 8am-2pm",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Unit+3+Claregate+St+Kildare+R51+E772+Ireland",
    },
    {
      name: "Blessington Studio",
      address: "1a The Green, Main St, Blessington, Co. Wicklow, W91 PNV2, Ireland",
      parking: "Free parking on-site",
      hours: "Mon-Fri: 6am-8pm, Sat-Sun: 8am-2pm",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=1a+The+Green+Main+St+Blessington+Co.+Wicklow+W91+PNV2+Ireland",
    },
    {
      name: "Enfield Studio",
      address: "Unit 3, Main Street, Enfield, Co. Meath, A83 RP84",
      parking: "Free parking available",
      hours: "Mon-Fri: 6am-8pm, Sat-Sun: 8am-2pm",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Unit+3+Main+Street+Enfield+Co.+Meath+A83+RP84",
    },
    {
      name: "Bray Studio",
      address: "Industrial Development Agency Business Park, Southern Cross Rd, Irishtown, Bray, Co. Wicklow, A98 T276, Ireland",
      parking: "Free on-site parking",
      hours: "Mon-Fri: 6am-8pm, Sat-Sun: 8am-2pm",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Balance+Bray+Industrial+Development+Agency+Business+Park+Southern+Cross+Rd+Irishtown+Bray+Co.+Wicklow+A98+T276+Ireland",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <PageHeader 
          title="Take Your Pick" 
          subtitle="Five stunning studios across Kildare, Wicklow & Meath—each one designed to help you move, sweat, and thrive. Pick your perfect spot and let's make magic happen!"
        />

        {/* Studios Grid */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {studios.map((studio, index) => (
                <div
                  key={studio.name}
                  className="group bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/30 hover:border-primary/40 hover:bg-card/80 hover:shadow-xl transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <h2 className="text-xl font-heading italic text-foreground mb-6 pb-4 border-b border-border/30">
                    {studio.name}
                  </h2>

                  <div className="space-y-5 mb-8">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-4 h-4 text-primary mt-1.5 flex-shrink-0" />
                      <div>
                        <p className="text-foreground text-sm leading-relaxed">{studio.address}</p>
                        <p className="text-xs text-muted-foreground mt-2 italic">{studio.parking}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Clock className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <p className="text-foreground text-sm">{studio.hours}</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Button 
                      asChild
                      size="default"
                      className="w-full"
                    >
                      <a href="/book-class">Book Now</a>
                    </Button>
                    <Button 
                      asChild
                      size="default"
                      variant="ghost"
                      className="w-full text-muted-foreground hover:text-foreground"
                    >
                      <a 
                        href={studio.directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get Directions
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default OurStudios;
