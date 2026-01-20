import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const BookingBlessington = () => {
  useEffect(() => {
    // Create and inject the Momence script
    const script = document.createElement('script');
    script.async = true;
    script.type = 'module';
    script.setAttribute('host_id', '62930');
    script.setAttribute('teacher_ids', '[]');
    script.setAttribute('location_ids', '[117424]');
    script.setAttribute('tag_ids', '[]');
    script.setAttribute('default_filter', 'show-all');
    script.setAttribute('locale', 'en');
    script.src = 'https://momence.com/plugin/host-schedule/host-schedule.js';
    
    const container = document.getElementById('ribbon-schedule');
    if (container) {
      container.appendChild(script);
    }

    return () => {
      // Cleanup script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <SEO 
        title="Book Blessington Studio | balance studios - Reformer Pilates"
        description="Book your Reformer Pilates class at balance Blessington. Located on The Green, Main Street, Blessington, Co. Wicklow. Classes available 7 days a week."
        canonical="/booking/blessington"
      />
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
              
              <div className="bg-card rounded-xl border border-border overflow-hidden shadow-lg p-4" style={{ minHeight: '600px' }}>
                <div id="ribbon-schedule"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BookingBlessington;
