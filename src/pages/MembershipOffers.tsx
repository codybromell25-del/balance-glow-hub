import { useState } from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
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

type Pack = { classes: number; price: string; validity: string; link: string; featured?: boolean };
type Membership = { classes: string; price: string; perClass: string; link: string; featured?: boolean };

const reformerPacks: Pack[] = [
  { classes: 1, price: "€24", validity: "Valid 30 days", link: "https://momence.com/balance/membership/Single-Reformer-Class/573997" },
  { classes: 3, price: "€65", validity: "Valid 30 days", link: "https://momence.com/Balance/membership/3-Reformer-Classes/573988" },
  { classes: 6, price: "€130", validity: "Valid 60 days", link: "https://momence.com/Balance/membership/6-Reformer-Classes/573990" },
  { classes: 10, price: "€215", validity: "Valid ~10 mo", link: "https://momence.com/Balance/membership/10-Reformer-Classes/573992", featured: true },
  { classes: 20, price: "€400", validity: "Valid ~20 mo", link: "https://momence.com/Balance/membership/20-Reformer-Classes/573995" },
];

const reformerMemberships: Membership[] = [
  { classes: "4", price: "€80", perClass: "€20 / class", link: "https://momence.com/Balance/membership/Monthly-Membership---4-classes/574026" },
  { classes: "6", price: "€120", perClass: "€20 / class", link: "https://momence.com/Balance/membership/Monthly-Membership---6-classes/574023" },
  { classes: "8", price: "€160", perClass: "€20 / class", link: "https://momence.com/Balance/membership/Monthly-membership---8-classes/574021", featured: true },
  { classes: "Unlimited", price: "€240", perClass: "Best value", link: "https://momence.com/Balance/membership/Monthly-Membership---Unlimited-Reformer-classes/574005", featured: true },
];

const matPacks: Pack[] = [
  { classes: 1, price: "€15", validity: "Valid 30 days", link: "https://momence.com/m/573998" },
  { classes: 3, price: "€42", validity: "Valid 30 days", link: "https://momence.com/m/771509", featured: true },
  { classes: 6, price: "€84", validity: "Valid 60 days", link: "https://momence.com/m/771510" },
];

const matMemberships: Membership[] = [
  { classes: "4", price: "€50", perClass: "€12.50 / class", link: "https://momence.com/m/771514" },
  { classes: "6", price: "€75", perClass: "€12.50 / class", link: "https://momence.com/m/771691", featured: true },
];

const MembershipOffers = () => {
  const [classType, setClassType] = useState<ClassType>("reformer");
  const classPacks = classType === "reformer" ? reformerPacks : matPacks;
  const memberships = classType === "reformer" ? reformerMemberships : matMemberships;
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
      <section className="relative min-h-[55vh] md:min-h-[60vh] flex items-end overflow-hidden">
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
      <section className="pt-16 md:pt-20">
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
                  { label: "Mat Pilates", studios: "Enfield · Limerick · Kildare Town" },
                  { label: "Barre", studios: "Limerick · Kildare Town" },
                  { label: "Yoga", studios: "Limerick only" },
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
                        <p className="text-sm text-foreground/60 mt-1">{pack.validity}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-5 shrink-0">
                      <span className="font-heading text-2xl md:text-3xl text-foreground tabular-nums">
                        {pack.price}
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

      {/* Memberships */}
      <section className="py-20 md:py-28 bg-foreground/[0.03]">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-12 md:mb-16">
            <p className="text-xs tracking-[0.25em] uppercase text-foreground/60">{membershipsKicker}</p>
            <h2 className="mt-3 font-heading text-4xl md:text-5xl tracking-tight">
              A monthly rhythm.
            </h2>
            <p className="mt-4 text-foreground/70 leading-relaxed max-w-xl">
              {membershipsCopy}
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-5">
                {memberships.map((m) => (
                  <a
                    key={m.classes}
                    href={m.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative flex flex-col justify-between bg-background border rounded-sm p-8 transition-all hover:shadow-lg hover:-translate-y-0.5 ${
                      m.featured ? "border-[#A3C1AD]" : "border-foreground/10 hover:border-foreground/30"
                    }`}
                  >
                    {m.featured && (
                      <span
                        className="absolute -top-2 left-8 text-[10px] tracking-[0.2em] uppercase px-3 py-1 text-black rounded-full"
                        style={sage}
                      >
                        Favourite
                      </span>
                    )}
                    <div>
                      <p className="text-xs tracking-[0.25em] uppercase text-foreground/55">Monthly</p>
                      <h3 className="mt-3 font-heading text-3xl tracking-tight">
                        {m.classes} {m.classes === "Unlimited" ? "" : "Classes"}
                      </h3>
                      <p className="mt-5 font-heading text-5xl tracking-tight text-foreground tabular-nums">
                        {m.price}
                      </p>
                      <p className="text-sm text-foreground/60 mt-1">{m.perClass}</p>
                    </div>
                    <ul className="mt-8 space-y-2 text-sm text-foreground/70">
                      {["Auto-renews monthly", "Valid at all six studios", "Cancel anytime"].map((f) => (
                        <li key={f} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-foreground/50" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 pt-5 border-t border-foreground/10 flex items-center justify-between">
                      <span className="text-sm font-heading tracking-wide text-foreground">Choose plan</span>
                      <span className="text-foreground/50 transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </a>
                ))}
              </div>
              <p className="mt-6 text-xs text-foreground/55 leading-relaxed">
                Memberships auto-renew monthly. Unused classes don't roll over. Cancel anytime with 7 days notice before your next billing date.
              </p>
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-10">
              <div className="overflow-hidden rounded-sm">
                <img
                  src={classType === "reformer" ? membershipsImgReformer : membershipsImgMat}
                  alt={classType === "reformer" ? "Practitioner on a reformer in soft daylight" : "Yoga and stretching at balance studios"}
                  loading="lazy"
                  width={1200}
                  height={1400}
                  className="w-full h-[420px] md:h-[560px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-10 text-center max-w-2xl">
          <p className="text-xs tracking-[0.3em] uppercase text-foreground/55 mb-5">
            balance studios
          </p>
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
