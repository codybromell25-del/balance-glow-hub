import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, MapPin, Facebook, Link2 } from "lucide-react";
import balanceLogo from "@/assets/balance-logo-new.png";

const Footer = () => {
  const locations = [
    { name: "Clane", address: "Clane, Co. Kildare" },
    { name: "Kildare Town", address: "Kildare Town, Co. Kildare" },
    { name: "Blessington", address: "Blessington, Co. Wicklow" },
    { name: "Enfield", address: "Enfield, Co. Meath" },
    { name: "Bray", address: "Bray, Co. Wicklow" },
  ];

  return (
    <footer className="bg-gradient-to-t from-secondary via-secondary/40 to-secondary/10 border-t border-border">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <img src={balanceLogo} alt="balance reformer pilates" className="h-32 w-auto mb-4" />
            <p className="text-black mb-4">
              Reformer Pilates across Kildare, Wicklow & Limerick.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/balancereformer/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/BalanceReformer/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://my.linkpod.site/balancestudios" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black hover:text-primary transition-colors"
                title="Linktree"
              >
                <Link2 size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-black mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-black hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/classes" className="text-black hover:text-primary transition-colors">Classes</Link></li>
              <li><Link to="/pricing" className="text-black hover:text-primary transition-colors">Pricing</Link></li>
              <li><a href="/book-class" className="text-black hover:text-primary transition-colors">Book Now</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-black mb-4">Our Studios</h4>
            <ul className="space-y-2">
              {locations.map((location) => (
                <li key={location.name}>
                  <a href="/our-studios" className="text-black hover:text-primary transition-colors text-sm">
                    {location.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-black mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-black">
                <Mail size={16} className="mr-2" />
                <a href="mailto:info@balancestudios.ie" className="hover:text-primary transition-colors">
                  info@balancestudios.ie
                </a>
              </li>
              <li className="flex items-center text-black">
                <Phone size={16} className="mr-2" />
                <a href="tel:+353" className="hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
              <li className="flex items-start text-black">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                <Link to="/book-class" className="hover:text-primary transition-colors">
                  View our locations
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-black">
          <p>&copy; {new Date().getFullYear()} balance studios. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-black hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-black hover:text-primary transition-colors">Terms & Conditions</Link>
            <Link to="/cookies" className="text-black hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
