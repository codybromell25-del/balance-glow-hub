import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays } from "lucide-react";
import clientsLaughing from "@/assets/clients-laughing.jpg";
import clientsMatWorkout from "@/assets/clients-mat-workout.jpg";
import clientsStretching from "@/assets/clients-stretching.jpg";
const ClassRoutines = () => {
  const classes = [{
    image: clientsStretching,
    badge: "Move with grace",
    badgeColor: "bg-[#c9a96e]",
    title: "Align",
    description: "Align and elongate your body through a variety of open rotations and dynamic movements."
  }, {
    image: clientsMatWorkout,
    badge: "Last longer, go stronger",
    badgeColor: "bg-[#c9a96e]",
    title: "Tone",
    description: "Tone your body with this dynamic flow, featuring burnout and pulse sequences for enhanced sculpting."
  }, {
    image: clientsLaughing,
    badge: "Powered by you",
    badgeColor: "bg-[#a3c1ad]",
    title: "Power",
    description: "This class is aimed at building strength through dynamic and compound movements using the reformer."
  }];
  return <section className="py-10 md:py-14 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10 animate-fade-in">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-8 h-[1px] bg-foreground/30"></span>
            <span className="text-foreground/60 text-sm uppercase tracking-[0.2em]">Our Classes</span>
            <span className="w-8 h-[1px] bg-foreground/30"></span>
          </div>
          <h2 className="text-3xl font-heading italic text-foreground tracking-tight md:text-7xl">Explore our three distinct classes</h2>
        </div>

        {/* Class Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {classes.map((classItem, index) => <div key={classItem.title} className="group animate-fade-in" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              {/* Image Container */}
              <div className="relative mb-6 rounded-2xl overflow-hidden aspect-[4/5]">
                <img src={classItem.image} alt={classItem.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`${classItem.badgeColor} text-white text-xs md:text-sm px-4 py-2 rounded-full font-medium shadow-lg`}>
                    {classItem.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-3">
                {classItem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 min-h-[60px]">
                {classItem.description}
              </p>

              {/* Buttons */}
              <div className="flex items-center gap-4">
                <Button asChild size="sm" className="rounded-full px-5 py-2 font-heading font-medium text-sm bg-[#c9a96e] hover:bg-[#b89a5f] text-white border-0">
                  <a href="/classes">
                    Discover more
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="sm" className="text-foreground hover:text-foreground/80 font-heading font-medium text-sm">
                  <a href="/book-class">
                    Book now
                    <CalendarDays className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default ClassRoutines;