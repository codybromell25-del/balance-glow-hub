import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { CONSENT_KEY, CONSENT_NOTICE, permissions, readConsent, recordChoice, requiresConsent } from "@/lib/trackingConsent";
import { getTrackingRegion, syncTracking } from "@/lib/tracking";

export default function TrackingConsent() {
  const location = useLocation();
  const [region, setRegion] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const [banner, setBanner] = useState(false);
  const [settings, setSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [advertising, setAdvertising] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    let live = true;
    getTrackingRegion().then(value => { if (!live) return; setRegion(value); setReady(true); setBanner(requiresConsent(value) && !readConsent()); syncTracking(value); });
    return () => { live = false; };
  }, []);
  useEffect(() => {
    const update = () => { setBanner(requiresConsent(region) && !readConsent()); syncTracking(region); };
    const storage = (event: StorageEvent) => { if (event.key === CONSENT_KEY) update(); };
    const open = () => { const choice = permissions(region, readConsent()); setAnalytics(choice.analytics); setAdvertising(choice.advertising); setSettings(true); };
    window.addEventListener("balance-consent-changed", update);
    window.addEventListener("balance-cookie-settings", open);
    window.addEventListener("storage", storage);
    return () => { window.removeEventListener("balance-consent-changed", update); window.removeEventListener("balance-cookie-settings", open); window.removeEventListener("storage", storage); };
  }, [region]);
  useEffect(() => { if (ready) syncTracking(region); }, [ready, region, location.pathname]);
  const save = (a: boolean, b: boolean) => { if (!recordChoice(a, b, region)) { setError(true); return; } setSettings(false); setBanner(false); setError(false); };
  return <>
    {banner && <section aria-label="Cookie choices" className="fixed bottom-0 inset-x-0 z-[60] border-t border-foreground/20 bg-background shadow-lg p-5 md:p-6 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-center gap-5">
        <div className="flex-1"><h2 className="font-heading text-2xl mb-2">a little choice<span className="text-sage">.</span></h2><p className="text-sm leading-relaxed max-w-2xl">We use optional cookies from Google and Microsoft to understand visits, and Meta to measure and improve our ads. Your choice. <a href="/privacy" className="underline">Privacy policy</a></p></div>
        <div className="grid grid-cols-2 gap-2 shrink-0"><Button variant="quiet" className="font-body tracking-normal" onClick={() => save(false, false)}>Reject optional</Button><Button variant="sage" className="font-body tracking-normal" onClick={() => save(true, true)}>Accept optional</Button><Button variant="quiet" className="col-span-2 font-body tracking-normal" onClick={() => { setAnalytics(false); setAdvertising(false); setSettings(true); }}>Choose cookies</Button></div>
      </div>{error && <p role="alert" className="text-sm mt-3">Your browser couldn’t save your choice. Optional tracking remains off.</p>}
    </section>}
    <Dialog open={settings} onOpenChange={setSettings}><DialogContent className="w-[calc(100%-2rem)] max-h-[85dvh] overflow-y-auto z-[70] rounded-md"><DialogTitle className="font-heading text-2xl">cookie settings<span className="text-sage">.</span></DialogTitle><DialogDescription>Essential storage remembers these choices. Optional tracking is your decision, and you can change it at any time.</DialogDescription>
      <label className="flex items-start gap-3 border-t border-border pt-4"><input type="checkbox" checked={analytics} onChange={e => setAnalytics(e.target.checked)} className="mt-1 h-5 w-5 shrink-0 accent-sage" /><span><strong>Analytics</strong><span className="block text-sm mt-1">Google Analytics and Microsoft Clarity measure browsing, device information and website interactions.</span></span></label>
      <label className="flex items-start gap-3 border-t border-border pt-4"><input type="checkbox" checked={advertising} onChange={e => setAdvertising(e.target.checked)} className="mt-1 h-5 w-5 shrink-0 accent-sage" /><span><strong>Advertising</strong><span className="block text-sm mt-1">Meta uses page visits, cookie identifiers and device information for advertising measurement and optimisation. No customer matching or purchase reporting is enabled here.</span></span></label>
      <p className="text-xs leading-relaxed">{CONSENT_NOTICE.text} <a href="/cookies" className="underline">Cookie policy</a></p>
      <div className="grid grid-cols-2 gap-2"><Button variant="quiet" onClick={() => save(false, false)}>Reject optional</Button><Button variant="sage" onClick={() => save(analytics, advertising)}>Save choices</Button></div>{error && <p role="alert">Your browser couldn’t save your choice. Optional tracking remains off.</p>}
    </DialogContent></Dialog>
  </>;
}