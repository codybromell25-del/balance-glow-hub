import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart } from "lucide-react";
import kellyOwner from "@/assets/kelly-owner-new.png";
import studioClane from "@/assets/studio-clane.png";
import studioKildare from "@/assets/studio-kildare.png";
import studioBlessington from "@/assets/studio-blessington.png";
import studioEnfield from "@/assets/studio-enfield.png";
import studioBray from "@/assets/studio-bray.png";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-12 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
                Our Story
              </h1>
            </div>
          </div>
        </section>

        {/* Meet Kelly */}
        <section className="py-12 md:py-24">
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
                    src={studioClane} 
                    alt="Balance Studio Clane location"
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
                    src={studioBlessington} 
                    alt="Balance Studio Blessington location"
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

        {/* Values */}
        <section className="py-12 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6 md:mb-12 text-center">
                What We Stand For
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                {[
                  {
                    title: "Inclusivity",
                    description: "Every body, every age, every fitness level—all are welcome here.",
                  },
                  {
                    title: "Excellence",
                    description: "Expert instructors committed to your form, safety, and progress.",
                  },
                  {
                    title: "Community",
                    description: "More than a studio—a supportive space where you belong.",
                  },
                  {
                    title: "Transformation",
                    description: "Real results through consistent, mindful, empowered practice.",
                  },
                ].map((value) => (
                  <div key={value.title} className="bg-white p-4 md:p-6 rounded-lg border-2 border-primary/40">
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
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
