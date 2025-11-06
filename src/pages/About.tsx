import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart } from "lucide-react";
import kellyOwner from "@/assets/kelly-owner-new.png";
import studioClane from "@/assets/studio-clane.png";
import studioKildare from "@/assets/studio-kildare.png";
import studioBlessington from "@/assets/studio-blessington.png";
import studioEnfield from "@/assets/studio-enfield.png";
import studioBray from "@/assets/studio-bray.png";
import studioInterior1 from "@/assets/studio-interior-1.png";
import studioHallway from "@/assets/studio-hallway.png";
import studioEntrance from "@/assets/studio-entrance.png";
import studioExterior from "@/assets/studio-exterior.png";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Meet Kelly */}
        <section className="py-12 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-heading font-bold text-foreground mb-6 md:mb-12 text-center">
                Meet Kelly, Owner of Balance
              </h2>
              
              <div className="bg-white p-4 md:p-8 lg:p-12 rounded-lg border-2 border-primary/40">
                <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
                  {/* Image */}
                  <div className="order-2 md:order-1">
                    <img 
                      src={kellyOwner} 
                      alt="Kelly, Owner of Balance Studios"
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>

                  {/* Content */}
                  <div className="order-1 md:order-2 space-y-6">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      Kelly is the founder and business lead at Balance. She creates gorgeous studios, 
                      handpicks and develops incredible instructors, and protects the high Balance standard.
                    </p>
                    
                    <p className="text-muted-foreground leading-relaxed text-lg font-medium">
                      Growth focused, always modern, never stuck.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Growth */}
        <section className="py-12 md:py-24 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 text-center">
                Our Growth
              </h2>
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                Quality is the reason we've grown to where we are now. Expertly designed studios, 
                top-class instructors who deliver real results to real people.
              </p>
              
              {/* Pinterest-style Grid */}
              <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                <div className="break-inside-avoid">
                  <img 
                    src={studioInterior1} 
                    alt="Balance Studio interior with reformers"
                    className="w-full h-auto rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <div className="break-inside-avoid">
                  <img 
                    src={studioClane} 
                    alt="Balance Studio Clane location"
                    className="w-full h-auto rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <div className="break-inside-avoid">
                  <img 
                    src={studioHallway} 
                    alt="Balance Studio hallway"
                    className="w-full h-auto rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <div className="break-inside-avoid">
                  <img 
                    src={studioKildare} 
                    alt="Balance Studio Kildare Town location"
                    className="w-full h-auto rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <div className="break-inside-avoid">
                  <img 
                    src={studioEntrance} 
                    alt="Balance Studio entrance"
                    className="w-full h-auto rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <div className="break-inside-avoid">
                  <img 
                    src={studioBlessington} 
                    alt="Balance Studio Blessington location"
                    className="w-full h-auto rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <div className="break-inside-avoid">
                  <img 
                    src={studioExterior} 
                    alt="Balance Studio storefront"
                    className="w-full h-auto rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <div className="break-inside-avoid">
                  <img 
                    src={studioEnfield} 
                    alt="Balance Studio Enfield location"
                    className="w-full h-auto rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <div className="break-inside-avoid">
                  <img 
                    src={studioBray} 
                    alt="Balance Studio Bray location"
                    className="w-full h-auto rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default About;
