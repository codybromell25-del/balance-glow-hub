import { Link } from "react-router-dom";
import { Instagram, Facebook, Link2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { openCookieSettings } from "@/lib/trackingConsent";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import balanceLogo from "@/assets/balance-removebg-preview.png";
import studioInterior from "@/assets/interior-5.jpg.asset.json";

// EmailJS configuration
const EMAILJS_SERVICE_ID = "service_f6phwmd";
const EMAILJS_TEMPLATE_ID = "template_ixon7mo";
const EMAILJS_PUBLIC_KEY = "zvyWn7c52ArJQNp49";

const Footer = ({ showContact = true }: { showContact?: boolean }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          title: "Website Contact",
          message: formData.message,
          time: new Date().toLocaleString('en-IE', { 
            dateStyle: 'medium', 
            timeStyle: 'short' 
          }),
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as we can.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error: unknown) {
      console.error("EmailJS Error:", error);
      let errorMessage = "Unknown error";
      if (error && typeof error === 'object') {
        if ('text' in error) {
          errorMessage = String((error as { text: string }).text);
        } else if ('message' in error) {
          errorMessage = String((error as { message: string }).message);
        } else {
          errorMessage = JSON.stringify(error);
        }
      }
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const locations = [
    { name: "Clane", path: "/studio/clane" },
    { name: "Kildare Town", path: "/studio/kildare" },
    { name: "Blessington", path: "/studio/blessington" },
    { name: "Enfield", path: "/studio/enfield" },
    { name: "Bray", path: "/studio/bray" },
    { name: "Limerick", path: "/studio/limerick" },
  ];

  return (
    <footer className="bg-secondary/20 border-t border-border">
      {/* FAQ Link Section */}
      <div className="bg-[#A3C1AD]/30 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-foreground">
            Have questions? We may have your answer in our{" "}
            <Link to="/faq" className="underline hover:text-primary transition-colors font-medium">
              FAQ section — Take a quick look here
            </Link>
            !
          </p>
        </div>
      </div>

        {/* Main Contact Section */}
        {showContact && (
        <div className="relative overflow-hidden">
          <div
            aria-hidden
            className="absolute -inset-6 bg-cover bg-center blur-[2px] transform-gpu will-change-transform"
            style={{ backgroundImage: `url(${studioInterior.url})` }}
          />
          <div aria-hidden className="absolute inset-0 bg-background/[0.78]" />
          <div
            aria-hidden
            className="absolute inset-0 hidden lg:block bg-gradient-to-r from-background via-background/45 to-transparent"
          />
        <div className="relative container mx-auto px-4 pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground tracking-wide">
            Contact us via the form
            <br />
            below & we'll get back to
            <br />
            you as soon as we can.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <p className="text-xs font-semibold tracking-wider text-foreground mb-1">EMAIL</p>
              <a 
                href="mailto:info@balancestudios.ie" 
                className="text-foreground font-medium hover:text-sage-deep transition-colors"
              >
                info@balancestudios.ie
              </a>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-wider text-foreground mb-1">ADDRESS</p>
              <Link 
                to="/our-studios" 
                className="text-foreground font-medium hover:text-sage-deep transition-colors"
              >
                View our studio locations
              </Link>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-wider text-foreground mb-2">SOCIAL</p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/balancereformer/?hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://www.facebook.com/BalanceReformer/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://my.linkpod.site/balancestudios" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                  aria-label="Linktree"
                >
                  <Link2 size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              name="name"
              placeholder="NAME"
              aria-label="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-background/70 border-border placeholder:text-muted-foreground placeholder:text-xs placeholder:tracking-wider"
            />
            <Input
              type="email"
              name="email"
              placeholder="EMAIL"
              aria-label="Your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-background/70 border-border placeholder:text-muted-foreground placeholder:text-xs placeholder:tracking-wider"
            />
            <Textarea
              aria-label="Your message"
              name="message"
              placeholder="MESSAGE"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="bg-background/70 border-border placeholder:text-muted-foreground placeholder:text-xs placeholder:tracking-wider resize-none"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-12 bg-[#A3C1AD] hover:bg-[#8FB09A] text-foreground"
            >
              {isSubmitting ? "SENDING..." : "SUBMIT"}
            </Button>
          </form>
        </div>
      </div>
        </div>
        )}

      {/* Bottom Links Section */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <p className="text-sm text-muted-foreground">
                Reformer Pilates across Kildare, Wicklow, Meath & Limerick.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold text-sm text-foreground mb-4 uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/classes" className="text-muted-foreground hover:text-primary transition-colors">Classes</Link></li>
                <li><Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
                <li><Link to="/book-class" className="text-muted-foreground hover:text-primary transition-colors">Book Now</Link></li>
                <li><Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
                <li><Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
                <li>
                  <a 
                    href="https://apps.apple.com/ie/app/balance-reformer-pilates/id6756276683" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Download App (iOS)
                  </a>
                </li>
                <li>
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.ribbon.balance&pcampaignid=web_share" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Download App (Android)
                  </a>
                </li>
              </ul>
            </div>

            {/* Studios */}
            <div>
              <h4 className="font-heading font-semibold text-sm text-foreground mb-4 uppercase tracking-wider">Our Studios</h4>
              <ul className="space-y-2 text-sm">
                {locations.map((location) => (
                  <li key={location.name}>
                    <a href={location.path} className="text-muted-foreground hover:text-primary transition-colors">
                      <span className="sr-only">Reformer Pilates </span>{location.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-heading font-semibold text-sm text-foreground mb-4 uppercase tracking-wider">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</Link></li>
                <li><Link to="/cookies" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</Link></li>
                <li><Button variant="quiet" size="sm" onClick={openCookieSettings} className="font-body tracking-normal">Cookie settings</Button></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
