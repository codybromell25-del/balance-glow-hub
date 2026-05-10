import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";

const BookAll = () => {
  useEffect(() => {
    // Remove any existing Momence script
    const existingScript = document.querySelector('script[src="https://momence.com/plugin/host-schedule/host-schedule.js"]');
    if (existingScript && existingScript.parentNode) {
      existingScript.parentNode.removeChild(existingScript);
    }

    // Clear the container
    const container = document.getElementById("ribbon-schedule");
    if (container) {
      container.innerHTML = "";
    }

    // Load the Momence script for all locations
    const script = document.createElement("script");
    script.src = "https://momence.com/plugin/host-schedule/host-schedule.js";
    script.async = true;
    script.type = "module";
    script.setAttribute("host_id", "62930");
    script.setAttribute("teacher_ids", "[]");
    script.setAttribute("location_ids", "[]");
    script.setAttribute("tag_ids", "[]");
    script.setAttribute("lite_mode", "true");
    script.setAttribute("default_filter", "show-all");
    script.setAttribute("locale", "en");
    if (container && container.parentNode) {
      const parent = container.parentNode;
      if (container.nextSibling) {
        parent.insertBefore(script, container.nextSibling);
      } else {
        parent.appendChild(script);
      }
    } else {
      // Fallback: append to body
      document.body.appendChild(script);
    }
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <SEO 
        title="Book a Class | balance studios - Reformer Pilates"
        description="Book your Reformer Pilates class at any of our 5 studios. Choose from Classic, Sculpt, Challenge & Gentle Flow. View live schedules and secure your spot."
        canonical="/book-class"
      />
      <Navigation />
      <main className="pt-24">
        <PageHeader 
          title="Find Your Flow" 
          subtitle="Pick your favorite studio and let's get moving together!"
        />
        
        <section className="pt-8 pb-4">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <a
                href="/booking/limerick"
                className="group block rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]"
                style={{ background: 'linear-gradient(135deg, #b8d4c3 0%, #A3C1AD 40%, #8fb39c 100%)' }}
              >
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 sm:p-8">
                  <div className="text-center sm:text-left">
                    <p className="text-xs font-semibold uppercase tracking-widest text-black/70 mb-2">Now Open</p>
                    <h2 className="text-2xl sm:text-3xl font-heading font-bold text-black tracking-tight">
                      Book at balance Limerick
                    </h2>
                    <p className="text-black/80 mt-1 text-sm sm:text-base">
                      Reformer Pilates, Mat Pilates, Barre & Yoga — view the Limerick schedule
                    </p>
                  </div>
                  <span className="px-6 py-3 rounded-full bg-black text-white text-sm font-semibold uppercase tracking-wide whitespace-nowrap group-hover:bg-black/80 transition-colors">
                    View Schedule →
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="bg-card rounded-xl border border-border p-4 shadow-lg min-h-[600px] py-0 px-0 mx-[5px] my-[5px] font-thin text-xs font-sans text-justify">
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

export default BookAll;