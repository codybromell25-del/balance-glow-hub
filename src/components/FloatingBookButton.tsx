import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

const FloatingBookButton = () => {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[999] animate-fade-in">
      <Link to="/locations">
        <Button 
          size="lg"
          className="bg-primary hover:bg-primary/90 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 rounded-full px-6 py-3 md:py-6 text-base font-semibold"
        >
          <Calendar className="w-5 h-5 mr-2" />
          Book Now
        </Button>
      </Link>
    </div>
  );
};

export default FloatingBookButton;
