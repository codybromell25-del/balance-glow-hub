import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const BookingMatClasses = () => {
  useEffect(() => {
    // Add Momence custom styles to match site background
    const style = document.createElement("style");
    style.innerHTML = `
      :root {
        --momenceColorBackground: #FAF3ED;
        --momenceColorPrimary: 163, 193, 173;
        --momenceColorBlack: 0, 0, 0;
      }
    `;
    document.head.appendChild(style);

    // Create and inject the Momence script
    const script = document.createElement('script');
    script.async = true;
    script.type = 'module';
    script.setAttribute('host_id', '62930');
    script.setAttribute('teacher_ids', '[]');
    script.setAttribute('location_ids', '[]');
    script.setAttribute('tag_ids', '[240428]');
    script.setAttribute('default_filter', 'show-all');
    script.setAttribute('locale', 'en');
    script.src = 'https://momence.com/plugin/host-schedule/host-schedule.js';
    
    const container = document.getElementById('ribbon-schedule');
    if (container) {
      container.appendChild(script);
    }

    return () => {
      // Cleanup on unmount
      style.remove();
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <SEO 
        title="Book Mat Classes | balance studios"
        description="Book your mat Pilates class at Balance Studios Kildare Town. Traditional Pilates on the mat with expert instructors."
        canonical="/booking/mat-classes"
        noindex={true}
      />
      <Navigation />
      <main className="pt-28">
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-heading italic text-foreground mb-4 text-center">
                Book Mat Classes
              </h1>
              <p className="text-lg text-muted-foreground text-center mb-8">
                Pilates on the mat — available at Kildare Town only
              </p>
              
              <div className="rounded-2xl p-4" style={{ minHeight: '600px' }}>
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

export default BookingMatClasses;
