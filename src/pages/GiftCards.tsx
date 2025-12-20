import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Gift, ArrowRight } from "lucide-react";

const GiftCards = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <PageHeader 
          title="Give the Gift of balance." 
          subtitle="Share the joy of movement with someone you love. Our gift cards are the perfect way to introduce friends and family to the transformative power of Reformer Pilates."
        />

        {/* Gift Card CTA Section */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              {/* Sexy Gift Card Tile */}
              <div className="relative group">
                {/* Glow effect behind card */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#A3C1AD] via-[#8fb39c] to-[#A3C1AD] rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                  {/* Top gradient bar */}
                  <div className="h-2 relative overflow-hidden" style={{ background: 'linear-gradient(90deg, #b8d4c3 0%, #A3C1AD 50%, #8fb39c 100%)' }}>
                    <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-black/10" />
                  </div>
                  
                  <div className="p-10 md:p-14 text-center">
                    {/* Icon */}
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(180deg, #b8d4c3 0%, #A3C1AD 40%, #8fb39c 100%)' }}>
                      <Gift className="w-10 h-10 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                      Create Your Gift Card
                    </h2>
                    
                    {/* Description */}
                    <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
                      Choose any amount and send it instantly. Valid at all 5 studios, never expires.
                    </p>
                    
                    {/* CTA Button */}
                    <Button 
                      asChild 
                      size="lg"
                      className="px-10 py-7 text-lg border-0 text-black shadow-xl hover:shadow-2xl hover:scale-[1.05] transition-all duration-300 rounded-full"
                      style={{ background: 'linear-gradient(180deg, #b8d4c3 0%, #A3C1AD 40%, #8fb39c 100%)' }}
                    >
                      <a href="https://momence.com/balance/gift-card-checkout/62930" target="_blank" rel="noopener noreferrer">
                        Create Gift Card Now
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </a>
                    </Button>
                    
                    {/* Small note */}
                    <p className="text-sm text-muted-foreground mt-6 italic">
                      The perfect gift for birthdays, holidays, or just because ♡
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-10 md:py-14 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                  How It Works
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(180deg, #b8d4c3 0%, #A3C1AD 40%, #8fb39c 100%)' }}>
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">Choose & Purchase</h3>
                  <p className="text-muted-foreground">Select your gift card value and complete your purchase online.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(180deg, #b8d4c3 0%, #A3C1AD 40%, #8fb39c 100%)' }}>
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">Receive Instantly</h3>
                  <p className="text-muted-foreground">Your digital gift card will be emailed directly to you or your recipient — whichever you prefer!</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(180deg, #b8d4c3 0%, #A3C1AD 40%, #8fb39c 100%)' }}>
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">Redeem & Enjoy</h3>
                  <p className="text-muted-foreground">Use the gift card code to book classes at any of our 5 studios.</p>
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

export default GiftCards;

