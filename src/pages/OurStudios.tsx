import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Import gallery images
import studioInterior1 from "@/assets/studio-interior-1.png";
import studioReformersRow from "@/assets/studio-reformers-row.jpg";
import studioNeonSign from "@/assets/studio-neon-sign.jpg";
import studioChandelier from "@/assets/hero-studio-chandelier.png";
import studioEntrance from "@/assets/studio-entrance.png";
import studioHallway from "@/assets/studio-hallway.png";

const OurStudios = () => {
  const studios = [
    {
      name: "Clane Studio",
      slug: "clane",
      address: "Unit 4a, Yew Tree Square, Prosperous Rd, Abbeyland, Clane, Co. Kildare, W91 R642, Ireland",
      parking: "Free parking available nearby",
      hours: "Open 7 Days a Week",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Unit+4a+Yew+Tree+Square+Prosperous+Rd+Abbeyland+Clane+Co.+Kildare+W91+R642+Ireland",
      hasDetailPage: true,
    },
    {
      name: "Kildare Town Studio",
      slug: "kildare",
      address: "Unit 3 Claregate St, Kildare, R51 E772, Ireland",
      parking: "Street parking and public car park",
      hours: "Open 7 Days a Week",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Unit+3+Claregate+St+Kildare+R51+E772+Ireland",
      hasDetailPage: true,
    },
    {
      name: "Blessington Studio",
      slug: "blessington",
      address: "1a The Green, Main St, Blessington, Co. Wicklow, W91 PNV2, Ireland",
      parking: "Free parking on-site",
      hours: "Open 7 Days a Week",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=1a+The+Green+Main+St+Blessington+Co.+Wicklow+W91+PNV2+Ireland",
      hasDetailPage: true,
    },
    {
      name: "Enfield Studio",
      slug: "enfield",
      address: "Unit 3, Main Street, Enfield, Co. Meath, A83 RP84",
      parking: "Free parking available",
      hours: "Open 7 Days a Week",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Unit+3+Main+Street+Enfield+Co.+Meath+A83+RP84",
      hasDetailPage: true,
    },
    {
      name: "Bray Studio",
      slug: "bray",
      address: "Industrial Development Agency Business Park, Southern Cross Rd, Irishtown, Bray, Co. Wicklow, A98 T276, Ireland",
      parking: "Free on-site parking",
      hours: "Open 7 Days a Week",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Balance+Bray+Industrial+Development+Agency+Business+Park+Southern+Cross+Rd+Irishtown+Bray+Co.+Wicklow+A98+T276+Ireland",
      hasDetailPage: true,
    },
  ];

  const galleryImages = [
    { src: studioChandelier, alt: "Elegant chandelier in balance studio" },
    { src: studioReformersRow, alt: "Reformer machines in a row" },
    { src: studioNeonSign, alt: "balance neon sign" },
    { src: studioInterior1, alt: "balance studio interior" },
    { src: studioEntrance, alt: "Studio entrance" },
    { src: studioHallway, alt: "Studio hallway" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24">
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
                  {/* Card without image */}
                  <div className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                    {/* Sage green gradient top bar */}
                    <div className="h-2 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #b8d4c3 0%, #A3C1AD 40%, #8fb39c 100%)' }}>
                      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-black/10" />
                    </div>
                    
                    <div className="p-6">
                      {/* Studio name */}
                      <h2 className="text-xl md:text-2xl font-heading italic text-foreground mb-4">
                        {studio.name.replace(' Studio', '')}
                      </h2>

                      {/* Divider */}
                      <div className="w-12 h-px mb-4" style={{ background: '#A3C1AD' }} />

                      {/* Details */}
                      <div className="space-y-3 mb-6 text-sm">
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
                          <Button asChild className="flex-1 border-0 text-black shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all" style={{ background: 'linear-gradient(180deg, #b8d4c3 0%, #A3C1AD 40%, #8fb39c 100%)' }}>
                            <a href={`/studio/${studio.slug}`}>View Studio</a>
                          </Button>
                        ) : (
                          <Button asChild className="flex-1 border-0 text-black shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all" style={{ background: 'linear-gradient(180deg, #b8d4c3 0%, #A3C1AD 40%, #8fb39c 100%)' }}>
                            <a href="/book-class">Book Now</a>
                          </Button>
                        )}
                        <Button 
                          asChild 
                          className="px-4 border-0 text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                          style={{ background: 'linear-gradient(180deg, #b8d4c3 0%, #A3C1AD 40%, #8fb39c 100%)' }}
                        >
                          <a 
                            href={studio.directionsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <MapPin className="w-4 h-4 text-white" />
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

        {/* Studio Gallery */}
        <section className="py-12 md:py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-heading italic text-foreground mb-4">
                Inside Our Studios
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Step inside and discover the balance. experience — modern reformers, serene spaces, and an atmosphere designed to inspire.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {galleryImages.map((image, index) => (
                <div 
                  key={index}
                  className={`relative overflow-hidden rounded-2xl shadow-lg group ${
                    index === 0 ? 'col-span-2 row-span-2 md:col-span-2 md:row-span-2' : ''
                  }`}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                      index === 0 ? 'h-full min-h-[300px] md:min-h-[450px]' : 'h-48 md:h-64'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
