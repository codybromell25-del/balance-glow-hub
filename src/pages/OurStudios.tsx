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
      slug: "clane",
      address: "Unit 4a, Yew Tree Square, Prosperous Rd, Abbeyland, Clane, Co. Kildare, W91 R642, Ireland",
      parking: "Free parking available nearby",
      hours: "Mon-Fri: 6am-8pm, Sat-Sun: 8am-2pm",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Unit+4a+Yew+Tree+Square+Prosperous+Rd+Abbeyland+Clane+Co.+Kildare+W91+R642+Ireland",
      hasDetailPage: true,
    },
    {
      name: "Kildare Town Studio",
      slug: "kildare",
      address: "Unit 3 Claregate St, Kildare, R51 E772, Ireland",
      parking: "Street parking and public car park",
      hours: "Mon-Fri: 6am-8pm, Sat-Sun: 8am-2pm",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Unit+3+Claregate+St+Kildare+R51+E772+Ireland",
      hasDetailPage: true,
    },
    {
      name: "Blessington Studio",
      slug: "blessington",
      address: "1a The Green, Main St, Blessington, Co. Wicklow, W91 PNV2, Ireland",
      parking: "Free parking on-site",
      hours: "Mon-Fri: 6am-8pm, Sat-Sun: 8am-2pm",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=1a+The+Green+Main+St+Blessington+Co.+Wicklow+W91+PNV2+Ireland",
      hasDetailPage: true,
    },
    {
      name: "Enfield Studio",
      slug: "enfield",
      address: "Unit 3, Main Street, Enfield, Co. Meath, A83 RP84",
      parking: "Free parking available",
      hours: "Mon-Fri: 6am-8pm, Sat-Sun: 8am-2pm",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Unit+3+Main+Street+Enfield+Co.+Meath+A83+RP84",
      hasDetailPage: true,
    },
    {
      name: "Bray Studio",
      slug: "bray",
      address: "Industrial Development Agency Business Park, Southern Cross Rd, Irishtown, Bray, Co. Wicklow, A98 T276, Ireland",
      parking: "Free on-site parking",
      hours: "Mon-Fri: 6am-8pm, Sat-Sun: 8am-2pm",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Balance+Bray+Industrial+Development+Agency+Business+Park+Southern+Cross+Rd+Irishtown+Bray+Co.+Wicklow+A98+T276+Ireland",
      hasDetailPage: true,
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {studios.map((studio, index) => (
                <div
                  key={studio.name}
                  className="group relative animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Card with left accent border */}
                  <div className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                    {/* Pink gradient top bar */}
                    <div className="h-2 bg-gradient-button" />
                    
                    <div className="p-8">
                      {/* Studio number + name */}
                      <div className="flex items-baseline gap-4 mb-6">
                        <span className="text-5xl font-heading italic text-primary/30">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h2 className="text-xl md:text-2xl font-heading italic text-foreground">
                          {studio.name.replace(' Studio', '')}
                        </h2>
                      </div>

                      {/* Divider */}
                      <div className="w-12 h-px bg-primary/40 mb-6" />

                      {/* Details */}
                      <div className="space-y-4 mb-8 text-sm">
                        <div className="flex gap-3">
                          <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">{studio.address}</span>
                        </div>
                        <div className="flex gap-3">
                          <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{studio.hours}</span>
                        </div>
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-3">
                        {studio.hasDetailPage ? (
                          <Button asChild className="flex-1">
                            <Link to={`/studio/${studio.slug}`}>View Studio</Link>
                          </Button>
                        ) : (
                          <Button asChild className="flex-1">
                            <a href="/book-class">Book Now</a>
                          </Button>
                        )}
                        <Button 
                          asChild 
                          variant="outline"
                          className="px-4"
                        >
                          <a 
                            href={studio.directionsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <MapPin className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
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
