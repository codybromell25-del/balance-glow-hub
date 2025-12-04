import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const InsideScoop = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-foreground mb-4">
            Step Inside Our Studios
          </h2>
        </div>

        <div className="max-w-xs mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <video
              src="/videos/sculpt-class.mp4"
              className="w-full aspect-[9/16] object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsideScoop;
