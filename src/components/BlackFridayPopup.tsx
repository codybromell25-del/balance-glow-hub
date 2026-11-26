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
      <DialogContent className="max-w-md w-[calc(100%-2rem)] max-h-[85vh] overflow-y-auto rounded-2xl bg-background border-sage/50 p-6">
        <div className="text-center">
          <BlackFridayBadge size="md" />
          <DialogTitle className="mt-4 font-heading italic text-2xl md:text-3xl font-normal">Three days only</DialogTitle>
          <DialogDescription className="mt-2 text-sm text-foreground/70">Fri 27 – Sun 29 November. Memberships excluded.</DialogDescription>
        </div>
        <ul className="mt-5 space-y-3">
          {offers.map((o, i) => (
            <li key={o.title} className={`rounded-xl border border-sage/50 bg-sage/10 p-4 ${i % 2 ? "rotate-[0.6deg]" : "-rotate-[0.6deg]"}`}>
              <p className="font-heading italic text-lg leading-snug">{o.title}</p>
              <p className="mt-1 text-sm text-foreground/75">{o.detail}</p>
              <a href={o.href} className="mt-2 inline-block text-sm font-medium text-sage-deep underline underline-offset-4">{o.cta} →</a>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
};

export default BlackFridayPopup;
