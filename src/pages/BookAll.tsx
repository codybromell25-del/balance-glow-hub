import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

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
      <Navigation />
      <main className="pt-16">
        <PageHeader 
          title="Find Your Flow" 
          subtitle="Pick your favorite studio and let's get moving together!"
        />
        
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