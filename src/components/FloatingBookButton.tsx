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
    <a href="/book-class" className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <Button 
        size="lg"
        className="shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 rounded-full px-6 py-6 text-base font-semibold"
      >
        <Calendar className="w-5 h-5 mr-2" />
        Book Now
      </Button>
    </a>
  );
};

export default FloatingBookButton;
