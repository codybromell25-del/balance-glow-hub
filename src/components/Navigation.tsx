import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import balanceLogo from "@/assets/balance-logo-transparent.png";

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
    { name: "Pricing", path: "/pricing" },
    { name: "Book a Class", path: "/book-class" },
    { name: "Our Studios", path: "/our-studios" },
    { name: "About", path: "/about" },
    { name: "Shop", path: "/shop" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={balanceLogo} alt="Balance Reformer Pilates" className="h-20 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
            {showBookButton && (
              <Button asChild variant="default" className="transition-all animate-fade-in">
                <a href="/book-class">Book a Class</a>
              </Button>
            )}
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
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              {showBookButton && (
                <Button asChild variant="default" className="w-full">
                  <a href="/book-class" onClick={() => setIsOpen(false)}>
                    Book a Class
                  </a>
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
