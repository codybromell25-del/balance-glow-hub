import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
const videos = ["/videos/slow-burn-class.mp4", "/videos/sculpt-class.mp4", "/videos/gentle-flow-class.mp4", "/videos/finish-strong-class.mp4"];
interface InsideScoopProps {
  className?: string;
}
const InsideScoop = ({
  className
}: InsideScoopProps) => {
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
  return <section className={`py-10 md:py-14 bg-background overflow-hidden ${className || ""}`}>
      
    </section>;
};
export default InsideScoop;