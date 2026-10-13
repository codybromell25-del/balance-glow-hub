import { Instagram } from "lucide-react";
import clientsLaughing from "@/assets/clients-laughing.jpg";
import clientsMatWorkout from "@/assets/clients-mat-workout.jpg";
import clientsStretching from "@/assets/clients-stretching.jpg";
import instructorLaughing from "@/assets/instructor-laughing.jpg";
import studioBallWorkout from "@/assets/studio-ball-workout.jpg";
import limerickReformerLaughing from "@/assets/limerick-reformer-laughing.jpg";

const INSTAGRAM_URL = "https://www.instagram.com/balancereformer/";

const photos = [
  { src: clientsLaughing, alt: "Clients laughing together at balance studios" },
  { src: clientsMatWorkout, alt: "Clients during a mat workout at balance studios" },
  { src: instructorLaughing, alt: "Instructor laughing during a class at balance studios" },
  { src: clientsStretching, alt: "Clients stretching at balance studios" },
  { src: studioBallWorkout, alt: "Studio ball workout at balance studios" },
  { src: limerickReformerLaughing, alt: "Reformer class at balance studios Limerick" },
];

const InstagramStrip = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Instagram
          </p>
          <h2 className="font-heading italic text-4xl md:text-5xl text-foreground mb-3">
            follow the journey
          </h2>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors text-sm md:text-base"
          >
            <Instagram size={16} strokeWidth={1.6} />
            @balancereformer
          </a>
        </div>

        <div className="flex gap-3 md:gap-4 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-6 md:overflow-visible snap-x snap-mandatory scrollbar-hide">
          {photos.map((photo) => (
            <a
              key={photo.src}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block shrink-0 w-40 sm:w-48 md:w-auto aspect-square overflow-hidden rounded-2xl snap-start"
              aria-label={`${photo.alt} — opens Instagram`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#A3C1AD]/0 group-hover:bg-[#A3C1AD]/25 transition-colors duration-300" />
              <Instagram
                size={20}
                strokeWidth={1.6}
                className="absolute bottom-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramStrip;
