import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BookingBlessington = () => {
  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector('script[src="https://momence.com/plugin/host-schedule/host-schedule.js"]');
    if (existingScript) {
      return;
    }

    // Load the Momence script for Blessington
    const script = document.createElement('script');
    script.src = 'https://momence.com/plugin/host-schedule/host-schedule.js';
    script.async = true;
    script.type = 'module';
    script.setAttribute('host_id', '62930');
    script.setAttribute('teacher_ids', '[]');
    script.setAttribute('location_ids', '[117424]');
    script.setAttribute('tag_ids', '[]');
    script.setAttribute('default_filter', 'show-all');
    script.setAttribute('locale', 'en');
    
    document.body.appendChild(script);
    
    return () => {
      if (script.parentNode) {
        document.body.removeChild(script);
      }
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
                Book Blessington Studio
              </h1>
              <p className="text-lg text-foreground text-center mb-8">
                Reserve your spot at our Blessington location
              </p>
              
              <div className="bg-card rounded-xl border border-border p-4 shadow-lg min-h-[600px] mb-16">
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

export default BookingBlessington;
