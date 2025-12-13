import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import studioClane from "@/assets/studio-clane.png";
import studioKildare from "@/assets/studio-kildare.png";
import studioBlessington from "@/assets/studio-blessington.png";
import studioEnfield from "@/assets/studio-enfield.png";
import studioBray from "@/assets/studio-bray.png";

const OurStudios = () => {
  const studios = [
    {
      name: "Clane Studio",
      address: "Unit 4a, Yew Tree Square, Prosperous Rd, Abbeyland, Clane, Co. Kildare, W91 R642, Ireland",
      parking: "Free parking available nearby",
      hours: "Mon-Fri: 6am-8pm, Sat-Sun: 8am-2pm",
      image: studioClane,
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2389.2!2d-6.6889!3d53.2919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDE3JzMwLjgiTiA2wrA0MScyMC4wIlc!5e0!3m2!1sen!2sie!4v1234567890",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Unit+4a+Yew+Tree+Square+Prosperous+Rd+Abbeyland+Clane+Co.+Kildare+W91+R642+Ireland",
    },
    {
      name: "Kildare Town Studio",
      address: "Unit 3 Claregate St, Kildare, R51 E772, Ireland",
      parking: "Street parking and public car park",
      hours: "Mon-Fri: 6am-8pm, Sat-Sun: 8am-2pm",
      image: studioKildare,
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2389.2!2d-6.9108!3d53.1596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDA5JzM0LjYiTiA2wrA1NCczOC45Ilc!5e0!3m2!1sen!2sie!4v1234567890",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Unit+3+Claregate+St+Kildare+R51+E772+Ireland",
    },
    {
      name: "Blessington Studio",
      address: "1a The Green, Main St, Blessington, Co. Wicklow, W91 PNV2, Ireland",
      parking: "Free parking on-site",
      hours: "Mon-Fri: 6am-8pm, Sat-Sun: 8am-2pm",
      image: studioBlessington,
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2389.2!2d-6.5349!3d53.1711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDEwJzE2LjAiTiA2wrAzMicwNS42Ilc!5e0!3m2!1sen!2sie!4v1234567890",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=1a+The+Green+Main+St+Blessington+Co.+Wicklow+W91+PNV2+Ireland",
    },
    {
      name: "Enfield Studio",
      address: "Unit 3, Main Street, Enfield, Co. Meath, A83 RP84",
      parking: "Free parking available",
      hours: "Mon-Fri: 6am-8pm, Sat-Sun: 8am-2pm",
      image: studioEnfield,
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2389.2!2d-6.8309!3d53.4164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDI0JzU5LjAiTiA2wrA0OSc1MS4yIlc!5e0!3m2!1sen!2sie!4v1234567890",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Unit+3+Main+Street+Enfield+Co.+Meath+A83+RP84",
    },
    {
      name: "Bray Studio",
      address: "Industrial Development Agency Business Park, Southern Cross Rd, Irishtown, Bray, Co. Wicklow, A98 T276, Ireland",
      parking: "Free on-site parking",
      hours: "Mon-Fri: 6am-8pm, Sat-Sun: 8am-2pm",
      image: studioBray,
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2389.2!2d-6.0983!3d53.2026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDEyJzA5LjQiTiA2wrAwNScxNy45Ilc!5e0!3m2!1sen!2sie!4v1234567890",
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
              {studios.map((studio, index) => (
                <div
                  key={studio.name}
                  className="bg-white p-4 md:p-8 rounded-lg border-2 border-primary/40 hover:border-primary/60 hover:shadow-lg transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Studio Image */}
                  <div 
                    className="w-full h-48 rounded-lg mb-6 overflow-hidden"
                    style={{
                      backgroundImage: `url(${studio.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />

                  {/* Studio Info */}
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                    {studio.name}
                  </h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground mb-1">Address</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">{studio.address}</p>
                        <p className="text-xs text-muted-foreground mt-2">{studio.parking}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground mb-1">Studio Hours</p>
                        <p className="text-muted-foreground text-sm">{studio.hours}</p>
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col gap-3">
                    <Button 
                      asChild
                      size="lg"
                      className="w-full"
                    >
                      <a href="/book-class">Book Now</a>
                    </Button>
                    <Button 
                      asChild
                      size="lg"
                      variant="outline"
                      className="w-full"
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
