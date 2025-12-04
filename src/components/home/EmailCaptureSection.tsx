import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const EmailCaptureSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission here
    console.log("Email submitted:", email);
  };

  return (
    <section className="py-10 md:py-16 bg-gradient-button">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-black text-lg md:text-xl font-heading font-bold mb-4 tracking-wide uppercase">
            THEY SAY ALL GOOD THINGS MUST COME TO AN END
          </p>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-black mb-8 leading-tight">
            BUT THIS IS JUST THE
            <br />
            BEGINNING
          </h2>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 bg-white/20 border-white/30 text-black placeholder:text-black/70 font-heading"
              />
              <Button
                type="submit"
                size="lg"
                className="h-12 px-8 bg-white text-black font-heading font-bold hover:bg-white/90 shadow-lg"
              >
                TELL ME MORE
              </Button>
            </div>
          </form>

          <p className="text-black/80 text-xs md:text-sm font-heading">
            By submitting this form, you consent to receive marketing emails from balance and agree to our{" "}
            <a href="/terms" className="underline hover:text-black">
              Terms & Conditions
            </a>{" "}
            and Privacy Policy
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmailCaptureSection;
