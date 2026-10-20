import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { useState } from "react";
import { MapPin, Clock, Car, ArrowRight, Navigation2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

import limerickHero from "@/assets/limerick-interior-hero.jpg.asset.json";
import imgClane from "@/assets/studio-clane.jpg";
import imgKildare from "@/assets/studio-kildare.jpg";
import imgBlessington from "@/assets/studio-blessington.jpg";
import imgEnfield from "@/assets/studio-enfield.jpg";
import imgBray from "@/assets/studio-bray.jpg";

const FILTERS = ["All", "Reformer", "Mat", "Barre", "Yoga"] as const;
type Filter = (typeof FILTERS)[number];
const IMAGES: Record<string, string> = { limerick: limerickHero.url, clane: imgClane, kildare: imgKildare, blessington: imgBlessington, enfield: imgEnfield, bray: imgBray };
const CLASSES: Record<string, string[]> = { limerick: ["Reformer","Mat","Barre","Yoga"], clane: ["Reformer"], kildare: ["Reformer","Mat","Barre","Yoga"], blessington: ["Reformer"], enfield: ["Reformer"], bray: ["Reformer"] };
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
      offerings: "Reformer, Mat, Barre & Yoga",
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
      offerings: "Reformer only",
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
                  aria-pressed={filter === f}
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

        {/* Editorial studio rows */}
        <section className="py-8 md:py-14">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="space-y-10 md:space-y-20">
              {visible.map((studio, i) => (
                <article key={studio.slug} className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12 items-center">
                  <a
                    href={`/studio/${studio.slug}`}
                    className={`group relative block overflow-hidden rounded-2xl aspect-[4/3] md:aspect-[4/5] ${i % 2 === 1 ? "md:order-2" : ""}`}
                  >
                    <img
                      src={studio.image}
                      alt={`Inside balance ${studio.name}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 rounded-full bg-background/90 px-3 py-1 text-xs text-foreground">{studio.county}</span>
                    {studio.isNew && <span className="absolute top-4 right-4 rounded-full bg-sage px-3 py-1 text-xs text-foreground">New</span>}
                  </a>
                  <div className={i % 2 === 1 ? "md:order-1" : ""}>
                    <h2 className="font-heading italic text-4xl md:text-5xl text-foreground">
                      {studio.name.toLowerCase()}<span className="text-sage">.</span>
                    </h2>
                    <p className="mt-1 text-sm uppercase tracking-wide text-muted-foreground">{studio.offerings}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {studio.classes.map((c) => (
                        <span key={c} className="rounded-full border border-sage/60 px-2.5 py-0.5 text-xs text-foreground">{c}</span>
                      ))}
                    </div>
                    <div className="mt-5 space-y-2 text-sm">
                      <div className="flex gap-2.5"><MapPin className="w-4 h-4 text-sage mt-0.5 shrink-0" /><span className="text-muted-foreground leading-snug">{studio.address}</span></div>
                      <div className="flex gap-2.5"><Car className="w-4 h-4 text-sage mt-0.5 shrink-0" /><span className="text-muted-foreground">{studio.parking}</span></div>
                      <div className="flex gap-2.5"><Clock className="w-4 h-4 text-sage mt-0.5 shrink-0" /><span className="text-muted-foreground">{studio.hours}</span></div>
                    </div>
                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <a href={`/studio/${studio.slug}`} className="flex items-center gap-1.5 rounded-full bg-sage px-6 py-3 text-sm text-foreground hover:opacity-90 transition-opacity">
                        Book here <ArrowRight className="w-4 h-4" />
                      </a>
                      <a href={studio.directionsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-foreground underline underline-offset-4 decoration-sage/60 hover:decoration-sage transition-colors">
                        <Navigation2 className="w-4 h-4 text-sage" /> Get directions
                      </a>
                    </div>
                  </div>
                </article>
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
