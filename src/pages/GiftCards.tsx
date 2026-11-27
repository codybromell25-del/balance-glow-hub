import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Gift, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import { isBlackFriday, GIFT_VOUCHER_DISCOUNT } from "@/lib/blackFriday";

const GiftCards = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Gift Cards | balance studios - Reformer Pilates"
        description="Give the gift of balance. Digital gift cards for Reformer Pilates classes. Valid at all 6 studios, never expires. Perfect for birthdays and special occasions."
        canonical="/gift-cards"
      />
      <Navigation />
      <main className="">
        <PageHeader 
          title="Give the Gift of balance." 
          subtitle="Share the joy of movement with someone you love. Our gift cards are the perfect way to introduce friends and family to the transformative power of Reformer Pilates."
        />

        {/* Gift Card CTA Section */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {isBlackFriday() && (
                <div className="mb-8 rounded-2xl bg-foreground text-background px-6 py-5 text-center">
                  <p className="font-heading italic text-sm md:text-base mb-1 text-background/85">Black Friday · three days only</p>
                  <p className="font-heading italic text-2xl md:text-3xl">{GIFT_VOUCHER_DISCOUNT}% off all gift vouchers</p>
                  <p className="text-sm opacity-80 mt-2">Choose any amount and enter code <strong className="font-semibold tracking-wider text-background">BLACKFRIDAY15</strong> at checkout. Buy as many as you like for different people, on the website or the balance app.</p>
                </div>
              )}
              <div className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-card shadow-xl">
                <div className="grid md:grid-cols-[1fr_1.1fr]">
                  {/* Card visual */}
                  <div className="relative flex items-center justify-center bg-[#A3C1AD]/30 p-8 md:p-10">
                    <div className="relative aspect-[1.6/1] w-full max-w-[280px] -rotate-3 rounded-2xl bg-foreground p-5 text-background shadow-2xl">
                      <div className="flex items-start justify-between">
                        <span className="font-heading italic text-2xl">balance.</span>
                        <Gift className="h-5 w-5 text-[#A3C1AD]" />
                      </div>
                      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                        <span className="font-heading italic text-sm text-background/80">a gift for you</span>
                        <span className="text-[10px] tracking-[0.2em] text-background/60">6 STUDIOS</span>
                      </div>
                    </div>
                  </div>
                  {/* Copy + CTA */}
                  <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10 text-center md:text-left">
                    <p className="font-heading italic text-sm text-muted-foreground mb-2">Digital gift card</p>
                    <h2 className="text-2xl sm:text-3xl font-heading italic text-foreground mb-3">
                      Create your gift card
                    </h2>
                    <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                      Choose any amount and send it instantly. Valid at all 6 studios, never expires.
                    </p>
                    <Button asChild size="lg" className="w-full sm:w-auto h-auto min-h-12 whitespace-normal rounded-full border-0 px-6 py-3 text-base text-black shadow-md hover:opacity-90" style={{ background: "linear-gradient(180deg, #b8d4c3 0%, #A3C1AD 40%, #8fb39c 100%)" }}>
                      <a href="https://momence.com/balance/gift-card-checkout/62930" target="_blank" rel="noopener noreferrer">
                        Create gift card
                        <ArrowRight className="w-4 h-4 ml-2 shrink-0" />
                      </a>
                    </Button>
                    <p className="text-sm text-muted-foreground mt-5 italic">
                      For birthdays, holidays, or just because ♡
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
                  <p className="text-muted-foreground">Use the gift card code to book classes at any of our 6 studios.</p>
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

