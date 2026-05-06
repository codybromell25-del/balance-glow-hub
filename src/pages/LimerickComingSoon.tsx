import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import LimerickLeadPopup from "@/components/LimerickLeadPopup";
import { Sparkles } from "lucide-react";
import balanceLogo from "@/assets/balance-removebg-preview.png";

const LimerickComingSoon = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Limerick Coming Soon | balance studios"
        description="balance Limerick is coming in 2026. Sign up to be the first to know about our launch and exclusive intro offers."
        canonical="/limerick-coming-soon"
      />
      <Navigation />
      <main className="pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div
              className="max-w-3xl mx-auto rounded-3xl shadow-xl p-10 md:p-16 text-center relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #b8d4c3 0%, #A3C1AD 40%, #8fb39c 100%)",
              }}
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/30 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/20 rounded-full blur-3xl" />

              <div className="relative z-10 flex flex-col items-center">
                <img
                  src={balanceLogo}
                  alt="balance logo"
                  className="h-24 w-auto mb-6 opacity-95"
                />
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4 text-black/70" />
                  <p className="text-xs text-black/70 font-semibold uppercase tracking-widest">
                    Coming Soon
                  </p>
                  <Sparkles className="w-4 h-4 text-black/70" />
                </div>
                <h1 className="font-heading text-5xl md:text-6xl font-bold text-black tracking-tight mb-4">
                  Limerick
                </h1>
                <p className="text-black/80 text-lg max-w-xl">
                  Something special is coming to Henry Street in 2026. Sign up to
                  be the first to know when we launch and unlock exclusive intro
                  offers.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <LimerickLeadPopup />
    </div>
  );
};

export default LimerickComingSoon;
