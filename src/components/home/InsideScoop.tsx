import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
const videos = ["/videos/slow-burn-class.mp4", "/videos/sculpt-class.mp4", "/videos/gentle-flow-class.mp4", "/videos/finish-strong-class.mp4"];
interface InsideScoopProps {
  className?: string;
}

const InsideScoop = ({ className }: InsideScoopProps) => {
  const {
    ref,
    isVisible
  } = useScrollAnimation(0.1);
  const [activeIndex, setActiveIndex] = useState(0);
  const getVideoIndex = (offset: number) => {
    return (activeIndex + offset + videos.length) % videos.length;
  };
  const scrollPrev = () => {
    setActiveIndex(prev => (prev - 1 + videos.length) % videos.length);
  };
  const scrollNext = () => {
    setActiveIndex(prev => (prev + 1) % videos.length);
  };
  const leftIndex = getVideoIndex(-1);
  const centerIndex = activeIndex;
  const rightIndex = getVideoIndex(1);
  const getPosition = (index: number) => {
    if (index === centerIndex) return "center";
    if (index === leftIndex) return "left";
    if (index === rightIndex) return "right";
    return "hidden";
  };
  return <section className={`py-10 md:py-14 bg-foreground overflow-hidden ${className || ""}`}>
      <div className="container mx-auto px-4 border-accent bg-[#faf2eb]">
        <div ref={ref} className={`text-center mb-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium mb-4 text-primary-foreground">
            Take a Step Into balance
          </h2>
        </div>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button onClick={scrollPrev} className="absolute left-0 md:left-4 z-20 p-2 rounded-full bg-background/20 backdrop-blur-sm shadow-lg hover:bg-background/40 transition-colors" aria-label="Previous video">
            <ChevronLeft className="w-6 h-6 text-background" />
          </button>

          {/* Videos Container - All videos stay mounted */}
          <div className="flex items-center justify-center gap-3 md:gap-6 px-12">
            {videos.map((video, index) => {
            const position = getPosition(index);
            return <div key={video} onClick={() => {
              if (position === "left") scrollPrev();
              if (position === "right") scrollNext();
            }} className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-300 flex-shrink-0 ${position === "center" ? "w-48 md:w-64 scale-100 opacity-100 z-10 order-2 shadow-xl" : position === "left" ? "w-28 md:w-40 scale-90 opacity-60 hover:opacity-80 cursor-pointer order-1" : position === "right" ? "w-28 md:w-40 scale-90 opacity-60 hover:opacity-80 cursor-pointer order-3" : "w-0 scale-0 opacity-0 absolute pointer-events-none"}`}>
                  <video src={video} className="w-full aspect-[9/16] object-cover" autoPlay muted loop playsInline preload="auto" />
                </div>;
          })}
          </div>

          {/* Right Arrow */}
          <button onClick={scrollNext} className="absolute right-0 md:right-4 z-20 p-2 rounded-full bg-background/20 backdrop-blur-sm shadow-lg hover:bg-background/40 transition-colors" aria-label="Next video">
            <ChevronRight className="w-6 h-6 text-background" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {videos.map((_, index) => <button key={index} onClick={() => setActiveIndex(index)} className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-primary w-6" : "bg-muted-foreground/30"}`} aria-label={`Go to video ${index + 1}`} />)}
        </div>
      </div>
    </section>;
};
export default InsideScoop;