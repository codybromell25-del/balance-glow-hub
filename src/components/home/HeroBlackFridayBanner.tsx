import { ArrowRight } from "lucide-react";
import BlackFridayBadge from "@/components/BlackFridayBadge";
import { GIFT_VOUCHER_DISCOUNT, isBlackFriday } from "@/lib/blackFriday";

const tickerItems = [
  "6 Reformer classes · €115",
  "10 Reformer classes · €190",
  "20 Reformer classes · €370",
  "3 Mat, Barre & Yoga classes · €36",
  "6 Mat, Barre & Yoga classes · €70",
  `${GIFT_VOUCHER_DISCOUNT}% off all gift vouchers`,
  "Friday 27 — Sunday 29 November",
];

/** Dark animated strip across the top of the home hero, linking to the Black Friday page. */
const HeroBlackFridayBanner = () => {
  if (!isBlackFriday()) return null;

  return (
    <a
      href="/black-friday"
      className="group relative z-20 block shrink-0 overflow-hidden border-b border-sage/30 bg-foreground text-background transition-colors hover:bg-[#141210]"
    >
      {/* soft sage glows breathing behind the copy */}
      <span aria-hidden className="pointer-events-none absolute -left-16 -top-12 h-36 w-36 rounded-full bg-sage/25 blur-2xl motion-safe:animate-pulse" />
      <span aria-hidden className="pointer-events-none absolute -bottom-14 right-8 h-36 w-36 rounded-full bg-sage/15 blur-2xl motion-safe:animate-pulse" />
      {/* light sweeping across the strip */}
      <span aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-sage/25 to-transparent motion-safe:animate-bf-sweep" />

      <div className="container relative mx-auto flex items-center gap-3 px-4 py-2.5 md:gap-5 md:px-12 md:py-3 lg:px-16">
        <BlackFridayBadge size="sm" className="!text-sage !bg-sage/15" />

        {/* rolling list of everything on offer */}
        <span aria-hidden className="bf-fade-edges relative hidden flex-1 overflow-hidden md:block">
          <span className="flex w-max motion-safe:animate-bf-marquee">
            {[0, 1].map((pass) => (
              <span key={pass} className="flex items-center gap-6 pr-6">
                {tickerItems.map((item) => (
                  <span key={`${pass}-${item}`} className="flex items-center gap-6 whitespace-nowrap text-[12px] font-medium uppercase tracking-[0.16em] text-background">
                    {item}
                    <span className="h-1 w-1 rounded-full bg-sage" />
                  </span>
                ))}
              </span>
            ))}
          </span>
          {/* solid-colour fades so the ticker never ends hard against the badge or button */}
          <span className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-foreground to-transparent" />
          <span className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-foreground to-transparent" />
        </span>

        <span className="ml-auto inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-sage px-3.5 py-1.5 text-xs font-semibold text-foreground transition-transform duration-300 group-hover:scale-105 md:ml-0 md:px-5 md:py-2 md:text-sm">
          Shop the sale
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </a>
  );
};

export default HeroBlackFridayBanner;
