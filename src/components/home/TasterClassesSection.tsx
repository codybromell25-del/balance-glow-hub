import { Calendar, Clock, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const TasterClassesSection = () => {
  const tasterClasses = [
    {
      location: "Kildare",
      instructor: "Caoi",
      date: "Sunday, Feb 1st",
      time: "1:30 PM",
      bookingLink: "https://momence.com/l/nmhGPd6o"
    },
    {
      location: "Enfield",
      instructor: "Cathy",
      date: "Saturday, Jan 31st",
      time: "12:00 PM",
      bookingLink: "https://momence.com/l/x9hBqjM7"
    },
    {
      location: "Clane",
      instructor: "Zoe",
      date: "Saturday, Jan 31st",
      time: "12:30 PM",
      bookingLink: "https://momence.com/l/dahe9M2b"
    },
    {
      location: "Blessington",
      instructor: "Lauren",
      date: "Sunday, Feb 1st",
      time: "12:00 PM",
      bookingLink: "https://momence.com/l/mXheR4Mo"
    },
    {
      location: "Bray",
      instructor: "Catherine",
      date: "Saturday, Jan 31st",
      time: "1:00 PM",
      bookingLink: "https://momence.com/l/VRh6Bky5"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-[#A3C1AD]/20 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-[#A3C1AD]" />
            <span className="text-sm font-medium uppercase tracking-wider text-[#1e1a1a]">New to balance?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 tracking-tight text-[#1e1a1a]">
            Taster Classes Are Here
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Try your first class at a special introductory rate. Perfect for beginners.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-border/50">
            {/* Table Header */}
            <div className="grid grid-cols-5 bg-secondary/50 px-6 py-4 border-b border-border/30">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                Location
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Instructor
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
                <Calendar className="w-4 h-4" />
                Date
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                Time
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider text-right">
                Book
              </div>
            </div>

            {/* Table Rows */}
            {tasterClasses.map((classItem, index) => (
              <div 
                key={index}
                className={`grid grid-cols-5 px-6 py-5 items-center transition-colors hover:bg-secondary/30 ${
                  index !== tasterClasses.length - 1 ? 'border-b border-border/20' : ''
                }`}
              >
                <div className="font-medium text-foreground">{classItem.location}</div>
                <div className="text-foreground/80">{classItem.instructor}</div>
                <div className="text-foreground/80">{classItem.date}</div>
                <div className="text-foreground/80">{classItem.time}</div>
                <div className="text-right">
                  <a 
                    href={classItem.bookingLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-black rounded-full transition-colors hover:opacity-90"
                    style={{ background: 'linear-gradient(180deg, #b8d4c3 0%, #A3C1AD 40%, #8fb39c 100%)' }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4 max-w-sm mx-auto">
          {tasterClasses.map((classItem, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md p-5 border border-border/50"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-heading text-lg font-medium text-foreground">
                    {classItem.location}
                  </h3>
                  <p className="text-sm text-muted-foreground">with {classItem.instructor}</p>
                </div>
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              
              <div className="flex items-center gap-4 text-sm text-foreground/80 mb-4">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-primary/70" />
                  {classItem.date}
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-primary/70" />
                  {classItem.time}
                </div>
              </div>
              
              <a 
                href={classItem.bookingLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-black rounded-full transition-colors hover:opacity-90"
                style={{ background: 'linear-gradient(180deg, #b8d4c3 0%, #A3C1AD 40%, #8fb39c 100%)' }}
              >
                Book This Class
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TasterClassesSection;
