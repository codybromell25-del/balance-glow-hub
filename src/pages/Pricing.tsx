import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import introReformerImg from "@/assets/limerick-reformer-laughing.jpg";
import introMatImg from "@/assets/studio-ball-workout.jpg";

type ClassType = "reformer" | "mat";

type Pack = { classes: number; price: number; validity: string; link: string; tag?: string };
type Membership = { classes: number | "Unlimited"; price: number; link: string; tag?: string };

const DATA: Record<ClassType, {
  intro: { title: string; sub: string; points: string[]; link: string; img: string };
  packsTitle: string; packsSub: string; packs: Pack[];
  memTitle: string; memSub: string; memberships: Membership[];
  where?: string;
}> = {
  reformer: {
    intro: {
      title: "3 classes for €50",
      sub: "Your first taste of reformer at balance.",
      points: ["Any of our 6 studios", "Valid 30 days from purchase", "First-time clients only"],
      link: "https://momence.com/balance/membership/Intro-Offer---3-Reformer-Classes/574031",
      img: introReformerImg,
    },
    packsTitle: "reformer packs",
    packsSub: "Use at any of our 6 studios.",
    packs: [
      { classes: 1, price: 24, validity: "30 days", link: "https://momence.com/balance/membership/Single-Reformer-Class/573997" },
      { classes: 3, price: 65, validity: "30 days", link: "https://momence.com/Balance/membership/3-Reformer-Classes/573988" },
      { classes: 6, price: 130, validity: "60 days", link: "https://momence.com/Balance/membership/6-Reformer-Classes/573990" },
      { classes: 10, price: 215, validity: "310 days", link: "https://momence.com/Balance/membership/10-Reformer-Classes/573992", tag: "best value" },
      { classes: 20, price: 400, validity: "610 days", link: "https://momence.com/Balance/membership/20-Reformer-Classes/573995" },
    ],
    memTitle: "reformer memberships",
    memSub: "Best for regular practice. Renews monthly.",
    memberships: [
      { classes: 4, price: 80, link: "https://momence.com/Balance/membership/Monthly-Membership---4-classes/574026" },
      { classes: 6, price: 120, link: "https://momence.com/Balance/membership/Monthly-Membership---6-classes/574023" },
      { classes: 8, price: 160, link: "https://momence.com/Balance/membership/Monthly-membership---8-classes/574021", tag: "most popular" },
      { classes: "Unlimited", price: 240, link: "https://momence.com/Balance/membership/Monthly-Membership---Unlimited-Reformer-classes/574005" },
    ],
  },
  mat: {
    intro: {
      title: "3 classes for €40",
      sub: "Pick & mix across Mat, Barre & Yoga.",
      points: ["Mix any Mat, Barre or Yoga class", "Valid 30 days from your first class", "First-time clients only"],
      link: "https://momence.com/balance/membership/Intro-Offer---3-Mat-%2F-Barre-%2F-Yoga-classes-for-%E2%82%AC40/771466",
      img: introMatImg,
    },
    packsTitle: "mat, barre & yoga packs",
    packsSub: "Pick & mix across all three.",
    packs: [
      { classes: 1, price: 15, validity: "30 days", link: "https://momence.com/m/573998" },
      { classes: 3, price: 42, validity: "30 days", link: "https://momence.com/m/771509" },
      { classes: 6, price: 84, validity: "60 days", link: "https://momence.com/m/771510", tag: "best value" },
    ],
    memTitle: "mat, barre & yoga memberships",
    memSub: "Best for regular practice. Renews monthly.",
    memberships: [
      { classes: 4, price: 50, link: "https://momence.com/m/771514" },
      { classes: 6, price: 75, link: "https://momence.com/m/771691", tag: "most popular" },
    ],
    where: "Mat, Barre & Yoga run at Limerick and Kildare Town.",
  },
};

const euro = (n: number) => `€${Number.isInteger(n) ? n : n.toFixed(2)}`;

const Row = ({ name, price, detail, sub, link, tag }: { name: string; price: number; detail: string; sub: string; link: string; tag?: string }) => (
  <li className="flex items-center gap-4 py-4 md:py-5 border-b border-foreground/10 last:border-0">
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-2 flex-wrap">
        <h3 className="font-heading italic text-xl md:text-2xl text-foreground">{name}</h3>
        {tag && <span className="text-[10px] uppercase tracking-[0.18em] bg-sage text-foreground px-2 py-0.5 rounded-full">{tag}</span>}
      </div>
      <p className="text-xs md:text-sm text-muted-foreground mt-0.5">{detail} · {sub}</p>
    </div>
    <span className="font-heading text-2xl md:text-3xl text-foreground">{euro(price)}</span>
    <a href={link} target="_blank" rel="noopener noreferrer"
      className="shrink-0 rounded-full bg-sage hover:bg-sage-deep transition-colors text-foreground text-sm font-medium px-5 py-2.5">
      Buy
    </a>
  </li>
);

