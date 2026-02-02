import { Link } from "react-router-dom";
import { Instagram, Facebook, Link2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import balanceLogo from "@/assets/balance-removebg-preview.png";

// EmailJS configuration
const EMAILJS_SERVICE_ID = "service_ap09r2n";
const EMAILJS_TEMPLATE_ID = "template_ixon7mo";
const EMAILJS_PUBLIC_KEY = "zvyWn7c52ArJQNp49";

const Footer = () => {
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
    { name: "Clane", path: "/our-studios" },
    { name: "Kildare Town", path: "/our-studios" },
    { name: "Blessington", path: "/our-studios" },
    { name: "Enfield", path: "/our-studios" },
    { name: "Bray", path: "/our-studios" },
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
      <div className="container mx-auto px-4 py-12 md:py-16">
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
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                info@balancestudios.ie
              </a>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-wider text-foreground mb-1">ADDRESS</p>
              <Link 
                to="/our-studios" 
                className="text-muted-foreground hover:text-primary transition-colors"
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
              value={formData.name}
              onChange={handleChange}
              required
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
            <Textarea
              name="message"
              placeholder="MESSAGE"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="bg-transparent border-border placeholder:text-muted-foreground/60 placeholder:text-xs placeholder:tracking-wider resize-none"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-12 bg-[#A3C1AD] hover:bg-[#8FB09A] text-white"
            >
              {isSubmitting ? "SENDING..." : "SUBMIT"}
            </Button>
          </form>
        </div>
      </div>

      {/* Bottom Links Section */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <img src={balanceLogo} alt="balance reformer pilates" className="h-24 w-auto mb-4" />
              <p className="text-sm text-muted-foreground">
                Reformer Pilates across Kildare, Wicklow & Meath.
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
                    <Link to={location.path} className="text-muted-foreground hover:text-primary transition-colors">
                      {location.name}
                    </Link>
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
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} balance studios. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
