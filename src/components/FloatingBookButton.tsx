import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

const FloatingBookButton = () => {
  return (
    <Link to="/locations" className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <Button 
        size="lg"
        className="shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 rounded-full px-6 py-6 text-base font-semibold"
      >
        <Calendar className="w-5 h-5 mr-2" />
        Book Now
      </Button>
    </Link>
  );
};

export default FloatingBookButton;