const Pricing = () => {
  const [classType, setClassType] = useState<ClassType>("reformer");
  const d = DATA[classType];

  return (
    <div className="min-h-screen">
      <SEO
        title="Pricing & Memberships | balance studios - Reformer Pilates"
        description="Flexible class packs from €24 and monthly memberships from €80. New clients: 3 classes for €50 intro offer. Valid at all 6 balance studios across Limerick, Kildare, Wicklow and Meath."
        canonical="/pricing"
      />
      <Navigation />
      <main>
        <section className="pt-10 md:pt-16 pb-6 text-center container mx-auto px-4">
          <h1 className="font-heading italic text-5xl md:text-7xl text-foreground">
            pick your pack<span className="text-sage">.</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">Buy a pack, then book classes at any of our 6 studios.</p>

          <div className="mt-8 inline-flex p-1 rounded-full border border-foreground/15">
            {(["reformer", "mat"] as ClassType[]).map((t) => (
              <button key={t} onClick={() => setClassType(t)}
                className={`px-5 md:px-7 py-2 rounded-full text-sm transition-colors ${classType === t ? "bg-sage text-foreground" : "text-foreground/60 hover:text-foreground"}`}>
                {t === "reformer" ? "Reformer" : "Mat, Barre & Yoga"}
              </button>
            ))}
          </div>
          {d.where && <p className="mt-4 text-sm text-muted-foreground">{d.where}</p>}
        </section>

        {/* Intro offer */}
        <section className="container mx-auto px-4 py-6 md:py-10">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 md:gap-10 items-center">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img src={d.intro.img} alt="Class at a balance studio" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="text-center md:text-left">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">New to balance</p>
              <h2 className="font-heading italic text-4xl md:text-5xl text-foreground mt-2">
                {d.intro.title}<span className="text-sage">.</span>
              </h2>
              <p className="mt-3 text-muted-foreground">{d.intro.sub}</p>
              <ul className="mt-4 space-y-1 text-sm text-foreground">
                {d.intro.points.map((p) => <li key={p}><span className="text-sage mr-2">•</span>{p}</li>)}
              </ul>
              <a href={d.intro.link} target="_blank" rel="noopener noreferrer"
                className="mt-6 inline-block rounded-full bg-sage hover:bg-sage-deep transition-colors text-foreground font-medium px-8 py-3.5">
                Claim intro offer
              </a>
            </div>
          </div>
        </section>

        {/* Packs */}
        <section className="container mx-auto px-4 py-10 md:py-14">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading italic text-3xl md:text-4xl text-foreground">{d.packsTitle}<span className="text-sage">.</span></h2>
            <p className="text-muted-foreground mt-1">{d.packsSub}</p>
            <ul className="mt-4">
              {d.packs.map((p) => (
                <Row key={p.classes} name={`${p.classes} ${p.classes === 1 ? "class" : "classes"}`} price={p.price}
                  detail={`${euro(p.price / p.classes)} per class`} sub={`valid ${p.validity}`} link={p.link} tag={p.tag} />
              ))}
            </ul>
          </div>
        </section>

        {/* Memberships */}
        <section className="container mx-auto px-4 py-10 md:py-14">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading italic text-3xl md:text-4xl text-foreground">{d.memTitle}<span className="text-sage">.</span></h2>
            <p className="text-muted-foreground mt-1">{d.memSub}</p>
            <ul className="mt-4">
              {d.memberships.map((m) => (
                <Row key={String(m.classes)} name={m.classes === "Unlimited" ? "unlimited" : `${m.classes} classes / month`} price={m.price}
                  detail={m.classes === "Unlimited" ? "unlimited classes" : `${euro(m.price / m.classes)} per class`} sub="renews monthly" link={m.link} tag={m.tag} />
              ))}
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section className="container mx-auto px-4 py-10 md:py-14">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading italic text-3xl md:text-4xl text-foreground">how it works<span className="text-sage">.</span></h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[["1", "Buy your pack", "Pick a pack or membership above."], ["2", "Book in the app", "Choose any class at any studio."], ["3", "Arrive 10 mins early", "Grip socks on, and settle in."]].map(([n, t, s]) => (
                <div key={n}>
                  <span className="font-heading italic text-4xl text-sage">{n}</span>
                  <h3 className="font-heading italic text-xl text-foreground mt-1">{t}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="container mx-auto px-4 pb-16 md:pb-24">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading italic text-3xl md:text-4xl text-foreground text-center">questions<span className="text-sage">.</span></h2>
            <Accordion type="single" collapsible className="mt-6">
              {[
                ["Can I use my pack at any studio?", "Yes — reformer packs work at all 6 studios. Mat, Barre & Yoga run at Limerick and Kildare Town."],
                ["When does my pack start?", "Validity starts from your first class, so you can buy now and start when suits."],
                ["Do membership classes roll over?", "No — membership classes don't carry over to the next month."],
                ["How do I cancel a membership?", "Memberships renew on the same date each month. Cancel any time with 7 days' notice."],
              ].map(([q, a]) => (
                <AccordionItem key={q} value={q}>
                  <AccordionTrigger className="text-left font-heading italic text-lg">{q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
