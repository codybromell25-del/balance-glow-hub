import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import InsideScoop from "@/components/home/InsideScoop";
import kellyOwner from "@/assets/kelly-owner-new.png";
import studioClane from "@/assets/studio-clane.png";
import studioKildare from "@/assets/studio-kildare.png";
import studioBlessington from "@/assets/studio-blessington.png";
import studioEnfield from "@/assets/studio-enfield.png";
import studioBray from "@/assets/studio-bray.png";
import studioReformersRow from "@/assets/studio-reformers-row.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <PageHeader title="who are balance" />

        {/* Meet Kelly */}
        <section className="py-10 md:py-16 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-heading font-medium text-foreground mb-6 md:mb-8 text-center">
                Meet Kelly, Owner of balance
              </h2>
              
              <div className="bg-white p-4 md:p-8 lg:p-12 rounded-lg border-2 border-primary/40 animate-fade-in">
                <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-start">
                  {/* Image */}
                  <div className="order-2 md:order-1">
                    <img src={kellyOwner} alt="Kelly, Owner of balance studios" className="w-full h-auto rounded-lg shadow-lg" />
                    <p className="text-center text-muted-foreground italic mt-4 text-lg">
                      "Growth focused. Always modern. Never stuck."
                    </p>
                  </div>

                  {/* Content - Timeline Style */}
                  <div className="order-1 md:order-2 space-y-6">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      Kelly is the visionary founder and driving force behind balance, quietly redefining Pilates in Ireland.
                    </p>
                    
                    {/* Timeline */}
                    <div className="space-y-6 border-l-2 border-primary/30 pl-6">
                      <div className="relative">
                        <div className="absolute -left-[31px] top-1 w-4 h-4 bg-primary rounded-full"></div>
                        <p className="text-sm font-semibold text-primary uppercase tracking-wide">2015</p>
                        <p className="text-muted-foreground leading-relaxed">
                          While raising four children, opened a private home studio offering one-to-one sessions on the Cadillac, Chair, Barrel and Reformer.
                        </p>
                      </div>
                      
                      <div className="relative">
                        <div className="absolute -left-[31px] top-1 w-4 h-4 bg-primary rounded-full"></div>
                        <p className="text-sm font-semibold text-primary uppercase tracking-wide">2020</p>
                        <p className="text-muted-foreground leading-relaxed">
                          Opened the first balance studio in Clane, teaching 25 classes a week and building a team of handpicked instructors.
                        </p>
                      </div>
                      
                      <div className="relative">
                        <div className="absolute -left-[31px] top-1 w-4 h-4 bg-primary rounded-full"></div>
                        <p className="text-sm font-semibold text-primary uppercase tracking-wide">Today</p>
                        <p className="text-muted-foreground leading-relaxed">
                          Six luxurious studios across Kildare, Wicklow, Meath and Limerick. Over 35 exceptional instructors. Spaces designed for quiet luxury and real comfort.
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-primary/20">
                      <p className="text-foreground font-medium text-lg italic">
                        balance. for those who expect more.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Take a Step Into balance */}
        <InsideScoop />

        {/* Our Growth */}
        <section className="py-10 md:py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-heading font-medium text-foreground mb-4 md:mb-6 text-center">
                Our Studios
              </h2>
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-10 md:mb-12">
                Quality is the reason we've grown. Expertly designed studios, 
                top-class instructors who deliver real results to real people.
              </p>
              
              {/* Studios Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                  <img src={studioReformersRow} alt="Balance studio reformers" className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300" />
                </div>
                <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <img src={studioClane} alt="Balance studio Clane location" className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300" />
                </div>
                <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                  <img src={studioKildare} alt="Balance studio Kildare Town location" className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300" />
                </div>
                <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  <img src={studioBlessington} alt="Balance studio Blessington location" className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300" />
                </div>
                <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
                  <img src={studioEnfield} alt="Balance studio Enfield location" className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300" />
                </div>
                <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
                  <img src={studioBray} alt="Balance studio Bray location" className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300" />
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