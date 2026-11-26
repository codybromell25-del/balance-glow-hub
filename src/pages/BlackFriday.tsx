import { ArrowRight, Gift, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import BlackFridayBadge from "@/components/BlackFridayBadge";
import { blackFridayPacks, blackFridayLinks, GIFT_VOUCHER_DISCOUNT } from "@/lib/blackFriday";
import { data } from "@/pages/Pricing";

type ClassType = "reformer" | "mat";

const eur = (value: number) => `€${value}`;
const salePacks = (type: ClassType) =>
  data[type].packs.flatMap((pack) => {
    const prices = blackFridayPacks[pack.link];
    return prices ? [{ ...pack, link: blackFridayLinks[pack.link] ?? pack.link, usual: prices[0], sale: prices[1] }] : [];
  });

const reformerPacks = salePacks("reformer");
const matPacks = salePacks("mat");

const PackOption = ({ pack }: { pack: (typeof reformerPacks)[number] }) => (
  <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-5">
    <p className="font-heading italic text-2xl">{pack.classes} classes</p>
    <div className="mt-4 flex flex-wrap items-baseline gap-2">
      <span className="font-heading text-3xl">{eur(pack.sale)}</span>
      <span className="text-sm text-foreground/45 line-through">{eur(pack.usual)}</span>
    </div>
    <p className="mt-1 text-xs font-medium text-sage-deep">Save {eur(pack.usual - pack.sale)}</p>
    <a
      href={pack.link}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-5 flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-foreground px-4 py-3 text-sm font-semibold text-background transition hover:bg-sage-deep"
    >
      Buy {pack.classes} classes <ArrowRight className="h-4 w-4" />
    </a>
  </div>
);

const BlackFriday = () => (
  <div className="min-h-screen bg-background text-foreground">
    <SEO
      title="Black Friday Offers | balance studios"
      description="Three days of Black Friday offers at balance studios: savings on selected Reformer and Mat, Barre & Yoga class packs, plus 15% off gift vouchers."
      canonical="/black-friday"
      noindex
    />
    <Navigation />

    <main className="pb-4">
      <section className="container mx-auto px-4 pb-10 pt-5 md:px-8 md:pb-16 md:pt-8">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-foreground px-5 py-12 text-center text-background sm:px-8 md:rounded-[3rem] md:py-20">
          <div aria-hidden className="absolute -left-20 -top-24 -z-10 h-72 w-72 rounded-full bg-sage/25 blur-3xl motion-safe:animate-pulse" />
          <div aria-hidden className="absolute -bottom-32 -right-16 -z-10 h-80 w-80 rounded-full bg-sage/15 blur-3xl motion-safe:animate-pulse" />
          <BlackFridayBadge size="md" className="!text-sage" />
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-background/60">Friday 27 — Sunday 29 November</p>
          <h1 className="mx-auto mt-4 max-w-3xl font-heading text-4xl italic leading-[1.12] sm:text-5xl md:text-7xl">
            A little more balance<span className="text-sage">,</span> for less<span className="text-sage">.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-background/70 md:text-lg">
            Three days, three ways to treat yourself or someone else. Save on selected class packs and every gift voucher.
          </p>
          <a
            href="#offers"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sage px-7 py-3.5 text-sm font-semibold text-foreground transition hover:brightness-105"
          >
            Explore all three offers <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-4 text-xs text-background/55">Memberships are not included in the sale.</p>
        </div>
      </section>

      <section id="offers" className="container mx-auto scroll-mt-32 px-4 md:px-8">
        <div className="mx-auto max-w-6xl space-y-8 md:space-y-12">
          <article className="rounded-[2rem] border border-border bg-card p-5 md:p-10">
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] md:gap-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-deep">Offer 01 · All six studios</p>
                <h2 className="mt-3 font-heading text-3xl italic md:text-5xl">Reformer class packs</h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground/70 md:text-base">
                  More classes to look forward to, with a little saving on our 6, 10 and 20-class Reformer packs.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {reformerPacks.map((pack) => <PackOption key={pack.link} pack={pack} />)}
              </div>
            </div>
          </article>

          <article className="rounded-[2rem] border border-sage/50 bg-sage/15 p-5 md:p-10">
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] md:gap-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-deep">Offer 02 · Limerick & Kildare Town</p>
                <h2 className="mt-3 font-heading text-3xl italic md:text-5xl">Mat, Barre & Yoga class packs</h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground/70 md:text-base">
                  Choose your favourite way to move. The saving applies to our 3 and 6-class Mat, Barre & Yoga packs.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {matPacks.map((pack) => <PackOption key={pack.link} pack={pack} />)}
              </div>
            </div>
          </article>

          <article className="relative isolate overflow-hidden rounded-[2rem] bg-foreground p-6 text-background md:p-10">
            <div aria-hidden className="absolute -right-20 -top-28 -z-10 h-72 w-72 rounded-full bg-sage/20 blur-3xl motion-safe:animate-pulse" />
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">Offer 03 · Thoughtful, instantly</p>
                <div className="mt-3 flex items-center gap-3">
                  <Gift className="h-8 w-8 shrink-0 text-sage" strokeWidth={1.4} />
                  <h2 className="font-heading text-3xl italic md:text-5xl">{GIFT_VOUCHER_DISCOUNT}% off all gift vouchers</h2>
                </div>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-background/70 md:text-base">
                  Choose any amount and buy as many as you like. The discount comes off at checkout, and vouchers can be used at all six studios.
                </p>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-background/65">
                  <span>Any amount</span><span>No expiry</span><span>Delivered by email</span>
                </div>
              </div>
              <div className="flex flex-col gap-3 md:min-w-56">
                <a
                  href="https://momence.com/balance/gift-card-checkout/62930"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-sage px-6 py-3.5 text-sm font-semibold text-foreground transition hover:brightness-105"
                >
                  Create a gift voucher <ArrowRight className="h-4 w-4" />
                </a>
                <a href="/gift-cards" className="text-center text-xs text-background/65 underline underline-offset-4 hover:text-background">
                  How gift vouchers work
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10 md:px-8 md:py-16">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-border bg-accent/60 p-6 text-center md:p-8">
          <Sparkles className="mx-auto h-5 w-5 text-sage-deep" />
          <h2 className="mt-3 font-heading text-2xl italic md:text-3xl">The little details</h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground/70">
            Available Friday 27 to Sunday 29 November 2026 only. Offers apply to the class packs listed above and all gift vouchers. Memberships and single classes stay at their usual prices. Class pack and voucher checkout opens in Momence.
          </p>
          <a href="/our-studios" className="mt-5 inline-block text-sm font-semibold text-sage-deep underline underline-offset-4">
            Find your local studio
          </a>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default BlackFriday;
