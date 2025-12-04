import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Import existing images
import studioInterior from "@/assets/studio-interior-1.png";
import studioEntrance from "@/assets/studio-entrance.png";
import studioExterior from "@/assets/studio-exterior.png";
import studioHallway from "@/assets/studio-hallway.png";
import kellyOwner from "@/assets/kelly-owner-new.png";

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  alt?: string;
  aspectRatio: 'tall' | 'wide' | 'square';
}

const mediaItems: MediaItem[] = [
  { type: 'video', src: '/videos/sculpt-class.mp4', aspectRatio: 'tall' },
  { type: 'image', src: studioInterior, alt: 'Studio interior', aspectRatio: 'square' },
  { type: 'image', src: kellyOwner, alt: 'Kelly, Owner of Balance', aspectRatio: 'tall' },
  { type: 'image', src: studioEntrance, alt: 'Studio entrance', aspectRatio: 'wide' },
  { type: 'image', src: studioExterior, alt: 'Studio exterior', aspectRatio: 'square' },
  { type: 'image', src: studioHallway, alt: 'Studio hallway', aspectRatio: 'tall' },
];

const MasonryItem = ({ item, index }: { item: MediaItem; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  const heightClass = {
    tall: 'row-span-2',
    wide: 'col-span-2',
    square: '',
  }[item.aspectRatio];

  return (
    <div
      ref={ref}
      className={`${heightClass} overflow-hidden rounded-2xl transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {item.type === 'video' ? (
        <video
          src={item.src}
          className="w-full h-full object-cover min-h-[300px] bg-black"
          autoPlay
          muted
          loop
          playsInline
          controls
        >
          <source src={item.src} type="video/mp4" />
        </video>
      ) : (
        <img
          src={item.src}
          alt={item.alt}
          className="w-full h-full object-cover min-h-[200px] hover:scale-105 transition-transform duration-500"
        />
      )}
    </div>
  );
};

const OurStory = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.1);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div
            ref={headerRef}
            className={`text-center mb-12 transition-all duration-700 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-foreground mb-4">
              Our Story
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto font-heading">
              A glimpse into the Balance world. Real moments, real results, real community.
            </p>
          </div>

          {/* Pinterest-style Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {mediaItems.map((item, index) => (
              <MasonryItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OurStory;
