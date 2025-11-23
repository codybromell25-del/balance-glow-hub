import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BookAll = () => {
  useEffect(() => {
    // Remove any existing Momence script
    const existingScript = document.querySelector(
      'script[src="https://momence.com/plugin/host-schedule/host-schedule.js"]'
    );
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
    script.setAttribute("default_filter", "show-all");
    script.setAttribute("locale", "en");

    if (container) {
      container.appendChild(script);
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
      <main className="pt-20">
        <section className="py-12 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 text-center">
                Book a Class
              </h1>
              <p className="text-lg text-foreground text-center mb-8">
                Choose your studio location and reserve your spot
              </p>
              
              <div className="bg-card rounded-xl border border-border p-4 shadow-lg min-h-[600px]">
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
