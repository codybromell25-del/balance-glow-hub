import { CalendarCheck, Smartphone, Instagram, Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import heroAsset from "@/assets/limerick-interior-hero.jpg.asset.json";

const ThankYou = () => {
  // Momence's redirect is not verified payment evidence. Do not emit Purchase here.
  const steps = [
    { icon: CalendarCheck, title: "Check your inbox", text: "Your confirmation and receipt are on their way by email." },
    { icon: Smartphone, title: "Book in the app", text: "Grab the balance app to book and manage your classes on the go." },
    { icon: Check, title: "Arrive 10 mins early", text: "Bring grip socks and water — we'll take care of the rest." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO title="Thank you | balance studios" description="Thank you for your purchase." canonical="/thank-you" noindex />
      <Navigation />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <img src={heroAsset.url} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover object-[80%_center] md:object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/70" />
          <div className="relative container mx-auto px-4 py-24 md:py-36 text-center animate-fade-in">
            <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-sage text-foreground shadow-lg">
              <Check size={30} strokeWidth={2} />
            </div>
            <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl text-white leading-[0.9] tracking-tight [text-shadow:0_2px_24px_rgba(0,0,0,0.5)]">
              thank you<span className="text-sage">.</span>
            </h1>
            <p className="mt-6 font-heading italic text-2xl md:text-4xl text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.6)]">
              You're all set — welcome to <span className="text-sage">balance</span>.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-center font-heading italic text-3xl md:text-5xl mb-12">what happens next</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {steps.map(({ icon: Icon, title, text }, i) => (
                <div key={title} className="rounded-3xl border border-border bg-background p-8 text-center">
                  <div className="mx-auto mb-5 grid h-12 w-12 place-items-center rounded-full bg-sage/30">
                    <Icon size={22} strokeWidth={1.6} />
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Step {i + 1}</p>
                  <h3 className="font-heading text-2xl mb-2">{title}</h3>
                  <p className="text-foreground/80">{text}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-5">
              <a href="/schedule" className="rounded-full bg-sage px-8 py-4 text-center font-heading text-foreground hover:bg-sage/80 transition-colors">
                View the timetable
              </a>
              <a href="https://www.instagram.com/balancereformer/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 px-8 py-4 font-heading hover:border-sage transition-colors">
                <Instagram size={18} /> Follow @balancereformer
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer showContact={false} />
    </div>
  );
};

export default ThankYou;
