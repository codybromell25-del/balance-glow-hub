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
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {studios.map((studio, index) => (
                <div
                  key={studio.name}
                  className="group relative bg-foreground text-background p-10 rounded-3xl shadow-2xl hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.4)] hover:-translate-y-2 transition-all duration-500 animate-fade-in overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Decorative accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-button opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  
                  <div className="relative z-10">
                    <h2 className="text-2xl md:text-3xl font-heading italic text-background mb-8">
                      {studio.name}
                    </h2>

                    <div className="space-y-6 mb-10">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-background" />
                        </div>
                        <div>
                          <p className="text-background/90 text-sm leading-relaxed">{studio.address}</p>
                          <p className="text-background/60 text-xs mt-2 italic">{studio.parking}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center flex-shrink-0">
                          <Clock className="w-5 h-5 text-background" />
                        </div>
                        <p className="text-background/90 text-sm pt-2.5">{studio.hours}</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button 
                        asChild
                        size="lg"
                        className="flex-1"
                      >
                        <a href="/book-class">Book Now</a>
                      </Button>
                      <Button 
                        asChild
                        size="lg"
                        variant="outline"
                        className="flex-1 border-background/30 text-background hover:bg-background/10 hover:text-background"
                      >
                        <a 
                          href={studio.directionsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Directions
                        </a>
                      </Button>
                    </div>
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
