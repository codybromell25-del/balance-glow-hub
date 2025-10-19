import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

const FloatingBookButton = () => {
  return (
    <div 
      style={{ 
        position: 'fixed', 
        bottom: '24px', 
        right: '24px', 
        zIndex: 99999,
        pointerEvents: 'auto'
      }}
    >
      <Link to="/locations">
        <Button 
          size="lg"
          className="bg-primary hover:bg-primary/90 shadow-2xl transition-all duration-300 rounded-full px-6 py-3 text-base font-semibold"
        >
          <Calendar className="w-5 h-5 mr-2" />
          <span>Book Now</span>
        </Button>
      </Link>
    </div>
  );
};

export default FloatingBookButton;
