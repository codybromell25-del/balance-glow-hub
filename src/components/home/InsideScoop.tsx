import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  "/videos/slow-burn-class.mp4",
  "/videos/sculpt-class.mp4",
  "/videos/gentle-flow-class.mp4",
  "/videos/finish-strong-class.mp4",
];

const InsideScoop = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [activeIndex, setActiveIndex] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (index < 0) index = videos.length - 1;
    if (index >= videos.length) index = 0;
    setActiveIndex(index);
  };

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-foreground mb-4">
            Inside Scoop
          </h2>
        </div>

        <div className="relative flex items-center justify-center gap-4 md:gap-6">
          {/* Left Arrow */}
          <button
            onClick={() => scrollToIndex(activeIndex - 1)}
            className="absolute left-0 md:left-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background transition-colors"
            aria-label="Previous video"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>

          {/* Videos Container */}
          <div ref={containerRef} className="flex items-center justify-center gap-3 md:gap-6 px-12">
            {videos.map((video, index) => {
              const isActive = index === activeIndex;
              const isAdjacent = Math.abs(index - activeIndex) === 1 || 
                (activeIndex === 0 && index === videos.length - 1) ||
                (activeIndex === videos.length - 1 && index === 0);
              
              // Calculate visual position relative to active
              let position = index - activeIndex;
              if (activeIndex === 0 && index === videos.length - 1) position = -1;
              if (activeIndex === videos.length - 1 && index === 0) position = 1;

              const shouldShow = isActive || isAdjacent;

              if (!shouldShow) return null;

              return (
                <div
                  key={video}
                  onClick={() => scrollToIndex(index)}
                  className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-500 cursor-pointer flex-shrink-0 ${
                    isActive
                      ? "w-48 md:w-64 scale-100 opacity-100 z-10"
                      : "w-32 md:w-44 scale-90 opacity-60 hover:opacity-80"
                  }`}
                >
                  <video
                    src={video}
                    className="w-full aspect-[9/16] object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scrollToIndex(activeIndex + 1)}
            className="absolute right-0 md:right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background transition-colors"
            aria-label="Next video"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-primary w-6" : "bg-muted-foreground/30"
              }`}
              aria-label={`Go to video ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsideScoop;
