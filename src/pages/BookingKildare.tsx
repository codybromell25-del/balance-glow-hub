import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BookingKildare = () => {

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="py-12 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 text-center">
                Book Kildare Town Studio
              </h1>
              <p className="text-lg text-foreground text-center mb-8">
                Reserve your spot at our Kildare Town location
              </p>
              
              <div className="bg-card rounded-xl border border-border overflow-hidden shadow-lg" style={{ height: 'calc(100vh - 200px)', minHeight: '600px' }}>
                <iframe 
                  src="https://momence.com/m/62930?location_id=117423"
                  className="w-full h-full border-0"
                  title="Book Kildare Town Studio"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BookingKildare;
