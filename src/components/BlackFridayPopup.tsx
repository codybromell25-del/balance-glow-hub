import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import BlackFridayBadge from "@/components/BlackFridayBadge";
import { isBlackFriday, GIFT_VOUCHER_DISCOUNT } from "@/lib/blackFriday";

const KEY = "bf2026-popup-seen";

const offers = [
  { title: "Reformer class packs", detail: "6 for €115 · 10 for €190 · 20 for €370", href: "/pricing", cta: "Shop Reformer packs" },
  { title: "Mat, Barre & Yoga class packs", detail: "3 for €36 · 6 for €70", href: "/pricing", cta: "Shop Mat, Barre & Yoga" },
  { title: `${GIFT_VOUCHER_DISCOUNT}% off gift vouchers`, detail: "Any amount, buy as many as you like", href: "/gift-cards", cta: "Shop vouchers" },
];

const BlackFridayPopup = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!isBlackFriday() || window.location.pathname === "/thank-you") return;
    if (sessionStorage.getItem(KEY)) return;
    const t = setTimeout(() => { setOpen(true); sessionStorage.setItem(KEY, "1"); }, 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        overlayClassName="z-[80]"
        className="z-[80] max-w-md w-[calc(100%-2rem)] max-h-[calc(100dvh-9rem)] overflow-y-auto rounded-2xl border-sage/30 bg-foreground p-4 text-background gap-2 sm:p-6 [&>button]:text-background"
      >
        <div className="text-center">
          <span className="sm:hidden"><BlackFridayBadge size="sm" className="!text-sage" /></span>
          <span className="hidden sm:inline"><BlackFridayBadge size="md" className="!text-sage" /></span>
          <DialogTitle className="mt-2 font-heading italic text-2xl md:text-3xl font-normal">Three days only</DialogTitle>
          <DialogDescription className="mt-1 text-[13px] text-background/70">Fri 27 – Sun 29 November. Memberships excluded.</DialogDescription>
        </div>
        <ul className="mt-1 space-y-2">
          {offers.map((o, i) => (
            <li key={o.title} className={`rounded-xl border border-sage/40 bg-background/5 p-3 sm:p-4 ${i % 2 ? "rotate-[0.6deg]" : "-rotate-[0.6deg]"}`}>
              <p className="font-heading italic text-[15px] sm:text-lg leading-snug">{o.title}</p>
              <p className="mt-0 text-[13px] leading-tight text-background/70">{o.detail}</p>
              <a href={o.href} className="mt-1 inline-block text-[13px] font-medium text-sage underline underline-offset-4">{o.cta} →</a>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
};

export default BlackFridayPopup;
