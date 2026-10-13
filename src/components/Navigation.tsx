import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import balanceLogo from "@/assets/balance-removebg-preview.png";
import AnnouncementBanner from "./AnnouncementBanner";

const trackOutboundClick = (url: string, label: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "click", {
      event_category: "outbound",
      event_label: label,
      link_url: url,
    });
  }
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [studiosOpen, setStudiosOpen] = useState(false);

  const studioLinks = [
    { name: "Blessington", path: "/studio/blessington" },
    { name: "Bray", path: "/studio/bray" },
    { name: "Clane", path: "/studio/clane" },
    { name: "Enfield", path: "/studio/enfield" },
    { name: "Kildare Town", path: "/studio/kildare" },
    { name: "Limerick", path: "/studio/limerick" },
  ];
  const [bookOpen, setBookOpen] = useState(false);
  const [showBookButton, setShowBookButton] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setBookOpen(false);
  }, [location.pathname]);

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
    { name: "Classes", path: "/classes" },
    { name: "Buy", path: "/pricing" },
    { name: "Book", path: "/our-studios" },
    { name: "Shop", path: "/shop" },
    { name: "Education", path: "https://educationbalance.vercel.app/" },
    { name: "Gift Cards", path: "/gift-cards" },
    { name: "Careers", path: "/careers" },

    { name: "Our Story", path: "/about" },
  ];

  return (
    <>
      <div aria-hidden className="h-[108px] md:h-[116px]" />
      <div className="fixed top-0 left-0 right-0 z-50">
        <AnnouncementBanner />
      </div>
      <nav className="fixed top-7 md:top-9 left-0 right-0 z-50 bg-background backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={balanceLogo} alt="balance reformer pilates" className="h-20 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-6">
            {navLinks.map((link) =>
              link.name === "Book" ? (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => setBookOpen(true)}
                  onMouseLeave={() => setBookOpen(false)}
                >
                  <Link
                    to={link.path}
                    className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-heading italic"
                    aria-expanded={bookOpen}
                  >
                    {link.name}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${bookOpen ? "rotate-180" : ""}`}
                    />
                  </Link>
                  {bookOpen && (
                    <div className="absolute left-0 top-full pt-4 animate-fade-in">
                      <div className="min-w-[190px] rounded-2xl border border-border bg-background p-2 shadow-xl">
                        <a
                          href="/our-studios"
                          className="block rounded-xl px-3 py-2 font-heading italic text-foreground/70 hover:bg-[#A3C1AD]/15 hover:text-foreground"
                        >
                          All studios
                        </a>
                        <div className="my-1 h-px bg-border" />
                        {studioLinks.map((studio) => (
                          <a
                            key={studio.path}
                            href={studio.path}
                            className="block rounded-xl px-3 py-2 font-heading italic text-foreground hover:bg-[#A3C1AD]/15"
                          >
                            {studio.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : link.path.startsWith("http") ? (
                <a
                  key={link.path}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors font-heading italic"
                  onClick={() =>
                    link.name === "Education" &&
                    trackOutboundClick(link.path, "education_nav")
                  }
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-foreground hover:text-primary transition-colors font-heading italic"
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
            className="lg:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {/* Quick studio dropdown */}
              <div className="border-b border-border pb-3">
                <button
                  className="flex w-full items-center justify-between text-foreground font-heading italic py-2"
                  onClick={() => setStudiosOpen(!studiosOpen)}
                  aria-expanded={studiosOpen}
                >
                  Studios
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${studiosOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {studiosOpen && (
                  <div className="flex flex-col pl-4 mt-1 space-y-1 animate-fade-in">
                    {studioLinks.map((studio) => (
                      <a
                        key={studio.path}
                        href={studio.path}
                        className="text-foreground/80 hover:text-primary transition-colors font-heading italic py-2"
                      >
                        {studio.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              {navLinks.map((link) =>
                link.path.startsWith("http") ? (
                <a
                  key={link.path}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors font-heading italic py-2"
                  onClick={() => {
                    setIsOpen(false);
                    if (link.name === "Education") {
                      trackOutboundClick(link.path, "education_nav");
                    }
                  }}
                >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-foreground hover:text-primary transition-colors font-heading italic py-2"
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
