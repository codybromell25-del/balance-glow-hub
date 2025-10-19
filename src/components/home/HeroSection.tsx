import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-studio-bg.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
      <div className="container mx-auto px-4 relative z-10 pt-20 md:pt-0">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6 leading-tight">
            Strength, Grace <br />
            <span className="text-primary">& Balance</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
            Balance is for everyone
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
          <div className="mt-12 flex items-center gap-4 sm:gap-8">
            <div>
              <p className="text-4xl sm:text-5xl md:text-4xl font-heading font-bold text-foreground">5</p>
              <p className="text-sm sm:text-base text-muted-foreground">Studio Locations</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl md:text-4xl font-heading font-bold text-foreground">1000+</p>
              <p className="text-sm sm:text-base text-muted-foreground">Happy Clients</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl md:text-4xl font-heading font-bold text-foreground">Expert</p>
              <p className="text-sm sm:text-base text-muted-foreground">Instructors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
