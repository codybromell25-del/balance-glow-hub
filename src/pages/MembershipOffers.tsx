import { useState } from "react";
import { Link } from "react-router-dom";
import MembershipSection from "@/components/membership/MembershipSection";
import SEO from "@/components/SEO";
import balanceLogo from "@/assets/balance-removebg-preview.png";
import heroImgReformer from "@/assets/studio-blessington.jpg";
import heroImgMat from "@/assets/balance-studio-interior-hero.jpg";
import packsImgReformer from "@/assets/studio-instructor-helping.jpg";
import packsImgMat from "@/assets/clients-mat-workout.jpg";
import membershipsImgReformer from "@/assets/studio-leg-raise.jpg";
import membershipsImgMat from "@/assets/clients-stretching.jpg";

const sage = {
  background:
    "linear-gradient(180deg, #b8d4c3 0%, #A3C1AD 40%, #8fb39c 100%)",
};

type ClassType = "reformer" | "mat";

type Pack = { classes: number; price: string; oldPrice?: string; validity: string; link: string; featured?: boolean };
const reformerPacks: Pack[] = [
  { classes: 1, price: "€24", validity: "Valid 30 days", link: "https://momence.com/balance/membership/Single-Reformer-Class/573997" },
  { classes: 3, price: "€65", validity: "Valid 30 days", link: "https://momence.com/Balance/membership/3-Reformer-Classes/573988" },
  { classes: 6, price: "€130", validity: "Valid 60 days", link: "https://momence.com/Balance/membership/6-Reformer-Classes/573990" },
  { classes: 10, price: "€215", validity: "Valid ~10 mo", link: "https://momence.com/Balance/membership/10-Reformer-Classes/573992", featured: true },
  { classes: 20, price: "€400", validity: "Valid ~20 mo", link: "https://momence.com/Balance/membership/20-Reformer-Classes/573995" },
];

const matPacks: Pack[] = [
  { classes: 1, price: "€15", validity: "Valid 30 days", link: "https://momence.com/m/573998" },
  { classes: 3, price: "€42", validity: "Valid 30 days", link: "https://momence.com/m/771509", featured: true },
  { classes: 6, price: "€84", validity: "Valid 60 days", link: "https://momence.com/m/771510" },
];

