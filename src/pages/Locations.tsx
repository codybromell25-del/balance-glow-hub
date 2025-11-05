import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, Clock, Phone, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import studioClane from "@/assets/studio-clane.png";
import studioKildare from "@/assets/studio-kildare.png";
import studioBlessington from "@/assets/studio-blessington.png";
import studioEnfield from "@/assets/studio-enfield.png";
import studioBray from "@/assets/studio-bray.png";

const Locations = () => {
  const studios = [
    {
      name: "Clane Studio",
      address: "Main Street, Clane, Co. Kildare",
      phone: "+353 (0)45 XXX XXX",
      email: "clane@balancestudios.ie",
      parking: "Free parking available nearby",
      hours: "Mon-Fri: 6am-8pm, Sat-Sun: 8am-2pm",
      image: studioClane,
    },
    {
      name: "Kildare Town Studio",
      address: "Market Square, Kildare Town, Co. Kildare",
      phone: "+353 (0)45 XXX XXX",
      email: "kildare@balancestudios.ie",
      parking: "Street parking and public car park",
      hours: "Mon-Fri: 6am-8pm, Sat-Sun: 8am-2pm",
      image: studioKildare,
    },
    {
      name: "Blessington Studio",
      address: "Main Street, Blessington, Co. Wicklow",
      phone: "+353 (0)45 XXX XXX",
      email: "blessington@balancestudios.ie",
      parking: "Free parking on-site",
      hours: "Mon-Fri: 6am-8pm, Sat-Sun: 8am-2pm",
      image: studioBlessington,
    },
    {
      name: "Enfield Studio",
      address: "Main Street, Enfield, Co. Meath",
      phone: "+353 (0)46 XXX XXX",
      email: "enfield@balancestudios.ie",
      parking: "Free parking available",
      hours: "Mon-Fri: 6am-8pm, Sat-Sun: 8am-2pm",
      image: studioEnfield,
    },
    {
      name: "Bray Studio",
      address: "Main Street, Bray, Co. Wicklow",
      phone: "+353 (0)1 XXX XXXX",
      email: "bray@balancestudios.ie",
      parking: "Public car parks nearby",
      hours: "Mon-Fri: 6am-8pm, Sat-Sun: 8am-2pm",
      image: studioBray,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 bg-gradient-to-br from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
                Visit Us
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Five beautifully designed studios across Kildare, Wicklow, and Meath. 
                Find the location that's most convenient for you.
              </p>
            </div>
          </div>
        </section>

        {/* Studios Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-6">
              {studios.map((studio, index) => (
                <div
                  key={studio.name}
                  className="relative overflow-hidden rounded-xl border border-border hover:shadow-2xl transition-all animate-fade-in group h-[400px]"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 z-0"
                    style={{
                      backgroundImage: `url(${studio.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-transparent group-hover:from-black/50 group-hover:via-black/40 transition-all duration-500" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl font-heading font-bold text-white mb-4">
                        {studio.name}
                      </h2>

                      <div className="space-y-3 mb-4">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-white">Address</p>
                            <p className="text-white/80 text-sm">{studio.address}</p>
                            <p className="text-xs text-white/70 mt-1">{studio.parking}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-white">Hours</p>
                            <p className="text-white/80 text-sm">{studio.hours}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-white">Phone</p>
                            <a
                              href={`tel:${studio.phone}`}
                              className="text-primary hover:text-primary/80 transition-colors text-sm"
                            >
                              {studio.phone}
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-white">Email</p>
                            <a
                              href={`mailto:${studio.email}`}
                              className="text-primary hover:text-primary/80 transition-colors text-sm"
                            >
                              {studio.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Link to="/schedule" className="mt-auto">
                      <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 shadow-lg">
                        <Calendar className="w-4 h-4 mr-2" />
                        See Class Schedule
                      </Button>
                    </Link>
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

export default Locations;
