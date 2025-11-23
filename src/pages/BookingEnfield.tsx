import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BookingEnfield = () => {
  useEffect(() => {
    // Load the Momence script for Enfield
    const script = document.createElement('script');
    script.src = 'https://momence.com/plugin/host-schedule/host-schedule.js';
    script.async = true;
    script.type = 'module';
    script.setAttribute('host_id', '62930');
    script.setAttribute('teacher_ids', '[]');
    script.setAttribute('location_ids', '[117425]');
    script.setAttribute('tag_ids', '[]');
    script.setAttribute('default_filter', 'show-all');
    script.setAttribute('locale', 'en');
    
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="py-12 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 text-center">
                Book Enfield Studio
              </h1>
              <p className="text-lg text-foreground text-center mb-8">
                Reserve your spot at our Enfield location
              </p>
              
              <div className="bg-card rounded-xl border border-border p-4 shadow-lg">
                <div id="ribbon-schedule"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BookingEnfield;
