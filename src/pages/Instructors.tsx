import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const instructors = [
  {
    name: "Sarah Mitchell",
    location: "Pewaukee Studio",
    bio: "With over 15 years of teaching experience, Sarah specializes in Vinyasa and Power Yoga. Her classes blend strength-building sequences with mindful breathing techniques, creating a transformative experience for students of all levels.",
    specialty: "Vinyasa & Power Yoga",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
  },
  {
    name: "Michael Chen",
    location: "Delafield Studio",
    bio: "Michael brings a unique perspective to yoga, combining traditional Hatha practices with modern mobility work. His therapeutic approach helps students build sustainable strength while preventing injury.",
    specialty: "Hatha & Therapeutic Yoga",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Emma Rodriguez",
    location: "Pewaukee Studio",
    bio: "A certified yoga instructor and meditation guide, Emma creates calming spaces where students can explore their practice deeply. Her Yin and Restorative classes are perfect for those seeking balance and relaxation.",
    specialty: "Yin & Restorative Yoga",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    name: "James Anderson",
    location: "Delafield Studio",
    bio: "James is passionate about making yoga accessible to everyone. His beginner-friendly classes focus on proper alignment and building confidence, while his advanced sessions challenge even the most experienced practitioners.",
    specialty: "All Levels & Alignment",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    name: "Lisa Thompson",
    location: "Pewaukee Studio",
    bio: "Known for her energetic teaching style, Lisa brings joy and creativity to every class. She specializes in Flow and Dynamic Yoga, helping students build strength, flexibility, and confidence through mindful movement.",
    specialty: "Flow & Dynamic Yoga",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "David Park",
    location: "Delafield Studio",
    bio: "David's background in physical therapy informs his teaching approach, emphasizing body awareness and injury prevention. His classes are ideal for athletes and those recovering from injuries.",
    specialty: "Therapeutic & Sports Yoga",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
  },
];

const Instructors = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Meet Our Instructors
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn from experienced, passionate teachers dedicated to helping you grow in your practice
          </p>
        </div>
      </section>

      {/* Instructors Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card"
              >
                <CardContent className="p-0">
                  {/* Image Container */}
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={instructor.image} 
                      alt={instructor.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    
                    {/* Specialty Badge */}
                    <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                      {instructor.specialty}
                    </div>
                    
                    {/* Name and Location Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{instructor.name}</h3>
                      <div className="flex items-center gap-2 text-white/90">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{instructor.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bio Section */}
                  <div className="p-6 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {instructor.bio}
                    </p>
                    
                    <Button 
                      asChild 
                      className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 group-hover:shadow-lg"
                    >
                      <Link to="/locations">
                        Book a Class
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Choose your location and join one of our amazing instructors for an unforgettable yoga experience
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/locations">View Locations</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Instructors;