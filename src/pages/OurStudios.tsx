import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { useState } from "react";
import { MapPin, Clock, Car, ArrowRight, Navigation2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

// Import gallery images
import studioInterior1 from "@/assets/studio-interior-1.png";
import studioReformersRow from "@/assets/studio-reformers-row.jpg";
import studioNeonSign from "@/assets/studio-neon-sign.jpg";
import studioChandelier from "@/assets/hero-studio-chandelier.png";
import studioEntrance from "@/assets/studio-entrance.png";
import studioHallway from "@/assets/studio-hallway.png";
import studioReformersWide from "@/assets/studio-reformers-wide.jpg";
import studioInstructorHelping from "@/assets/studio-instructor-helping.jpg";
import studioBallWorkout from "@/assets/studio-ball-workout.jpg";
import studioLungeWorkout from "@/assets/studio-lunge-workout.jpg";
import studioLegRaise from "@/assets/studio-leg-raise.jpg";
import studioWelcome from "@/assets/studio-welcome.jpg";
import studioMirror from "@/assets/studio-mirror.jpg";
import studioEquipment from "@/assets/studio-equipment.jpg";
import limerickHero from "@/assets/limerick-interior-hero.jpg.asset.json";
import imgClane from "@/assets/studio-clane.jpg";
import imgKildare from "@/assets/studio-kildare.jpg";
import imgBlessington from "@/assets/studio-blessington.jpg";
import imgEnfield from "@/assets/studio-enfield.jpg";
import imgBray from "@/assets/studio-bray.jpg";

const FILTERS = ["All", "Reformer", "Mat", "Barre", "Yoga"] as const;
type Filter = (typeof FILTERS)[number];
const IMAGES: Record<string, string> = { limerick: limerickHero.url, clane: imgClane, kildare: imgKildare, blessington: imgBlessington, enfield: imgEnfield, bray: imgBray };
const CLASSES: Record<string, string[]> = { limerick: ["Reformer","Mat","Barre","Yoga"], clane: ["Reformer"], kildare: ["Reformer","Mat","Barre"], blessington: ["Reformer"], enfield: ["Reformer","Mat"], bray: ["Reformer"] };
const COUNTY: Record<string, string> = { limerick: "Co. Limerick", clane: "Co. Kildare", kildare: "Co. Kildare", blessington: "Co. Wicklow", enfield: "Co. Meath", bray: "Co. Wicklow" };

const OurStudios = () => {
  const [filter, setFilter] = useState<Filter>("All");
  const rawStudios = [
    {
      name: "Limerick Studio",
      slug: "limerick",
      address: "The Coach House, Henry Street, Limerick, Ireland",
      parking: "City centre parking nearby",
      hours: "Now open",
      offerings: "Reformer, Mat, Barre & Yoga",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=The+Coach+House+Henry+Street+Limerick+Ireland",
      hasDetailPage: true,
    },
    {
      name: "Clane Studio",
      slug: "clane",
      address: "Unit 4a, Yew Tree Square, Prosperous Rd, Abbeyland, Clane, Co. Kildare, W91 R642, Ireland",
      parking: "Free parking available nearby",
      hours: "Open 7 Days a Week",
      offerings: "Reformer only",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Unit+4a+Yew+Tree+Square+Prosperous+Rd+Abbeyland+Clane+Co.+Kildare+W91+R642+Ireland",
      hasDetailPage: true,
    },
    {
      name: "Kildare Town Studio",
      slug: "kildare",
      address: "Unit 3 Claregate St, Kildare, R51 E772, Ireland",
      parking: "Street parking and public car park",
      hours: "Open 7 Days a Week",
      offerings: "Reformer, Mat & Barre",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Unit+3+Claregate+St+Kildare+R51+E772+Ireland",
      hasDetailPage: true,
    },
    {
      name: "Blessington Studio",
      slug: "blessington",
      address: "1a The Green, Main St, Blessington, Co. Wicklow, W91 PNV2, Ireland",
      parking: "Free parking on-site",
      hours: "Open 7 Days a Week",
      offerings: "Reformer only",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=1a+The+Green+Main+St+Blessington+Co.+Wicklow+W91+PNV2+Ireland",
      hasDetailPage: true,
    },
    {
      name: "Enfield Studio",
      slug: "enfield",
      address: "Unit 3, Main Street, Enfield, Co. Meath, A83 RP84",
      parking: "Free parking available",
      hours: "Open 7 Days a Week",
      offerings: "Reformer & Mat",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Unit+3+Main+Street+Enfield+Co.+Meath+A83+RP84",
      hasDetailPage: true,
    },
    {
      name: "Bray Studio",
      slug: "bray",
      address: "Industrial Development Agency Business Park, Southern Cross Rd, Irishtown, Bray, Co. Wicklow, A98 T276, Ireland",
      parking: "Free on-site parking",
      hours: "Open 7 Days a Week",
      offerings: "Reformer only",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Balance+Bray+Industrial+Development+Agency+Business+Park+Southern+Cross+Rd+Irishtown+Bray+Co.+Wicklow+A98+T276+Ireland",
      hasDetailPage: true,
    },
  ];

  const studios = rawStudios.map((st) => ({ ...st, name: st.name.replace(" Studio", "").replace(" Town", " town"), image: IMAGES[st.slug], classes: CLASSES[st.slug], county: COUNTY[st.slug], isNew: st.slug === "limerick" }));
  const visible = filter === "All" ? studios : studios.filter((st) => st.classes.includes(filter));

  const galleryImages = [
    { src: studioReformersWide, alt: "balance studio with reformer machines" },
    { src: studioInstructorHelping, alt: "Instructor helping clients on reformers" },
    { src: studioBallWorkout, alt: "Clients doing ball exercises on reformers" },
    { src: studioLungeWorkout, alt: "Clients doing lunge exercises" },
    { src: studioLegRaise, alt: "Clients doing leg raise exercises" },
    { src: studioWelcome, alt: "Welcome to balance studio" },
    { src: studioMirror, alt: "balance studio mirror with branding" },
    { src: studioEquipment, alt: "Pilates equipment and dumbbells" },
    { src: studioChandelier, alt: "Elegant chandelier in balance studio" },
    { src: studioReformersRow, alt: "Reformer machines in a row" },
    { src: studioNeonSign, alt: "balance neon sign" },
    { src: studioInterior1, alt: "balance studio interior" },
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Our Studios | balance studios - 6 Locations in Ireland"
        description="Six stunning Reformer Pilates studios across Limerick, Kildare, Wicklow & Meath. Limerick, Clane, Kildare Town, Blessington, Enfield & Bray. Modern reformers, serene spaces, expert instructors."
        canonical="/our-studios"
      />
      <LocalBusinessSchema />
      <Navigation />
      <main className="">
        <PageHeader 
          title="Take Your Pick" 
          subtitle="Six considered studios across Limerick, Kildare, Wicklow & Meath — small groups, expert instructors, and a space that feels like yours. Choose your studio."
        />

        {/* Filter pills */}
        <section className="pt-8 md:pt-12">
          <div className="container mx-auto px-4">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide justify-start md:justify-center pb-1">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`shrink-0 rounded-full border px-5 py-2 text-sm transition-colors ${
                    filter === f ? "bg-sage border-sage text-foreground" : "border-foreground/20 text-foreground hover:border-sage"
                  }`}
                >
                  {f === "All" ? "All studios" : f}
                </button>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-3">
              {visible.length} {visible.length === 1 ? "studio" : "studios"}{filter !== "All" ? ` offering ${filter}` : ""}
            </p>
          </div>
        </section>

        {/* Studios Grid */}
        <section className="py-8 md:py-14">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {visible.map((studio) => (
                <article key={studio.slug} className="group flex flex-col rounded-2xl overflow-hidden bg-background border border-foreground/10 hover:border-sage transition-colors">
                  <a href={`/studio/${studio.slug}`} className="relative block aspect-[4/3] overflow-hidden">
                    <img src={studio.image} alt={`Inside balance ${studio.name}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <span className="absolute top-3 left-3 rounded-full bg-background/90 px-3 py-1 text-xs text-foreground">{studio.county}</span>
                    {studio.isNew && <span className="absolute top-3 right-3 rounded-full bg-sage px-3 py-1 text-xs text-foreground">New</span>}
                    <h2 className="absolute bottom-3 left-4 font-heading italic text-3xl text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.5)]">
                      {studio.name.toLowerCase()}<span className="text-sage">.</span>
                    </h2>
                  </a>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {studio.classes.map((c) => (
                        <span key={c} className="rounded-full border border-sage/60 px-2.5 py-0.5 text-xs text-foreground">{c}</span>
                      ))}
                    </div>
                    <div className="space-y-2 text-sm mb-5">
                      <div className="flex gap-2.5"><MapPin className="w-4 h-4 text-sage mt-0.5 shrink-0" /><span className="text-muted-foreground leading-snug">{studio.address}</span></div>
                      <div className="flex gap-2.5"><Car className="w-4 h-4 text-sage mt-0.5 shrink-0" /><span className="text-muted-foreground">{studio.parking}</span></div>
                      <div className="flex gap-2.5"><Clock className="w-4 h-4 text-sage mt-0.5 shrink-0" /><span className="text-muted-foreground">{studio.hours}</span></div>
                    </div>
                    <div className="mt-auto grid grid-cols-2 gap-2">
                      <a href={`/studio/${studio.slug}`} className="flex items-center justify-center gap-1.5 rounded-full bg-sage px-4 py-3 text-sm text-foreground hover:opacity-90 transition-opacity">
                        Book here <ArrowRight className="w-4 h-4" />
                      </a>
                      <a href={studio.directionsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 rounded-full border border-foreground/20 px-4 py-3 text-sm text-foreground hover:border-sage transition-colors">
                        <Navigation2 className="w-4 h-4" /> Directions
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Studio Gallery */}
        <section className="py-12 md:py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-heading italic text-foreground mb-4">
                Inside Our Studios
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Step inside and discover the balance. experience — modern reformers, serene spaces, and an atmosphere designed to inspire.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {galleryImages.map((image, index) => (
                <div 
                  key={index}
                  className={`relative overflow-hidden rounded-2xl shadow-lg group ${
                    index === 0 ? 'col-span-2 row-span-2 md:col-span-2 md:row-span-2' : ''
                  }`}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                      index === 0 ? 'h-full min-h-[300px] md:min-h-[450px]' : 'h-48 md:h-64'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default OurStudios;
