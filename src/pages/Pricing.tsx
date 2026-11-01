import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { reformerMembershipPlans, matMembershipPlans, popUpMemberPrice, popUpPrice, type MembershipPlan } from "@/lib/membershipPlans";

type ClassType = "reformer" | "mat";
type Pack = { classes: number; price: number; days: number; link: string };

const data: Record<ClassType, { dropIn: number; plans: MembershipPlan[]; packs: Pack[]; intro: { label: string; link: string }; where: string; unlimitedNote: string }> = {
  reformer: {
    dropIn: 24,
    plans: reformerMembershipPlans,
    packs: [
      { classes: 1, price: 24, days: 30, link: "https://momence.com/balance/membership/Single-Reformer-Class/573997" },
      { classes: 3, price: 65, days: 30, link: "https://momence.com/Balance/membership/3-Reformer-Classes/573988" },
      { classes: 6, price: 130, days: 60, link: "https://momence.com/Balance/membership/6-Reformer-Classes/573990" },
      { classes: 10, price: 215, days: 310, link: "https://momence.com/Balance/membership/10-Reformer-Classes/573992" },
      { classes: 20, price: 400, days: 610, link: "https://momence.com/Balance/membership/20-Reformer-Classes/573995" },
    ],
    intro: { label: "3 Reformer classes for €50", link: "https://momence.com/balance/membership/Intro-Offer---3-Reformer-Classes/574031" },
    where: "Reformer classes are available at all six studios.",
    unlimitedNote: "Daily Reformer classes",
  },
  mat: {
    dropIn: 15,
    plans: matMembershipPlans,
    packs: [
      { classes: 1, price: 15, days: 30, link: "https://momence.com/m/573998" },
      { classes: 3, price: 42, days: 30, link: "https://momence.com/m/771509" },
      { classes: 6, price: 84, days: 60, link: "https://momence.com/m/771510" },
    ],
    intro: { label: "3 Mat, Barre or Yoga classes for €40", link: "https://momence.com/balance/membership/Intro-Offer---3-Mat-%2F-Barre-%2F-Yoga-classes-for-%E2%82%AC40/771466" },
    where: "Mat, Barre & Yoga run at Limerick and Kildare Town.",
    unlimitedNote: "",
  },
};

const eur = (n: number) => `€${Number.isInteger(n) ? n : n.toFixed(2)}`;
const gridCols: Record<number, string> = { 2: "lg:grid-cols-2 max-w-2xl mx-auto", 3: "lg:grid-cols-3 max-w-2xl mx-auto", 4: "lg:grid-cols-4", 5: "lg:grid-cols-5" };
const isNum = (p: MembershipPlan): p is MembershipPlan & { classes: number } => typeof p.classes === "number";
const planName = (p: MembershipPlan) => (isNum(p) ? `${p.classes} classes` : "Unlimited");

const perks = [
  { icon: "↺", title: "Life happens", text: "Keep one unused class — it rolls into next month.", tone: "bg-sage/25" },
  { icon: "⌂", title: "balance at home", text: "An online library of short Mat Pilates classes.", tone: "bg-accent" },
  { icon: "15%", title: "First in, a little less", text: `Early pop-up booking and ${eur(popUpMemberPrice)} instead of ${eur(popUpPrice)}.`, tone: "bg-primary/50" },
  { icon: "✿", title: "Little surprises", text: "Loyalty rewards and thank-you treats as you keep coming.", tone: "bg-sage/25" },
];

const Dot = ({ q }: { q?: boolean }) => <span className="text-sage">{q ? "?" : "."}</span>;
const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[11px] md:text-xs tracking-[0.2em] uppercase text-sage-deep font-semibold mb-3">{children}</p>
);

