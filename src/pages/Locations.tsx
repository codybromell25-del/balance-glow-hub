import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, Clock, Phone, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Locations = () => {
  const studios = [
    {
      name: "Clane Studio",
      address: "Main Street, Clane, Co. Kildare",
      phone: "+353 (0)45 XXX XXX",
      email: "clane@balancestudios.ie",
      parking: "Free parking available nearby",
      hours: "Mon-Fri: 6am-8pm, Sat-Sun: 8am-2pm",
    },
    {
      name: "Kildare Town Studio",
      address: "Market Square, Kildare Town, Co. Kildare",
      phone: "+353 (0)45 XXX XXX",
      email: "kildare@balancestudios.ie",
      parking: "Street parking and public car park",
      hours: "Mon-Fri: 6am-8pm, Sat-Sun: 8am-2pm",
    },
    {
      name: "Blessington Studio",
      address: "Main Street, Blessington, Co. Wicklow",
      phone: "+353 (0)45 XXX XXX",
      email: "blessington@balancestudios.ie",
      parking: "Free parking on-site",
      hours: "Mon-Fri: 6am-8pm, Sat-Sun: 8am-2pm",
    },
    {
      name: "Enfield Studio",
      address: "Main Street, Enfield, Co. Meath",
      phone: "+353 (0)46 XXX XXX",
      email: "enfield@balancestudios.ie",
      parking: "Free parking available",
      hours: "Mon-Fri: 6am-8pm, Sat-Sun: 8am-2pm",
    },
    {
      name: "Bray Studio",
      address: "Main Street, Bray, Co. Wicklow",
      phone: "+353 (0)1 XXX XXXX",
      email: "bray@balancestudios.ie",
      parking: "Public car parks nearby",
      hours: "Mon-Fri: 6am-8pm, Sat-Sun: 8am-2pm",
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
                Five beautifully designed boutique studios across Kildare, Wicklow, and Meath. 
                Find the location that's most convenient for you.
              </p>
            </div>
          </div>
        </section>

        {/* Studios Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-8">
              {studios.map((studio, index) => (
                <div
                  key={studio.name}
                  className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Studio Info */}
                    <div className="lg:col-span-2">
                      <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                        {studio.name}
                      </h2>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-foreground">Address</p>
                            <p className="text-muted-foreground">{studio.address}</p>
                            <p className="text-sm text-muted-foreground mt-1">{studio.parking}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-foreground">Hours</p>
                            <p className="text-muted-foreground">{studio.hours}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-foreground">Phone</p>
                            <a
                              href={`tel:${studio.phone}`}
                              className="text-primary hover:underline"
                            >
                              {studio.phone}
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-foreground">Email</p>
                            <a
                              href={`mailto:${studio.email}`}
                              className="text-primary hover:underline"
                            >
                              {studio.email}
                            </a>
                          </div>
                        </div>
                      </div>

                      <Link to="/schedule" className="mt-6 inline-block">
                        <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                          <Calendar className="w-4 h-4 mr-2" />
                          See Class Schedule
                        </Button>
                      </Link>
                    </div>

                    {/* Map Placeholder */}
                    <div className="lg:col-span-1">
                      <div className="bg-muted/50 rounded-lg h-64 lg:h-full flex items-center justify-center border border-border">
                        <div className="text-center p-6">
                          <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
                          <p className="text-muted-foreground text-sm">
                            Interactive map coming soon
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Ready to Visit?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Book your first class or get in touch with any questions. We're here to help you 
                get started.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Book a Class
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary/10"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Locations;
