import clientsLaughing from "@/assets/clients-laughing.jpg";
import clientsStretching from "@/assets/clients-stretching.jpg";
import instructorLaughing from "@/assets/instructor-laughing.jpg";

const HumanMoments = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-medium text-foreground mb-4">
              More Than a Workout
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real connections. Real laughter. Real results.
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-2xl aspect-[3/4] group">
              <img 
                src={clientsLaughing} 
                alt="Clients enjoying their pilates class together"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <p className="absolute bottom-6 left-6 right-6 text-white font-heading text-xl font-medium">
                The joy of moving together
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl aspect-[3/4] group">
              <img 
                src={instructorLaughing} 
                alt="Instructor helping client with form"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <p className="absolute bottom-6 left-6 right-6 text-white font-heading text-xl font-medium">
                Expert guidance, personal attention
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl aspect-[3/4] group">
              <img 
                src={clientsStretching} 
                alt="Two women stretching during mat class"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <p className="absolute bottom-6 left-6 right-6 text-white font-heading text-xl font-medium">
                Find your flow
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanMoments;
