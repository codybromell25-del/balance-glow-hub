import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const tasterLinks = [
  { label: "Sun, May 31, 2026 · 11:00 AM", url: "https://momence.com/balance/Reformer---Taster-Class/136774490" },
  { label: "Book Taster Class — Option 2", url: "https://momence.com/balance/Reformer---Taster-Class/136249137" },
  { label: "Book Taster Class — Option 3", url: "https://momence.com/balance/Reformer---Taster-Class/136248981" },
  { label: "Book Taster Class — Option 4", url: "https://momence.com/balance/Reformer---Taster-Class/136774467" },
];

const TasterClasses = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Taster Classes | balance studios"
        description="New to Reformer Pilates? Our Taster Classes gently guide first-time and nervous clients through their first Reformer experience in a calm, supportive environment."
        canonical="/taster-classes"
      />
      <Navigation />
      <main className="pt-28">
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-heading italic text-foreground mb-6">
                Taster Classes
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Designed especially for nervous or first-time clients, our Taster Classes gently
                guide you through your first Reformer experience in a calm and supportive
                environment. You'll learn how the reformer works, what to expect in class, and
                build confidence at your own pace, with plenty of opportunity to ask questions
                along the way.
              </p>
            </div>

            <div className="max-w-2xl mx-auto mt-12 grid gap-4">
              {tasterLinks.map((link) => (
                <Button
                  key={link.url}
                  asChild
                  size="lg"
                  className="w-full text-base py-6 text-black border-0 shadow-lg hover:brightness-105"
                  style={{ background: 'linear-gradient(180deg, #b8d4c3 0%, #A3C1AD 40%, #8fb39c 100%)' }}
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <Calendar className="w-5 h-5 mr-2" />
                    {link.label}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TasterClasses;
