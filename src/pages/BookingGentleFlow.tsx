import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";

const BookingGentleFlow = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      :root {
        --momenceColorBackground: #FAF3ED;
        --momenceColorPrimary: 163, 193, 173;
        --momenceColorBlack: 0, 0, 0;
      }
    `;
    document.head.appendChild(style);

    const script = document.createElement('script');
    script.async = true;
    script.type = 'module';
    script.setAttribute('host_id', '62930');
    script.setAttribute('teacher_ids', '[]');
    script.setAttribute('location_ids', '[]');
    script.setAttribute('tag_ids', '[244179]');
    script.setAttribute('default_filter', 'show-all');
    script.setAttribute('locale', 'en');
    
    const container = document.getElementById('ribbon-schedule');
    if (container) {
      script.src = 'https://momence.com/plugin/host-schedule/host-schedule.js';
      container.appendChild(script);
    }

    return () => {
      style.remove();
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <SEO 
        title="Book Gentle Flow | balance studios"
        description="Book your Gentle Flow Pilates class at Balance Studios. Soft, supportive movements focusing on mobility and breath."
        canonical="/booking/gentle-flow"
        noindex={true}
      />
      <Navigation />
      <main className="pt-20">
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-heading italic text-foreground mb-4 text-center">
                Book Gentle Flow
              </h1>
              <p className="text-lg text-muted-foreground text-center mb-8">
                Pregnancy, postnatal, injury recovery, or those seeking a slower pace
              </p>
              
              <div className="rounded-2xl p-4" style={{ minHeight: '600px' }}>
                <div id="ribbon-schedule"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BookingGentleFlow;
