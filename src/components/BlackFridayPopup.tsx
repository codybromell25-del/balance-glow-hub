import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import BlackFridayBadge from "@/components/BlackFridayBadge";
import { isBlackFriday, GIFT_VOUCHER_DISCOUNT } from "@/lib/blackFriday";

const KEY = "bf2026-popup-seen";

const BlackFridayPopup = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!isBlackFriday() || ["/thank-you", "/black-friday"].includes(window.location.pathname)) return;
    if (sessionStorage.getItem(KEY)) return;
    const t = setTimeout(() => { setOpen(true); sessionStorage.setItem(KEY, "1"); }, 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        overlayClassName="z-[80]"
        className="z-[80] max-w-md w-[calc(100%-2rem)] overflow-hidden rounded-[2rem] border-sage/30 bg-foreground p-6 text-background sm:p-8 [&>button]:text-background"
      >
        <div aria-hidden className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-sage/20 blur-3xl motion-safe:animate-pulse" />
        <div className="relative text-center">
          <BlackFridayBadge size="md" className="!text-sage" />
          <DialogTitle className="mt-4 font-heading italic text-3xl font-normal leading-tight">A little more balance, for less.</DialogTitle>
          <DialogDescription className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-background/70">
            Friday 27 to Sunday 29 November. Three offers, all in one place.
          </DialogDescription>
        </div>
        <ul className="relative my-5 space-y-3 rounded-2xl border border-sage/30 bg-background/5 p-4 text-sm">
          <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />Reformer class packs</li>
          <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />Mat, Barre & Yoga class packs</li>
          <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />{GIFT_VOUCHER_DISCOUNT}% off all gift vouchers</li>
        </ul>
        <a
          href="/black-friday"
          onClick={() => setOpen(false)}
          className="relative flex min-h-12 items-center justify-center gap-2 rounded-full bg-sage px-6 py-3.5 text-sm font-semibold text-foreground transition hover:brightness-105"
        >
          See all Black Friday offers <ArrowRight className="h-4 w-4" />
        </a>
        <p className="relative mt-3 text-center text-xs text-background/55">Memberships excluded.</p>
      </DialogContent>
    </Dialog>
  );
};

export default BlackFridayPopup;
