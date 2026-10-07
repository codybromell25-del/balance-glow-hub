import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import studioInstructorHelping from "@/assets/studio-instructor-helping.jpg";
import studioInteriorHero from "@/assets/balance-studio-interior-hero.jpg";
import limerickReformerInstructor from "@/assets/limerick-reformer-instructor.jpg";

// EmailJS configuration (same as Footer contact form)
const EMAILJS_SERVICE_ID = "service_f6phwmd";
const EMAILJS_TEMPLATE_ID = "template_ixon7mo";
const EMAILJS_PUBLIC_KEY = "zvyWn7c52ArJQNp49";

const disciplines = ["Reformer", "Mat Pilates", "Barre", "Yoga"];

const pillars = [
  {
    number: "01",
    title: "ongoing training",
    text: "Regular training and development to keep your teaching sharp and current.",
  },
  {
    number: "02",
    title: "a strong team",
    text: "You're never teaching alone — you're part of a team that backs each other.",
  },
  {
    number: "03",
    title: "room to grow",
    text: "Real opportunities to grow within the business, not just a class slot.",
  },
  {
    number: "04",
    title: "high standards",
    text: "We're proud of what we've built, and we protect it with every hire.",
  },
];

const Careers = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    discipline: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const messageBody = [
      `Discipline(s) of interest: ${formData.discipline || "Not specified"}`,
      "",
      formData.message,
    ].join("\n");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          title: "Careers Application",
          message: messageBody,
          time: new Date().toLocaleString("en-IE", {
            dateStyle: "medium",
            timeStyle: "short",
          }),
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Application sent!",
        description: "Thanks for your interest — we'll be in touch soon.",
      });

      setFormData({ name: "", email: "", discipline: "", message: "" });
    } catch (error: unknown) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or email info@balancestudios.ie.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Careers | balance studios - Teach With Us"
        description="Join an established and growing studio brand. We're always interested in exceptional Reformer, Mat Pilates, Barre and Yoga instructors who want to grow with us."
        canonical="/careers"
      />
      <Navigation />
      <main className="pt-32 pb-24 md:pt-40">
        {/* Header */}
        <header className="mb-24 md:mb-40">
          <div className="relative h-[55vh] md:h-[70vh] overflow-hidden">
            <img
              src={studioInteriorHero}
              alt="Inside a balance studios studio"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/25"></div>
            <h1 className="absolute inset-0 flex items-center justify-center text-7xl sm:text-8xl md:text-[10rem] font-heading italic tracking-tight text-background leading-none">
              careers<span className="text-sage">.</span>
            </h1>
          </div>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mt-16 md:mt-24 flex flex-col md:flex-row gap-10 md:gap-16 items-start">
                <div className="w-full md:w-2/5 animate-fade-in">
                  <img
                    src={studioInstructorHelping}
                    alt="Instructor guiding a client at balance studios"
                    className="w-full aspect-[4/5] object-cover rounded-3xl"
                  />
                </div>
                <div className="w-full md:w-3/5 animate-fade-in">
                  <p className="font-heading italic text-2xl md:text-3xl leading-snug text-foreground">
                    Join an established and growing studio brand where high
                    standards are matched by real support.
                  </p>
                  <p className="text-lg md:text-xl leading-relaxed font-light text-foreground/80 mt-8">
                    At balance, our instructors are part of a strong team. You'll have access
                    to ongoing training, development and opportunities to grow within the
                    business, with the support to build confidence, develop your teaching and
                    progress over time.
                  </p>
                  <p className="text-lg md:text-xl leading-relaxed font-light text-foreground/80 mt-8">
                    We're proud of the standard we've created and selective about the people
                    who become part of it.
                  </p>
                  <p className="font-heading italic text-lg md:text-xl text-foreground mt-10">
                    We're always interested in exceptional Reformer, Mat Pilates, Barre and
                    Yoga instructors who want to grow with us.
                  </p>
                  <div className="mt-12 w-24 h-px bg-sage"></div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* What you can expect */}
            <section className="mb-32 md:mb-48">
              <div className="flex items-center gap-6 mb-16 md:mb-24">
                <h2 className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-sage font-semibold">
                  What you can expect
                </h2>
                <div className="flex-1 h-px bg-sage/30"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 md:gap-x-24 gap-y-16 md:gap-y-28">
                {pillars.map((pillar) => (
                  <div key={pillar.number} className="relative">
                    <span className="absolute -top-8 md:-top-12 -left-3 text-6xl md:text-7xl font-heading italic text-foreground/10 pointer-events-none select-none">
                      {pillar.number}
                    </span>
                    <h3 className="font-heading italic text-2xl md:text-3xl text-foreground mb-4 md:mb-6">
                      {pillar.title}
                    </h3>
                    <p className="text-base leading-loose text-foreground/80 font-light max-w-md">
                      {pillar.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Who we're looking for */}
            <section className="mb-16 md:mb-20">
              <div className="flex flex-col items-center">
                <img
                  src={limerickReformerInstructor}
                  alt="An instructor guiding a client through an exercise on the reformer at balance Limerick"
                  className="w-full aspect-[3/2] object-cover rounded-3xl"
                />
                <div className="w-full max-w-5xl mt-12 md:mt-16 bg-background p-10 md:p-20 lg:p-24 border border-sage/20 shadow-sm">
                  <h3 className="font-heading italic text-4xl md:text-5xl text-foreground mb-10 text-center">
                    who we're looking for<span className="text-sage">.</span>
                  </h3>
                  <p className="text-base md:text-lg text-foreground/70 text-center mb-12 max-w-lg mx-auto">
                    We're always interested in exceptional instructors across:
                  </p>
                  <div className="flex flex-wrap justify-center gap-5 md:gap-6">
                    {disciplines.map((discipline) => (
                      <span
                        key={discipline}
                        className="px-10 py-4 md:px-12 md:py-5 rounded-full border border-foreground/10 text-xs md:text-sm uppercase tracking-[0.25em] text-foreground hover:bg-sage hover:border-sage transition-all cursor-default"
                      >
                        {discipline}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Apply */}
            <section className="max-w-xl mx-auto pt-2 md:pt-6">
              <div className="text-center mb-10 md:mb-14">
                <h2 className="font-heading italic text-4xl md:text-5xl text-foreground mb-6">
                  apply<span className="text-sage">.</span>
                </h2>
                <p className="text-sm md:text-base text-foreground/70">
                  Tell us a little about yourself and your teaching experience.
                </p>
                <div className="w-12 h-px bg-sage mx-auto mt-6"></div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-10 md:space-y-14">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                  <div className="relative">
                    <label htmlFor="careers-name" className="text-[9px] uppercase tracking-[0.3em] text-foreground/40 mb-2 block">
                      Name
                    </label>
                    <Input
                      id="careers-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      maxLength={100}
                      className="w-full bg-transparent border-0 border-b border-foreground/30 rounded-none px-0 py-2 h-auto focus-visible:ring-0 focus-visible:border-sage transition-colors font-light"
                    />
                  </div>
                  <div className="relative">
                    <label htmlFor="careers-email" className="text-[9px] uppercase tracking-[0.3em] text-foreground/40 mb-2 block">
                      Email address
                    </label>
                    <Input
                      id="careers-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-0 border-b border-foreground/30 rounded-none px-0 py-2 h-auto focus-visible:ring-0 focus-visible:border-sage transition-colors font-light"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="careers-discipline" className="text-[9px] uppercase tracking-[0.3em] text-foreground/40 mb-2 block">
                    What do you teach?
                  </label>
                  <select
                    id="careers-discipline"
                    name="discipline"
                    value={formData.discipline}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-0 border-b border-foreground/30 rounded-none px-0 py-2 text-base font-light text-foreground focus:outline-none focus:border-sage transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    {disciplines.map((discipline) => (
                      <option key={discipline} value={discipline}>
                        {discipline}
                      </option>
                    ))}
                    <option value="Multiple disciplines">More than one</option>
                  </select>
                </div>

                <div className="relative">
                  <label htmlFor="careers-message" className="text-[9px] uppercase tracking-[0.3em] text-foreground/40 mb-2 block">
                    Your experience & why balance
                  </label>
                  <Textarea
                    id="careers-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    maxLength={2000}
                    className="w-full bg-transparent border-0 border-b border-foreground/30 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-sage transition-colors font-light resize-none"
                  />
                </div>

                <div className="flex justify-center pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative overflow-hidden bg-foreground text-background text-[10px] uppercase tracking-[0.4em] px-16 py-5 rounded-none border-0 hover:bg-sage hover:text-foreground transition-colors duration-300"
                  >
                    {isSubmitting ? "Sending..." : "Submit Application"}
                  </Button>
                </div>
              </form>
            </section>

            {/* Anything else */}
            <section className="pt-8 md:pt-16 text-center">
              <p className="text-foreground/70 font-light">
                Questions first? We'd love to hear from you —{" "}
                <a href="mailto:info@balancestudios.ie" className="underline underline-offset-4 hover:text-sage transition-colors">
                  info@balancestudios.ie
                </a>
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer showContact={false} />
    </div>
  );
};

export default Careers;
