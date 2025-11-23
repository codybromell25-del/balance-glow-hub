import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const instructors = [
  {
    name: "Sarah Mitchell",
    location: "Clane Studio",
    bio: "With over 10 years of teaching experience, Sarah specializes in Foundation and Beginner classes. Her supportive approach helps newcomers build confidence while learning proper form and technique in a welcoming environment.",
    specialty: "Foundation / Beginner",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
  },
  {
    name: "Emma Rodriguez",
    location: "Kildare Town Studio",
    bio: "Emma brings precision and grace to Level 1 & 2 classes. She focuses on progressive movement patterns and flowing transitions, helping practitioners build on their foundation with dynamic sequences.",
    specialty: "Level 1 & 2",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    name: "Lisa Thompson",
    location: "Blessington Studio",
    bio: "Known for her intense yet mindful teaching style, Lisa leads our Advanced classes. She challenges experienced practitioners with complex choreography and high-intensity sequences while maintaining focus on proper alignment.",
    specialty: "Advanced",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "Claire O'Sullivan",
    location: "Enfield Studio",
    bio: "Claire specializes in Reformer Slow Burn classes, combining controlled holds with low-impact, high-intensity movements. Her classes are perfect for those seeking a challenging yet sustainable practice.",
    specialty: "Reformer Slow Burn",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
  },
  {
    name: "Rachel Walsh",
    location: "Bray Studio",
    bio: "Rachel is passionate about Mat Pilates, focusing on core-strength and body awareness through floor-based work. Her classes emphasize breath control and precise movement patterns for maximum results.",
    specialty: "Mat Pilates",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
  },
  {
    name: "Aoife Murphy",
    location: "Clane Studio",
    bio: "Aoife teaches across multiple levels, bringing versatility and deep knowledge to every class. Her encouraging approach helps students progress confidently from Foundation through to Advanced levels.",
    specialty: "All Levels",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
  },
];

const Instructors = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-10 md:py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
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
      <section className="py-8 md:py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {instructors.map((instructor, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card flex flex-col"
              >
                <CardContent className="p-0 flex flex-col flex-1">
                  {/* Image Container */}
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={instructor.image} 
                      alt={instructor.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                    
                    {/* Name and Location Overlay - Top Left */}
                    <div className="absolute top-6 left-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{instructor.name}</h3>
                      <div className="flex items-center gap-2 text-white/90">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{instructor.location}</span>
                      </div>
                    </div>
                    
                    {/* Specialty Badge - Bottom Right */}
                    <div className="absolute bottom-4 right-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                      {instructor.specialty}
                    </div>
                  </div>
                  
                  {/* Bio Section - Flex grow to push button down */}
                  <div className="p-6 space-y-4 flex flex-col flex-1">
                    <p className="text-muted-foreground leading-relaxed flex-1">
                      {instructor.bio}
                    </p>
                    
                    <Button 
                      asChild 
                      className="w-full transition-all duration-300 group-hover:shadow-lg mt-auto"
                    >
                      <a href="/book-class">
                        Book a Class
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-20 px-4 bg-primary/5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Choose your location and join one of our amazing instructors for an unforgettable Pilates experience
          </p>
          <Button asChild size="lg">
            <Link to="/locations">View Locations</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Instructors;