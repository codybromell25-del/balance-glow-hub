import { useState } from "react";
import { ArrowUpRight, Check, ChevronDown, ChevronUp, ShoppingBag, X } from "lucide-react";

export type QuickItem = { label: string; price: number; link?: string };
export type QuickGroup = { reformer: QuickItem[]; mat: QuickItem[] };
type Tab = "memberships" | "classes" | "new";

const eur = (n: number) => `€${n}`;
const tabs: [Tab, string][] = [["memberships", "Memberships"], ["classes", "Classes"], ["new", "New here"]];

// Clarity custom events (documented client API: window.clarity("event", name)).
// Measurement is optional — a missing recorder must never break a purchase.
const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
const track = (name: string) => {
  try {
    window.clarity?.("event", name);
  } catch {
    /* measurement is optional */
  }
};

const QuickBuyBar = ({ memberships, classes, intro }: { memberships: QuickGroup; classes: QuickGroup; intro: QuickGroup }) => {
  const [tab, setTab] = useState<Tab>("memberships");
  const [type, setType] = useState<"reformer" | "mat">("reformer");
  const [open, setOpen] = useState(false);
  const source = tab === "memberships" ? memberships : tab === "classes" ? classes : intro;
  const items = source[type];
  const [picked, setPicked] = useState<Record<string, number>>({});
  const key = `${tab}-${type}`;
  const idx = Math.min(picked[key] ?? (tab === "memberships" ? 1 : 0), items.length - 1);
  const item = items[idx];

  const choose = (t: Tab) => { track(`quickbuy_tab_${t}`); setTab(t); setOpen(true); };
  const close = () => { track("quickbuy_close"); setOpen(false); };

  return (
    <>
      <div className="h-24 md:h-28" aria-hidden="true" />
      {open && (
        <button
          aria-label="Close quick buy guide"
          onClick={close}
          className="fixed inset-0 z-30 cursor-default bg-foreground/30 backdrop-blur-[2px] md:hidden"
        />
      )}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:px-4 md:pb-5">
        <div className="pointer-events-auto mx-auto max-w-3xl overflow-hidden rounded-[1.75rem] bg-foreground text-background shadow-2xl">
          <div className="md:hidden">
            {open ? (
              <div id="quick-buy-mobile" className="flex max-h-[78dvh] flex-col">
                <div className="flex items-center justify-between gap-4 border-b border-background/15 px-5 py-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-background/60">Quick buy</p>
                    <h2 className="mt-1 font-heading text-xl italic">What can we help you find?</h2>
                  </div>
                  <button onClick={close} aria-label="Close options" className="-mr-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-background/70">
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="overflow-y-auto px-4 py-4">
                  <div className="grid grid-cols-3 gap-1 rounded-2xl bg-background/10 p-1" aria-label="What would you like to buy?">
                    {tabs.map(([t, label]) => (
                      <button
                        key={t}
                        onClick={() => choose(t)}
                        aria-pressed={tab === t}
                        className={`min-h-11 rounded-xl px-2 text-xs transition ${tab === t ? "bg-background text-foreground" : "text-background/75"}`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>

                  <p className="mb-2 mt-5 text-xs text-background/60">Choose a class type</p>
                  <div className="grid grid-cols-2 gap-2">
                    {(["reformer", "mat"] as const).map((t) => (
                      <button
                        key={t}
                        onClick={() => { track(`quickbuy_type_${t}`); setType(t); }}
                        aria-pressed={type === t}
                        className={`min-h-12 rounded-2xl border px-3 text-sm transition ${type === t ? "border-sage bg-sage text-foreground" : "border-background/20 text-background/85"}`}
                      >
                        {t === "reformer" ? "Reformer" : "Mat, Barre & Yoga"}
                      </button>
                    ))}
                  </div>

                  <p className="mb-2 mt-5 text-xs text-background/60">Choose your option</p>
                  <div className="space-y-2">
                    {items.map((it, i) => (
                      <button
                        key={it.label}
                        onClick={() => { track(`quickbuy_pick_${slug(it.label)}`); setPicked({ ...picked, [key]: i }); }}
                        aria-pressed={i === idx}
                        className={`flex min-h-14 w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left transition ${i === idx ? "border-sage bg-sage text-foreground" : "border-background/20 text-background"}`}
                      >
                        <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${i === idx ? "border-foreground bg-foreground text-sage" : "border-background/35"}`}>
                          {i === idx && <Check className="h-3 w-3" strokeWidth={3} />}
                        </span>
                        <span className="flex-1 text-sm">{it.label}</span>
                        <span className="font-heading text-base italic">{eur(it.price)}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border-t border-background/15 p-4">
                  <div className="mb-3 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-background/55">Your pick</p>
                      <p className="mt-1 text-sm">{item.label}</p>
                    </div>
                    <p className="font-heading text-xl italic">{eur(item.price)}</p>
                  </div>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => track(`quickbuy_buy_${slug(item.label)}`)}
                      className="flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full bg-sage px-5 py-3.5 text-sm font-semibold text-foreground"
                    >
                      Buy now <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <span className="flex min-h-[3.25rem] items-center justify-center rounded-full bg-background/15 px-5 py-3.5 text-sm">Coming soon</span>
                  )}
                  <p className="mt-2 text-center text-[11px] text-background/55">Checkout opens securely in Momence</p>
                </div>
              </div>
            ) : (
              <button
                onClick={() => { track("quickbuy_open"); setOpen(true); }}
                aria-expanded={open}
                aria-controls="quick-buy-mobile"
                aria-label="Open quick buy guide for memberships and classes"
                className="flex min-h-[4.5rem] w-full items-center gap-3 px-3 py-3 text-left"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage text-foreground">
                  <ShoppingBag className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-background/60">Quick buy</span>
                  <span className="mt-0.5 block font-heading text-base italic">Memberships & classes</span>
                </span>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background/10 text-background/90">
                  <ChevronUp className="h-4 w-4" />
                </span>
              </button>
            )}
          </div>

          <div className="hidden md:block">
            {open && (
              <div className="border-b border-background/15 px-4 pb-3 pt-4">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div className="flex rounded-full bg-background/10 p-1 text-xs">
                    {(["reformer", "mat"] as const).map((t) => (
                      <button key={t} onClick={() => { track(`quickbuy_type_${t}`); setType(t); }} className={`rounded-full px-3 py-1.5 transition ${type === t ? "bg-sage text-foreground" : "text-background/80"}`}>
                        {t === "reformer" ? "Reformer" : "Mat, Barre & Yoga"}
                      </button>
                    ))}
                  </div>
                  <button onClick={close} aria-label="Close options" className="p-2 text-background/70"><ChevronDown className="h-4 w-4" /></button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((it, i) => (
                    <button key={it.label} onClick={() => { track(`quickbuy_pick_${slug(it.label)}`); setPicked({ ...picked, [key]: i }); }}
                      className={`rounded-full border px-3 py-2 text-sm transition ${i === idx ? "border-sage bg-sage text-foreground" : "border-background/25 text-background/90"}`}>
                      {it.label} · {eur(it.price)}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div className="flex flex-row items-center gap-2 p-2">
              <div className="flex flex-1 gap-1">
                {tabs.map(([t, label]) => (
                  <button key={t} onClick={() => choose(t)}
                    className={`flex-1 rounded-full px-3 py-2.5 text-sm transition ${tab === t && open ? "bg-background/15" : "text-background/80"}`}>
                    {label}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-3 border-l border-background/15 pl-3">
                <button onClick={() => { track("quickbuy_open"); setOpen(true); }} className="flex-1 pl-2 text-left leading-tight">
                  <span className="block text-[10px] uppercase tracking-widest text-background/60">Your pick</span>
                  <span className="block font-heading text-sm">{item.label} · {eur(item.price)}</span>
                </button>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" onClick={() => track(`quickbuy_buy_${slug(item.label)}`)} className="whitespace-nowrap rounded-full bg-sage px-5 py-3 text-sm font-semibold text-foreground">
                    Buy now
                  </a>
                ) : (
                  <span className="whitespace-nowrap rounded-full bg-background/15 px-5 py-3 text-sm">Coming soon</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickBuyBar;