const MembershipOffers = () => {
  const [classType, setClassType] = useState<ClassType>("reformer");
  const classPacks = classType === "reformer" ? reformerPacks : matPacks;
  const packsKicker = classType === "reformer" ? "01 — Reformer Class Packs" : "01 — Mat · Barre · Yoga Class Packs";
  const membershipsKicker = classType === "reformer" ? "02 — Reformer Memberships" : "02 — Mat · Barre · Yoga Memberships";
  const packsCopy = classType === "reformer"
    ? "No commitment, no auto-renewal. Buy a pack, book classes when it suits you, use them across any of our six studios."
    : "Pick & mix across Mat, Barre and Yoga classes. No commitment, no auto-renewal — practice on your own schedule.";
  const membershipsCopy = classType === "reformer"
    ? "For those who want to make movement a habit. Lower per-class rates, priority feel, full access across all six studios."
    : "Best value for a regular Mat, Barre or Yoga practice. Auto-renews monthly, cancel anytime.";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Memberships & Class Packs | balance studios"
        description="Reformer pilates memberships and class packs at balance studios."
        noindex
      />

      {/* Minimal top bar — logo links home */}
      <header className="absolute top-0 left-0 right-0 z-20 px-6 md:px-10 py-5 flex justify-center md:justify-start items-center">
        <Link to="/" className="inline-flex items-center" aria-label="balance studios — home">
          <img src={balanceLogo} alt="balance studios" className="h-16 w-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]" />
        </Link>
      </header>

      {/* Hero */}
      <section className="relative min-h-[75vh] md:min-h-[75vh] flex items-end overflow-hidden">
        <img
          src={classType === "reformer" ? heroImgReformer : heroImgMat}
          alt={classType === "reformer" ? "balance reformer pilates studio" : "balance studios interior"}
          className="absolute inset-0 w-full h-full object-cover"
          width={1600}
          height={1200}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-6 md:px-10 pb-16 md:pb-24">
          <div className="max-w-3xl">
            <p className="text-sm md:text-base tracking-[0.25em] uppercase text-[#C8E0CC] mb-5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Memberships &amp; Class Packs
            </p>
            <h1 className="font-heading text-5xl md:text-7xl leading-[1.05] tracking-tight text-[#C8E0CC] drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
              Move with intention.<br />
              <span className="italic text-[#C8E0CC]">Stay for the feeling.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white max-w-xl leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
              A quiet, considered way to practice — across six studios in Ireland.
              Choose the rhythm that fits your life.
            </p>
          </div>
        </div>
      </section>

      {/* Class type toggle */}
      <section className="">
        <div className="container mx-auto px-6 md:px-10 flex justify-center">
          <div className="inline-flex p-1 rounded-full border border-foreground/15 bg-background">
            <button
              onClick={() => setClassType("reformer")}
              className={`px-5 md:px-7 py-2.5 rounded-full text-xs md:text-sm tracking-[0.2em] uppercase font-heading transition-all ${
                classType === "reformer" ? "text-black" : "text-foreground/60 hover:text-foreground"
              }`}
              style={classType === "reformer" ? sage : undefined}
            >
              Reformer
            </button>
            <button
              onClick={() => setClassType("mat")}
              className={`px-5 md:px-7 py-2.5 rounded-full text-xs md:text-sm tracking-[0.2em] uppercase font-heading transition-all ${
                classType === "mat" ? "text-black" : "text-foreground/60 hover:text-foreground"
              }`}
              style={classType === "mat" ? sage : undefined}
            >
              Mat · Barre · Yoga
            </button>
          </div>
        </div>
      </section>

      {/* Studio availability — Mat / Barre / Yoga only */}
      {classType === "mat" && (
        <section className="pt-10 md:pt-14">
          <div className="container mx-auto px-6 md:px-10">
            <div className="max-w-4xl mx-auto">
              <p className="text-center text-xs tracking-[0.25em] uppercase text-foreground/55 mb-6">
                Where to find these classes
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "Mat Pilates", studios: "Limerick · Kildare Town" },
                  { label: "Barre", studios: "Limerick · Kildare Town" },
                  { label: "Yoga", studios: "Limerick · Kildare Town" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="bg-background border border-foreground/10 rounded-sm p-5 text-center"
                  >
                    <p className="font-heading text-lg text-foreground">{row.label}</p>
                    <p className="mt-2 text-sm text-foreground/65 leading-relaxed">{row.studios}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-center text-xs text-foreground/55">
                Reformer classes are available at all six studios.
              </p>
            </div>
          </div>
        </section>
      )}

      <MembershipSection classType={classType} />

      {/* Class Packs */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-10 md:mb-14">
            <p className="text-xs tracking-[0.25em] uppercase text-foreground/60">{packsKicker}</p>
            <h2 className="mt-3 font-heading text-4xl md:text-5xl tracking-tight">
              Practice at your own pace.
            </h2>
            <p className="mt-4 text-foreground/70 leading-relaxed max-w-2xl">
              {packsCopy}
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-10">
              <div className="overflow-hidden rounded-sm">
                <img
                  src={classType === "reformer" ? packsImgReformer : packsImgMat}
                  alt={classType === "reformer" ? "Reformer pilates straps" : "Mat pilates class at balance"}
                  loading="lazy"
                  width={1200}
                  height={1400}
                  className="w-full h-[420px] md:h-[560px] object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="divide-y divide-foreground/10 border-y border-foreground/10">
                {classPacks.map((pack) => (
                  <a
                    key={pack.classes}
                    href={pack.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-6 py-7 transition-colors hover:bg-foreground/[0.02] px-2 -mx-2"
                  >
                    <div className="flex items-center gap-5 min-w-0">
                      <span className="font-heading text-4xl md:text-5xl tracking-tight text-foreground tabular-nums leading-none">
                        {pack.classes}
                      </span>
                      <div className="min-w-0">
                        <p className="font-heading text-lg text-foreground">
                          {pack.classes === 1 ? "Drop-in Class" : "Class Pack"}
                          {pack.featured && (
                            <span className="ml-3 inline-block text-[10px] tracking-[0.2em] uppercase text-foreground/60 align-middle">
                              · Most loved
                            </span>
                          )}
                        </p>
                        <p className="text-sm text-foreground/60 mt-1">
                          {pack.validity}
                          {pack.oldPrice && (
                            <span className="ml-2 inline-block px-2 py-0.5 rounded-full bg-foreground text-background text-[10px] uppercase tracking-[0.18em]">
                              Summer Sale
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-5 shrink-0">
                      <span className="flex items-baseline gap-2">
                        {pack.oldPrice && (
                          <span className="font-heading text-base md:text-lg text-foreground/40 line-through tabular-nums">
                            {pack.oldPrice}
                          </span>
                        )}
                        <span className="font-heading text-2xl md:text-3xl text-foreground tabular-nums">
                          {pack.price}
                        </span>
                      </span>
                      <span
                        className="hidden md:inline-flex items-center justify-center w-11 h-11 rounded-full text-black transition-transform group-hover:translate-x-1"
                        style={sage}
                        aria-hidden
                      >
                        →
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-10 text-center max-w-2xl">
          <p className="font-heading text-2xl md:text-3xl italic text-foreground/85 leading-relaxed">
            "It's all about balance."
          </p>
          <div className="mt-10">
            <Link
              to="/"
              className="inline-block text-sm tracking-[0.2em] uppercase text-foreground/70 hover:text-foreground border-b border-foreground/30 hover:border-foreground pb-1 transition-colors"
            >
              Return home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MembershipOffers;