const Pricing = () => {
  const [type, setType] = useState<ClassType>("reformer");
  const [freq, setFreq] = useState(1);
  const d = data[type];
  const popularIdx = type === "reformer" ? 2 : 1;

  const suggestion = (() => {
    const wanted = [4, 8, 12, Infinity][freq];
    const plans = d.plans;
    return plans.find((p) => (isNum(p) ? p.classes >= wanted : wanted === Infinity)) ?? plans[plans.length - 1];
  })();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Pricing & Memberships | balance studios - Reformer Pilates"
        description="Reformer Pilates class packs from €24 and memberships from €85. New here? 3 classes for €50, valid at all 6 balance studios."
        canonical="/pricing"
      />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-accent to-background pt-32 md:pt-40 pb-14 md:pb-20 text-center px-5">
          <Eyebrow>Pricing · six studios · one membership</Eyebrow>
          <h1 className="font-heading italic text-5xl md:text-8xl leading-[1.02] max-w-4xl mx-auto">
            More from your membership<Dot />
          </h1>
          <p className="mt-6 text-base md:text-xl max-w-xl mx-auto text-foreground/75">
            Find your monthly rhythm, enjoy a little more from balance, or choose a flexible class pack.
          </p>
          <div className="mt-8 inline-flex p-1.5 rounded-full bg-card border border-border shadow-sm">
            {(["reformer", "mat"] as ClassType[]).map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`px-5 md:px-8 py-2.5 rounded-full font-heading text-sm md:text-lg transition-all ${type === t ? "bg-sage text-sage-foreground shadow" : "text-foreground/60 hover:text-foreground"}`}
              >
                {t === "reformer" ? "Reformer" : "Mat, Barre & Yoga"}
              </button>
            ))}
          </div>
        </section>

        {/* Membership cards */}
        <section className="container mx-auto px-5 py-12 md:py-20 max-w-6xl">
          <div className="grid md:grid-cols-[1fr_auto] gap-6 items-end mb-10">
            <div>
              <Eyebrow>Monthly memberships · {type === "reformer" ? "all six studios" : "Limerick & Kildare Town"}</Eyebrow>
              <h2 className="font-heading italic text-4xl md:text-6xl">Find your monthly rhythm<Dot /></h2>
            </div>
            <p className="text-sm md:text-base text-foreground/70 max-w-sm">
              The more you move, the less each class costs. Every plan auto-renews monthly — cancel with 7 days' notice.
            </p>
          </div>

          <div className={`grid gap-4 grid-cols-1 sm:grid-cols-2 ${gridCols[d.plans.length] ?? "lg:grid-cols-5"}`}>
            {d.plans.map((p, i) => {
              const popular = i === popularIdx;
              const save = isNum(p) ? p.classes * d.dropIn - p.price : 0;
              return (
                <div key={planName(p)} className={`relative flex flex-col rounded-3xl border bg-card p-6 ${popular ? "border-sage-deep shadow-xl" : "border-border"}`}>
                  {popular && (
                    <span className="absolute -top-3 left-6 rounded-full bg-sage-deep text-background text-xs px-3 py-1">Most chosen</span>
                  )}
                  <h3 className="font-heading italic text-xl">{planName(p)}</h3>
                  <p className="mt-2 font-heading text-4xl xl:text-[2.6rem] whitespace-nowrap">
                    {eur(p.price)} <span className="font-body text-sm text-foreground/60">/month</span>
                  </p>
                  {isNum(p) ? (
                    <div className="mt-3 text-sm">
                      <p className="font-semibold">{eur(Math.round((p.price / p.classes) * 100) / 100)} per class</p>
                      {save > 0 && <p className="text-foreground/60 text-xs">Save {eur(save)} vs drop-in</p>}
                    </div>
                  ) : (
                    <div className="mt-3 text-sm">
                      <p className="font-semibold">Make movement your rhythm</p>
                      <p className="text-foreground/60 text-xs">Best for 3+ classes a week</p>
                    </div>
                  )}
                  <div className="my-5 border-t border-border" />
                  <p className="text-sm flex gap-2 flex-1">
                    <span className="text-sage-deep">✓</span>
                    {isNum(p) ? "One-class rollover" : d.unlimitedNote}
                  </p>
                  {p.link ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-6 rounded-xl py-3 text-center font-heading transition hover:brightness-105 ${popular ? "bg-sage-deep text-background" : "bg-sage text-sage-foreground"}`}
                    >
                      Join now →
                    </a>
                  ) : (
                    <p className="mt-6 rounded-xl border border-dashed border-border py-2.5 text-center text-sm text-foreground/60">Joining link coming soon</p>
                  )}
                </div>
              );
            })}
          </div>
          <p className="mt-6 text-xs text-foreground/60 max-w-3xl">
            Auto-renews monthly. Cancel with 7 days' notice before your next billing date. Rollover applies to limited monthly memberships, not Unlimited. The pop-up discount does not apply to holiday bring-a-guest classes. {d.where}
          </p>
        </section>

        {/* Perks */}
        <section className="container mx-auto px-5 py-12 md:py-20 max-w-6xl">
          <h2 className="font-heading italic text-4xl md:text-6xl text-center mb-10">Little things members love<Dot /></h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((k, i) => (
              <div key={k.title} className={`${k.tone} rounded-[2rem] p-7 ${i % 2 ? "md:rotate-1" : "md:-rotate-1"}`}>
                <p className="font-heading italic text-2xl text-sage-deep">{k.icon}</p>
                <h3 className="mt-4 font-semibold text-lg">{k.title}</h3>
                <p className="mt-2 text-sm text-foreground/75">{k.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* At a glance */}
        <section className="container mx-auto px-5 py-12 md:py-20 max-w-6xl">
          <h2 className="font-heading italic text-4xl md:text-6xl text-center mb-10">Everything, at a glance<Dot /></h2>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-6 md:p-9">
              <h3 className="font-heading italic text-2xl pb-4 border-b border-border">Monthly memberships</h3>
              {d.plans.map((p) => (
                <div key={planName(p)} className="flex items-center gap-3 py-4 border-b border-border last:border-0 text-sm">
                  <p className="flex-1">
                    <span className="font-semibold">{planName(p)}</span>
                    <span className="text-foreground/60"> · {isNum(p) ? `${eur(Math.round((p.price / p.classes) * 100) / 100)}/class` : d.unlimitedNote.toLowerCase()}</span>
                  </p>
                  <span className="font-heading text-2xl">{eur(p.price)}</span>
                  {p.link ? (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="w-14 text-right font-semibold text-sage-deep">Join →</a>
                  ) : (
                    <span className="w-14 text-right font-semibold text-sage-deep">Soon</span>
                  )}
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-border bg-card p-6 md:p-9">
              <h3 className="font-heading italic text-2xl pb-4 border-b border-border">Class packs</h3>
              {d.packs.map((k) => (
                <div key={k.classes} className="flex items-center gap-3 py-4 border-b border-border last:border-0 text-sm">
                  <p className="flex-1">
                    <span className="font-semibold">{k.classes} {k.classes === 1 ? "class" : "classes"}</span>
                    <span className="text-foreground/60"> · valid {k.days} days</span>
                  </p>
                  <span className="font-heading text-2xl">{eur(k.price)}</span>
                  <a href={k.link} target="_blank" rel="noopener noreferrer" className="w-14 text-right font-semibold text-sage-deep">Buy →</a>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-6 text-xs text-foreground/60 text-center">
            Memberships auto-renew monthly; cancel with 7 days' notice. Packs valid from first class. New here?{" "}
            <a href={d.intro.link} target="_blank" rel="noopener noreferrer" className="underline">{d.intro.label}</a> ·{" "}
            <a href="/faq" className="underline">FAQ</a>
          </p>
        </section>

        {/* Planner */}
        <section className="bg-accent/60 py-16 md:py-24">
          <div className="container mx-auto px-5 max-w-6xl grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <Eyebrow>Self-serve · 10 seconds</Eyebrow>
              <h2 className="font-heading italic text-4xl md:text-6xl leading-tight">Still not sure which suits you<Dot q /></h2>
              <p className="mt-4 text-lg text-foreground/75">Pick how often you'll come to see the membership we'd recommend.</p>
              <p className="mt-4 text-foreground/70">Rather chat? <a href="mailto:info@balancestudios.ie" className="underline text-foreground">info@balancestudios.ie</a></p>
            </div>
            <div className="rounded-3xl bg-card p-6 md:p-9 shadow-xl">
              <h3 className="font-heading italic text-xl mb-4">How often will you come?</h3>
              <div className="grid grid-cols-4 gap-2">
                {["1×", "2×", "3×", "4+"].map((l, i) => (
                  <button
                    key={l}
                    onClick={() => setFreq(i)}
                    className={`rounded-xl border py-3 transition ${freq === i ? "bg-sage-deep text-background border-sage-deep" : "border-border bg-background hover:border-sage"}`}
                  >
                    <span className="block font-heading text-xl">{l}</span>
                    <span className="text-[11px]">a week</span>
                  </button>
                ))}
              </div>
              <div className="my-6 border-t border-border" />
              <Eyebrow>We'd suggest</Eyebrow>
              <div className="flex items-baseline justify-between">
                <p className="font-heading italic text-3xl">{planName(suggestion)}</p>
                <p className="font-heading text-4xl">{eur(suggestion.price)} <span className="font-body text-sm text-foreground/60">/month</span></p>
              </div>
              {isNum(suggestion) && (
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-accent p-3">
                    <p className="text-xs text-foreground/60">Per class</p>
                    <p className="font-semibold">{eur(Math.round((suggestion.price / suggestion.classes) * 100) / 100)}</p>
                  </div>
                  <div className="rounded-xl bg-sage/25 p-3">
                    <p className="text-xs text-foreground/60">vs drop-in each month</p>
                    <p className="font-semibold">Save {eur(suggestion.classes * d.dropIn - suggestion.price)}</p>
                  </div>
                </div>
              )}
              {suggestion.link ? (
                <a href={suggestion.link} target="_blank" rel="noopener noreferrer" className="mt-5 block rounded-xl bg-sage-deep text-background py-3.5 text-center font-heading">
                  Join {planName(suggestion)} →
                </a>
              ) : (
                <p className="mt-5 rounded-xl border border-dashed border-border py-3 text-center text-sm text-foreground/60">Joining link coming soon</p>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
