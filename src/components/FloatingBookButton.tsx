import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useLocation } from "react-router-dom";

const FloatingBookButton = () => {
  const location = useLocation();
  
  // Hide button on booking pages
  const bookingPages = [
    "/schedule",
    "/test-booking",
    "/booking/bray",
    "/booking/clane",
    "/booking/enfield",
    "/booking/kildare",
    "/booking/blessington",
    "/book-class"
  ];
  
  if (bookingPages.includes(location.pathname)) {
    return null;
  }
  
  return (
    <a href="/book-class" className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50 animate-fade-in">
      <Button 
        size="lg"
        className="shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 rounded-full px-4 py-4 md:px-6 md:py-6 text-sm md:text-base font-semibold"
      >
        <Calendar className="w-4 h-4 md:w-5 md:h-5 md:mr-2" />
        <span className="hidden md:inline">Book Now</span>
      </Button>
    </a>
  );
};

export default FloatingBookButton;
