import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
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
    <footer className="bg-secondary/30 border-t border-border mt-12 md:mt-24">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <img src={balanceLogo} alt="Balance Reformer Pilates" className="h-16 w-auto mb-4" />
            <p className="text-black mb-4">
              Reformer Pilates across Kildare & Wicklow. 
              <span className="block mt-2 font-medium">Balance is for everyone.</span>
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-black hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-black hover:text-primary transition-colors">
                <Instagram size={20} />
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
              <li><Link to="/book" className="text-black hover:text-primary transition-colors">Book Now</Link></li>
              <li><Link to="/blogs" className="text-black hover:text-primary transition-colors">Blogs</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-black mb-4">Our Studios</h4>
            <ul className="space-y-2">
              {locations.map((location) => (
                <li key={location.name} className="text-black text-sm">
                  {location.name}
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
                <Link to="/locations" className="hover:text-primary transition-colors">
                  View All Locations
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-black">
          <p>&copy; {new Date().getFullYear()} Balance Studios. All rights reserved.</p>
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
