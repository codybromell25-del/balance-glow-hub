import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-studio-bg.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in mt-20 md:mt-0">
          <h1 className="text-4xl md:text-7xl font-heading font-bold text-foreground mb-4 md:mb-6 leading-tight">
            Strength, Grace <br />
            <span className="text-primary">& Balance</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
            Every body is beautiful
          </p>
          
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl leading-relaxed">
            Experience boutique reformer Pilates with expert instructors across five beautifully designed studios in Kildare and Wicklow. Small groups, personalized attention, transformative results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"
            >
              <Link to="/locations">Book a Class</Link>
            </Button>
            
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/10 text-lg px-8"
            >
              <Link to="/pricing">View Intro Offer</Link>
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground">
            <div>
              <p className="text-2xl font-heading font-bold text-primary">5</p>
              <p>Studio Locations</p>
            </div>
            <div>
              <p className="text-2xl font-heading font-bold text-primary">1000+</p>
              <p>Happy Clients</p>
            </div>
            <div>
              <p className="text-2xl font-heading font-bold text-primary">Expert</p>
              <p>Instructors</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
