import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const locations = [
    { name: "Clane", address: "Clane, Co. Kildare" },
    { name: "Kildare Town", address: "Kildare Town, Co. Kildare" },
    { name: "Blessington", address: "Blessington, Co. Wicklow" },
    { name: "Enfield", address: "Enfield, Co. Meath" },
    { name: "Bray", address: "Bray, Co. Wicklow" },
  ];

  return (
    <footer className="bg-muted/50 border-t border-border mt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">Balance Studios</h3>
            <p className="text-muted-foreground mb-4">
              Reformer Pilates across Kildare & Wicklow. 
              <span className="block mt-2 font-medium">Balance is for everyone.</span>
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/classes" className="text-muted-foreground hover:text-primary transition-colors">Classes</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link to="/book" className="text-muted-foreground hover:text-primary transition-colors">Book Now</Link></li>
              <li><Link to="/blogs" className="text-muted-foreground hover:text-primary transition-colors">Blogs</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Our Studios</h4>
            <ul className="space-y-2">
              {locations.map((location) => (
                <li key={location.name} className="text-muted-foreground text-sm">
                  {location.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-muted-foreground">
                <Mail size={16} className="mr-2" />
                <a href="mailto:info@balancestudios.ie" className="hover:text-primary transition-colors">
                  info@balancestudios.ie
                </a>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Phone size={16} className="mr-2" />
                <a href="tel:+353" className="hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
              <li className="flex items-start text-muted-foreground">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                <Link to="/locations" className="hover:text-primary transition-colors">
                  View All Locations
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Balance Studios. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
            <Link to="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
