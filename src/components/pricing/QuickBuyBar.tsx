import { useState } from "react";
import { ChevronDown } from "lucide-react";

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

  return (
    <>
      <div className="h-36 md:h-28" aria-hidden="true" />
      <div className="fixed inset-x-0 bottom-0 z-40 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] md:px-4 md:pb-5 pointer-events-none">
        <div className="mx-auto max-w-3xl pointer-events-auto rounded-3xl bg-foreground text-background shadow-2xl overflow-hidden">
          {open && (
            <div className="px-4 pt-4 pb-3 border-b border-background/15">
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="flex rounded-full bg-background/10 p-1 text-xs">
                  {(["reformer", "mat"] as const).map((t) => (
                    <button key={t} onClick={() => { track(`quickbuy_type_${t}`); setType(t); }} className={`rounded-full px-3 py-1.5 transition ${type === t ? "bg-sage text-foreground" : "text-background/80"}`}>
                      {t === "reformer" ? "Reformer" : "Mat, Barre & Yoga"}
                    </button>
                  ))}
                </div>
                <button onClick={() => { track("quickbuy_close"); setOpen(false); }} aria-label="Close options" className="p-2 text-background/70"><ChevronDown className="h-4 w-4" /></button>
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
          <div className="flex flex-col md:flex-row md:items-center gap-2 p-2">
            <div className="flex flex-1 gap-1">
              {tabs.map(([t, label]) => (
                <button key={t} onClick={() => choose(t)}
                  className={`flex-1 rounded-full px-3 py-2.5 text-sm transition ${tab === t && open ? "bg-background/15" : "text-background/80"}`}>
                  {label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3 md:border-l md:border-background/15 md:pl-3">
              <button onClick={() => { track("quickbuy_open"); setOpen(true); }} className="flex-1 text-left leading-tight pl-2">
                <span className="block text-[10px] uppercase tracking-widest text-background/60">Your pick</span>
                <span className="block font-heading text-sm">{item.label} · {eur(item.price)}</span>
              </button>
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer" onClick={() => track(`quickbuy_buy_${slug(item.label)}`)} className="rounded-full bg-sage px-5 py-3 text-sm font-semibold text-foreground whitespace-nowrap">
                  Buy now
                </a>
              ) : (
                <span className="rounded-full bg-background/15 px-5 py-3 text-sm whitespace-nowrap">Coming soon</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickBuyBar;
