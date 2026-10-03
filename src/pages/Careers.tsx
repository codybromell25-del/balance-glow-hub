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
import instructorLaughing from "@/assets/instructor-laughing.jpg";

// EmailJS configuration (same as Footer contact form)
const EMAILJS_SERVICE_ID = "service_ap09r2n";
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
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            {/* Header */}
            <header className="mb-24 md:mb-40">
              <h1 className="text-7xl sm:text-8xl md:text-[10rem] font-heading italic tracking-tight text-foreground leading-none">
                careers<span className="text-sage">.</span>
              </h1>
              <div className="mt-12 md:mt-16 flex flex-col md:flex-row gap-10 md:gap-16 items-start">
                <div className="w-full md:w-3/5 animate-fade-in">
                  <img
                    src={studioInstructorHelping}
                    alt="Instructor guiding a client at balance studios"
                    className="w-full aspect-[4/5] object-cover"
                  />
                </div>
                <div className="w-full md:w-2/5 md:pt-24 animate-fade-in">
                  <p className="text-xl md:text-2xl leading-relaxed font-light text-foreground">
                    At balance, our instructors are part of a strong team. You'll have access
                    to ongoing training, development and opportunities to grow within the
                    business — with the support to build confidence, develop your teaching and
                    progress over time.
                  </p>
                  <p className="text-lg md:text-xl leading-relaxed font-light text-foreground/80 mt-8">
                    We're proud of the standard we've created, and selective about the people
                    who become part of it.
                  </p>
                  <p className="font-heading italic text-lg text-foreground mt-10">
                    We're always interested in exceptional instructors who want to grow with us.
                  </p>
                  <div className="mt-12 w-24 h-px bg-sage"></div>
                </div>
              </div>
            </header>

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
            <section className="mb-32 md:mb-48">
              <div className="relative flex flex-col items-center">
                <img
                  src={studioReformersRow}
                  alt="A row of reformers in a balance studio"
                  className="w-full aspect-[2/1] object-cover"
                />
                <div className="w-full max-w-2xl -mt-16 md:-mt-24 relative z-10 bg-background p-8 md:p-16 border border-sage/20 shadow-sm">
                  <h3 className="font-heading italic text-2xl md:text-3xl text-foreground mb-8 text-center">
                    who we're looking for<span className="text-sage">.</span>
                  </h3>
                  <p className="text-sm text-foreground/70 text-center mb-8 max-w-md mx-auto">
                    We're always interested in exceptional instructors across:
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    {disciplines.map((discipline) => (
                      <span
                        key={discipline}
                        className="px-6 py-2.5 rounded-full border border-foreground/10 text-[10px] uppercase tracking-[0.2em] text-foreground hover:bg-sage hover:border-sage transition-all cursor-default"
                      >
                        {discipline}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Apply */}
            <section className="max-w-xl mx-auto py-8 md:py-16">
              <div className="text-center mb-14 md:mb-20">
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
      <Footer />
    </div>
  );
};

export default Careers;
