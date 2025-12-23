import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import balanceLogo from "@/assets/balance-removebg-preview.png";
import AnnouncementBanner from "./AnnouncementBanner";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBookButton, setShowBookButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button as soon as user starts scrolling
      setShowBookButton(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Class Types", path: "/classes" },
    { name: "Buy a Class", path: "/pricing" },
    { name: "Book a Class", path: "/our-studios" },
    { name: "Gift Cards", path: "/gift-cards" },
    { name: "Our Story", path: "/about" },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <AnnouncementBanner />
      </div>
      <nav className="fixed top-[28px] md:top-[36px] left-0 right-0 z-50 bg-background backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={balanceLogo} alt="balance reformer pilates" className="h-20 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.path === "/book-class" ? (
                <a
                  key={link.path}
                  href={link.path}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-foreground hover:text-primary transition-colors font-heading font-medium"
                >
                  {link.name}
                </Link>
              )
            )}
            <a
              href="https://momence.com/sign-in?hostId=62930"
              target="_blank"
              rel="noopener noreferrer"
              title="My Account"
            >
              <Button size="icon" className="rounded-full bg-[#A3C1AD] hover:bg-[#8FB09A] text-white">
                <User size={18} />
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) =>
                link.path === "/book-class" ? (
                  <a
                    key={link.path}
                    href={link.path}
                    className="text-foreground hover:text-primary transition-colors font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-foreground hover:text-primary transition-colors font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              )}
              <a
                href="https://momence.com/sign-in?hostId=62930"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-2"
              >
                <Button className="w-full gap-2 bg-[#A3C1AD] hover:bg-[#8FB09A] text-white">
                  <User size={18} />
                  My Account
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  );
};

export default Navigation;
