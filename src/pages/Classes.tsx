import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ClassesBrandStatement from "@/components/home/ClassesBrandStatement";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { MapPin } from "lucide-react";
import imgClassic from "@/assets/limerick-reformer-instructor.jpg";
import imgSculpt from "@/assets/studio-leg-raise.jpg";
import imgChallenge from "@/assets/studio-lunge-workout.jpg";
import imgGentle from "@/assets/studio-instructor-helping.jpg";
import imgMat from "@/assets/clients-mat-workout.jpg";
import barreAsset from "@/assets/barre-limerick.jpg.asset.json";
import yogaAsset from "@/assets/yoga-limerick.jpg.asset.json";

const imgBarre = barreAsset.url;
const imgYoga = yogaAsset.url;

const LEVELS = ["", "Gentle", "Beginner / Mixed", "Intermediate", "Advanced", "Intense"];

type ClassInfo = {
  id: string;
  name: string;
  short: string;
  forWho: string;
  difficulty: number;
  points: string[];
  where: string;
  image: string;
  imagePosition?: string;
  mobileAspect?: string;
  bookingLink: string;
};

const CLASSES: ClassInfo[] = [
  {
    id: "classic", name: "classic", short: "Classic", image: imgClassic, difficulty: 2,
    forWho: "Perfect for beginners and foundation building",
    points: [
      "Core Pilates principles in a full-body workout",
      "Thoughtful, powerful and effective — not easy, just smart",
      "Great for new Reformer users and loyal regulars",
    ],
    where: "All studios", bookingLink: "/our-studios",
  },
  {
    id: "sculpt", name: "sculpt", short: "Sculpt", image: imgSculpt, difficulty: 3,
    forWho: "Intermediate — a step up after 6 classic classes",
    points: [
      "Thoughtful challenges with extra core work",
      "Sequences that make your muscles sing",
      "Strong, supportive and full of feel-good fire",
    ],
    where: "All studios", bookingLink: "/our-studios",
  },
  {
    id: "challenge", name: "challenge", short: "Challenge", image: imgChallenge, difficulty: 4,
    forWho: "For confident clients ready to push further",
    points: [
      "Creative combos with quicker transitions",
      "Tests strength, precision and stamina",
      "Previous Reformer experience necessary",
    ],
    where: "All studios", bookingLink: "/our-studios",
  },
  {
    id: "gentle-flow", name: "gentle flow", short: "Gentle Flow", image: imgGentle, difficulty: 1,
    forWho: "Pregnancy, postnatal, injury recovery or a slower pace",
    points: [
      "Soft, supportive movement focused on mobility and breath",
      "Suitable for all trimesters of pregnancy",
      "No prior Pilates experience required",
    ],
    where: "All studios", bookingLink: "/booking/gentle-flow",
  },
  {
    id: "mat", name: "mat", short: "Mat", image: imgMat, difficulty: 3,
    forWho: "Pilates on the mat — suitable for all levels",
    points: [
      "Classic mat work for core strength and flexibility",
      "No equipment needed — just you and the mat",
      "The perfect complement to your Reformer practice",
    ],
    where: "Limerick · Kildare", bookingLink: "/booking/mat-classes",
  },
  {
    id: "barre", name: "pilates barre", short: "Barre", image: imgBarre, difficulty: 3,
    forWho: "Mixed — suitable for all",
    points: [
      "Pilates-inspired movement meets barre strength work",
      "Not a ballet class — no dance experience needed",
      "Low impact, uplifting, with options throughout",
    ],
    where: "Limerick · Kildare", bookingLink: "/our-studios",
  },
  {
    id: "yoga", name: "yoga", short: "Yoga", image: imgYoga, difficulty: 2,
    imagePosition: "50% 70%", mobileAspect: "aspect-[4/5]",
    forWho: "Mixed — new to yoga or experienced",
    points: [
      "Move, breathe and switch off for a while",
      "Strength, mobility, stretch and relaxation",
      "Leave feeling stronger, calmer and more connected",
    ],
    where: "Limerick · Kildare", bookingLink: "/our-studios",
  },
];

const Intensity = ({ level }: { level: number }) => (
  <div className="flex items-center gap-3">
    <div className="flex gap-1" aria-hidden="true">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={`h-1.5 w-6 rounded-full ${i <= level ? "bg-sage" : "bg-foreground/10"}`} />
      ))}
    </div>
    <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{LEVELS[level]}</span>
  </div>
);

const ClassSection = ({ c, index }: { c: ClassInfo; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.15);
  const flip = index % 2 === 1;
  const external = c.bookingLink.startsWith("http");
  return (
    <article
      id={c.id}
      ref={ref}
      className={`scroll-mt-40 py-12 md:py-20 border-t border-foreground/10 first:border-t-0 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-16">
        <div className={`overflow-hidden rounded-3xl ${c.mobileAspect || "aspect-[4/3]"} md:aspect-[4/5] ${flip ? "md:order-2" : ""}`}>
          <img src={c.image} alt={`${c.short} class at balance studios`} loading="lazy" className="h-full w-full object-cover" style={c.imagePosition ? { objectPosition: c.imagePosition } : undefined} />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">
            {String(index + 1).padStart(2, "0")} / {String(CLASSES.length).padStart(2, "0")}
          </p>
          <h2 className="font-heading italic text-5xl md:text-6xl leading-none mb-4">
            {c.name}<span className="text-sage">.</span>
          </h2>
          <p className="text-lg text-foreground/80 mb-5">{c.forWho}</p>
          <Intensity level={c.difficulty} />
          <ul className="mt-6 space-y-3">
            {c.points.map((p) => (
              <li key={p} className="flex gap-3 text-foreground/80">
                <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sage" />
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-foreground/15 px-4 py-1.5 text-sm">
            <MapPin size={14} /> {c.where}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href={c.bookingLink}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="rounded-full bg-sage px-8 py-3.5 font-heading text-sage-foreground hover:bg-sage/80 transition-colors"
            >
              Book {c.short}
            </a>
            <a href="/schedule" className="text-sm underline underline-offset-4 decoration-sage hover:text-foreground/70">
              View timetable
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

const Classes = () => (
  <div className="min-h-screen">
    <SEO
      title="Class Types | balance studios - Reformer Pilates"
      description="Classic, Sculpt, Challenge, Gentle Flow, Mat, Pilates Barre and Yoga at balance studios. Find the class that suits you."
      canonical="/classes"
    />
    <Navigation />
    <main>
      <ClassesBrandStatement />

      <nav aria-label="Class types" className="border-y border-foreground/10">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide py-4 md:justify-center">
            {CLASSES.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="whitespace-nowrap rounded-full border border-foreground/15 px-4 py-2 text-sm hover:bg-sage hover:border-sage transition-colors"
              >
                {c.short}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {CLASSES.map((c, i) => (
            <ClassSection key={c.id} c={c} index={i} />
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-foreground/10">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading italic text-4xl md:text-5xl mb-5">
            not sure where to start<span className="text-sage">?</span>
          </h2>
          <p className="text-lg text-foreground/80 mb-8">
            Our instructors are happy to help. We recommend starting with a Classic class to learn the fundamentals and find your flow.
          </p>
          <a href="/our-studios" className="inline-block rounded-full bg-sage px-8 py-4 font-heading text-sage-foreground hover:bg-sage/80 transition-colors">
            View our studios
          </a>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Classes;
