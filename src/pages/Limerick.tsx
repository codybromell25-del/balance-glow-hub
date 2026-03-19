import { MapPin, Calendar, Sparkles, Heart, Users, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import LimerickLeadPopup from "@/components/LimerickLeadPopup";
import studioReformersWide from "@/assets/studio-reformers-wide.jpg";
import clientsLaughing from "@/assets/clients-laughing.jpg";
import instructorLaughing from "@/assets/instructor-laughing.jpg";
import clientsStretching from "@/assets/clients-stretching.jpg";
import studioInstructorHelping from "@/assets/studio-instructor-helping.jpg";
import studioInteriorPlants from "@/assets/studio-interior-plants.jpg";
import studioWelcome from "@/assets/studio-welcome.jpg";

const featuredClasses = [
  { label: "Reformer Pilates" },
  { label: "Mat Pilates" },
  { label: "Yoga" },
  { label: "Barre" },
];

const experienceHighlights = [
  {
    icon: Star,
    title: "Premium Equipment",
    desc: "State-of-the-art reformers in a purpose-built, beautifully designed space.",
  },
  {
    icon: Users,
    title: "Small Group Classes",
    desc: "Intimate class sizes so you get the attention you deserve, every single session.",
  },
  {
    icon: Heart,
    title: "All Levels Welcome",
    desc: "Whether it's your first class or your five hundredth, you belong here.",
  },
  {
    icon: Calendar,
    title: "Full Timetable",
    desc: "Reformer Pilates, Mat Pilates, Yoga and Barre — all under one roof.",
  },
];

const Limerick = () => {
  return (
    <>
      <SEO
        title="balance studios | Coming to Limerick May 2026"
        description="balance is opening in Limerick at The Coach House, Henry Street. Reformer Pilates, Mat Pilates, Yoga & Barre. Register for early access to timetables and launch offers."
        canonical="/studio/limerick"
        noindex={true}
      />
      <LimerickLeadPopup />
      <Navigation />
      <main className="pt-20">
        <section className="relative flex min-h-[85vh] items-center overflow-hidden">
          <img
            src={studioReformersWide}
            alt="balance studio reformer pilates"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30" />

          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-2xl pt-12">
              <div className="mb-6 flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Opening May 2026
                </span>
              </div>

              <h1 className="mb-6 font-heading text-5xl font-light leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                balance is
                <br />
                coming to
                <br />
                <span className="font-medium">Limerick.</span>
              </h1>

              <p className="mb-8 max-w-lg text-lg leading-relaxed text-white/80 md:text-xl">
                A beautifully designed space for Reformer Pilates, Mat Pilates, Yoga & Barre — opening at The Coach House, Henry Street.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 flex items-center justify-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-heading text-sm font-semibold uppercase tracking-[0.15em] text-primary">
                  Our New Home
                </span>
              </div>

              <h2 className="mb-6 font-heading text-3xl font-medium tracking-tight text-foreground md:text-5xl">
                The Coach House, Henry Street
              </h2>

              <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Expect a full timetable of Reformer Pilates, Mat Pilates, Yoga, and Barre — for all levels, led by highly trained instructors in a calm, beautifully designed space.
              </p>

              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {featuredClasses.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm">
                    <p className="text-lg font-heading font-medium text-foreground">{item.label}</p>
                    <p className="mt-1 text-sm text-muted-foreground">All levels welcome</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 font-heading text-3xl font-medium tracking-tight text-foreground md:text-5xl">
                  This is balance.
                </h2>
                <p className="mx-auto max-w-xl text-lg text-muted-foreground">
                  Real people. Real connections. A studio experience that feels like home.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
                <div className="group relative col-span-1 aspect-[3/4] overflow-hidden rounded-2xl">
                  <img
                    src={clientsLaughing}
                    alt="Clients enjoying pilates together"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <p className="absolute bottom-5 left-5 right-5 font-heading text-lg font-medium text-white">
                    The joy of moving together
                  </p>
                </div>

                <div className="group relative col-span-1 aspect-[3/4] overflow-hidden rounded-2xl">
                  <img
                    src={instructorLaughing}
                    alt="Instructor guiding a client"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <p className="absolute bottom-5 left-5 right-5 font-heading text-lg font-medium text-white">
                    Expert guidance, always
                  </p>
                </div>

                <div className="group relative col-span-2 aspect-[3/4] overflow-hidden rounded-2xl md:col-span-1">
                  <img
                    src={clientsStretching}
                    alt="Clients stretching in class"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <p className="absolute bottom-5 left-5 right-5 font-heading text-lg font-medium text-white">
                    Find your flow
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={studioInstructorHelping}
                  alt="balance instructor helping a client on the reformer"
                  className="h-[500px] w-full object-cover"
                />
              </div>

              <div>
                <span className="mb-4 block font-heading text-sm font-semibold uppercase tracking-[0.15em] text-primary">
                  About balance
                </span>
                <h2 className="mb-6 font-heading text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                  For those who expect more.
                </h2>
                <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    Founded in 2015, balance has grown from a small home studio into a premium multi-studio brand — known for high standards, expert teaching, and a fiercely loyal community.
                  </p>
                  <p>
                    With five studios across Kildare, Wicklow and Meath, we're now bringing the balance experience to Limerick — the same warmth, the same quality, and the same commitment to helping you feel your absolute best.
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <p className="font-heading text-3xl font-medium text-foreground">10+</p>
                    <p className="mt-1 text-sm text-muted-foreground">Years</p>
                  </div>
                  <div className="text-center">
                    <p className="font-heading text-3xl font-medium text-foreground">6</p>
                    <p className="mt-1 text-sm text-muted-foreground">Studios</p>
                  </div>
                  <div className="text-center">
                    <p className="font-heading text-3xl font-medium text-foreground">5★</p>
                    <p className="mt-1 text-sm text-muted-foreground">Rated</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
              <div className="order-2 md:order-1">
                <h2 className="mb-8 font-heading text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                  What to expect at balance Limerick
                </h2>

                <div className="space-y-6">
                  {experienceHighlights.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/15">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="mb-1 text-lg font-heading font-medium text-foreground">{item.title}</h3>
                        <p className="leading-relaxed text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="order-1 grid grid-cols-2 gap-4 md:order-2">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <img
                    src={studioInteriorPlants}
                    alt="balance studio interior"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-2xl">
                  <img
                    src={studioWelcome}
                    alt="balance studio welcome"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <Sparkles className="mx-auto mb-6 h-8 w-8 text-primary" />
              <h2 className="mb-4 font-heading text-3xl font-medium tracking-tight text-foreground md:text-5xl">
                Excited to see you soon.
              </h2>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Limerick;
