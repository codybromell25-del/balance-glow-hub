import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Users, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";
import studioInstructorHelping from "@/assets/studio-instructor-helping.jpg";
import studioReformersRow from "@/assets/studio-reformers-row.jpg";

// EmailJS configuration (same as Footer contact form)
const EMAILJS_SERVICE_ID = "service_ap09r2n";
const EMAILJS_TEMPLATE_ID = "template_ixon7mo";
const EMAILJS_PUBLIC_KEY = "zvyWn7c52ArJQNp49";

const disciplines = ["Reformer", "Mat Pilates", "Barre", "Yoga"];

const pillars = [
  {
    icon: GraduationCap,
    title: "Ongoing training",
    text: "Regular training and development to keep your teaching sharp and current.",
  },
  {
    icon: Users,
    title: "A strong team",
    text: "You're never teaching alone — you're part of a team that backs each other.",
  },
  {
    icon: TrendingUp,
    title: "Room to grow",
    text: "Real opportunities to grow within the business, not just a class slot.",
  },
  {
    icon: Award,
    title: "High standards",
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
      <main className="pt-24">
        <PageHeader
          title="careers"
          subtitle="Join an established and growing studio brand, where high standards are matched by real support."
        />

        {/* Intro */}
        <section className="py-10 md:py-16 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white p-4 md:p-8 lg:p-12 rounded-lg border-2 border-primary/40 animate-fade-in">
                <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
                  <div className="order-2 md:order-1">
                    <img
                      src={studioInstructorHelping}
                      alt="Instructor guiding a client at balance studios"
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="order-1 md:order-2 space-y-6">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      At balance, our instructors are part of a strong team. You'll have access
                      to ongoing training, development and opportunities to grow within the
                      business — with the support to build confidence, develop your teaching and
                      progress over time.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      We're proud of the standard we've created, and selective about the people
                      who become part of it.
                    </p>
                    <div className="pt-4 border-t border-primary/20">
                      <p className="text-foreground font-medium text-lg italic">
                        We're always interested in exceptional instructors who want to grow with us.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What you can expect */}
        <section className="py-10 md:py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-heading font-medium text-foreground mb-4 text-center">
                What you can expect<span className="text-primary">.</span>
              </h2>
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-10 md:mb-12">
                Everything you need to teach well, and keep getting better.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {pillars.map((pillar, index) => (
                  <div
                    key={pillar.title}
                    className="bg-white p-6 rounded-lg border-2 border-primary/40 text-center animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <pillar.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-heading font-medium text-foreground mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{pillar.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Disciplines */}
        <section className="py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <img
                src={studioReformersRow}
                alt="A row of reformers in a balance studio"
                className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg mb-8 md:mb-10"
              />
              <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground mb-4">
                Who we're looking for<span className="text-primary">.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
                We're always interested in exceptional instructors across:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {disciplines.map((discipline) => (
                  <span
                    key={discipline}
                    className="px-5 py-2 rounded-full border border-primary/50 bg-white text-foreground font-heading italic text-lg"
                  >
                    {discipline}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Application form */}
        <section className="py-10 md:py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-medium text-foreground mb-4 text-center">
                Apply<span className="text-primary">.</span>
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-10">
                Tell us a little about yourself and your teaching experience.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 md:p-10 rounded-lg border-2 border-primary/40">
                <Input
                  type="text"
                  name="name"
                  placeholder="NAME"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  className="bg-transparent border-border placeholder:text-muted-foreground/60 placeholder:text-xs placeholder:tracking-wider"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-border placeholder:text-muted-foreground/60 placeholder:text-xs placeholder:tracking-wider"
                />
                <select
                  name="discipline"
                  value={formData.discipline}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border border-border rounded-md px-3 py-2 text-sm text-foreground"
                >
                  <option value="" disabled>
                    WHAT DO YOU TEACH?
                  </option>
                  {disciplines.map((discipline) => (
                    <option key={discipline} value={discipline}>
                      {discipline}
                    </option>
                  ))}
                  <option value="Multiple disciplines">More than one</option>
                </select>
                <Textarea
                  name="message"
                  placeholder="YOUR EXPERIENCE & WHY BALANCE"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  maxLength={2000}
                  className="bg-transparent border-border placeholder:text-muted-foreground/60 placeholder:text-xs placeholder:tracking-wider resize-none"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-12 bg-[#A3C1AD] hover:bg-[#8FB09A] text-white"
                >
                  {isSubmitting ? "SENDING..." : "SUBMIT APPLICATION"}
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Anything else */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground mb-6">
              Questions first? We'd love to hear from you.
            </p>
            <Button asChild size="lg" className="rounded-full px-8 py-6 font-heading font-semibold border-0 text-black" style={{ background: "linear-gradient(180deg, #b8d4c3 0%, #A3C1AD 40%, #8fb39c 100%)" }}>
              <Link to="/">
                Back to home
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
