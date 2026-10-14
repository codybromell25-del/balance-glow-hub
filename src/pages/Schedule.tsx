import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

// Momence studio location ids
const LOCATION_IDS = [117422, 117426, 117423, 117424, 117425, 127771];

const Schedule = () => {
  useEffect(() => {
    // Match the widget to the site palette
    const style = document.createElement("style");
    style.innerHTML = `
      :root {
        --momenceColorBackground: #FAF3ED;
        --momenceColorPrimary: 163, 193, 173;
        --momenceColorBlack: 0, 0, 0;
      }
      [data-momence-schedule] {
        background-color: #FAF3ED !important;
      }
    `;
    document.head.appendChild(style);

    // Load the Momence schedule widget
    const script = document.createElement("script");
    script.async = true;
    script.type = "module";
    script.src = "https://momence.com/plugin/host-schedule/host-schedule.js";
    script.setAttribute("host_id", "62930");
    script.setAttribute("teacher_ids", "[]");
    script.setAttribute("location_ids", `[${LOCATION_IDS.join(",")}]`);
    script.setAttribute("tag_ids", "[]");
    script.setAttribute("lite_mode", "true");
    script.setAttribute("default_filter", "show-all");
    script.setAttribute("locale", "en");

    const container = document.getElementById("ribbon-schedule");
    if (container) {
      container.appendChild(script);
    }

    return () => {
      style.remove();
      script.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Class Schedule | balance studios" description="View live class schedules across all 6 balance studios. Book Reformer Pilates in Clane, Kildare, Blessington, Enfield, Bray & Limerick." canonical="/schedule" />
      <Navigation />
      <main>
        <section className="py-12 md:py-16 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-heading italic text-foreground mb-4 text-center">
                Class Schedule
              </h1>
              <p className="text-lg text-muted-foreground text-center mb-8">
                Book your classes across all our studio locations
              </p>

              <div id="ribbon-schedule" className="rounded-2xl p-4 animate-fade-in"></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Schedule;
