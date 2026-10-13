import { useLocation } from "react-router-dom";

const HIDDEN_PREFIXES = ["/booking", "/careers", "/limerick-reformer-opening", "/limerick-mat-opening"];

const MobileBookBar = () => {
  const { pathname } = useLocation();
  if (HIDDEN_PREFIXES.some((p) => pathname.startsWith(p))) return null;

  return (
    <>
      <div className="h-20 md:hidden" aria-hidden="true" />
      <div className="fixed inset-x-0 bottom-0 z-40 md:hidden border-t border-border/60 bg-background/95 backdrop-blur-md px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <div className="flex gap-3">
          <a
            href="/pricing"
            className="flex-1 rounded-full border border-foreground/20 py-3 text-center font-heading text-sm text-foreground"
          >
            Prices
          </a>
          <a
            href="/our-studios"
            className="flex-[2] rounded-full bg-sage py-3 text-center font-heading text-sm font-semibold text-black shadow-md"
          >
            Book a class
          </a>
        </div>
      </div>
    </>
  );
};

export default MobileBookBar;
