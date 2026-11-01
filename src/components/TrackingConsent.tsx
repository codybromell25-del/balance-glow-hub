import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { CONSENT_KEY, CONSENT_NOTICE, permissions, readConsent, recordChoice } from "@/lib/trackingConsent";
import { getTrackingRegion, syncTracking } from "@/lib/tracking";

// No automatic cookie prompt: optional tags stay off until a visitor opens
// "Cookie settings" in the footer and saves a choice.
export default function TrackingConsent() {
  const location = useLocation();
  const [region, setRegion] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const [settings, setSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [advertising, setAdvertising] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    let live = true;
    getTrackingRegion().then(value => { if (!live) return; setRegion(value); setReady(true); syncTracking(value); });
    return () => { live = false; };
  }, []);
  useEffect(() => {
    const update = () => { syncTracking(region); };
    const storage = (event: StorageEvent) => { if (event.key === CONSENT_KEY) update(); };
    const open = () => { const choice = permissions(region, readConsent()); setAnalytics(choice.analytics); setAdvertising(choice.advertising); setSettings(true); };
    window.addEventListener("balance-consent-changed", update);
    window.addEventListener("balance-cookie-settings", open);
    window.addEventListener("storage", storage);
    return () => { window.removeEventListener("balance-consent-changed", update); window.removeEventListener("balance-cookie-settings", open); window.removeEventListener("storage", storage); };
  }, [region]);
  useEffect(() => { if (ready) syncTracking(region); }, [ready, region, location.pathname]);
  const save = (a: boolean, b: boolean) => { if (!recordChoice(a, b, region)) { setError(true); return; } setSettings(false); setError(false); };
  return <Dialog open={settings} onOpenChange={setSettings}><DialogContent className="w-[calc(100%-2rem)] max-h-[85dvh] overflow-y-auto z-[70] rounded-md"><DialogTitle className="font-heading text-2xl">cookie settings<span className="text-sage">.</span></DialogTitle><DialogDescription>Essential storage remembers these choices. Optional tracking is your decision, and you can change it at any time.</DialogDescription>
    <label className="flex items-start gap-3 border-t border-border pt-4"><input type="checkbox" checked={analytics} onChange={e => setAnalytics(e.target.checked)} className="mt-1 h-5 w-5 shrink-0 accent-sage" /><span><strong>Analytics</strong><span className="block text-sm mt-1">Google Analytics and Microsoft Clarity measure browsing, device information and website interactions.</span></span></label>
    <label className="flex items-start gap-3 border-t border-border pt-4"><input type="checkbox" checked={advertising} onChange={e => setAdvertising(e.target.checked)} className="mt-1 h-5 w-5 shrink-0 accent-sage" /><span><strong>Advertising</strong><span className="block text-sm mt-1">Meta uses page visits, cookie identifiers and device information for advertising measurement and optimisation. No customer matching or purchase reporting is enabled here.</span></span></label>
    <p className="text-xs leading-relaxed">{CONSENT_NOTICE.text} <a href="/cookies" className="underline">Cookie policy</a></p>
    <div className="grid grid-cols-2 gap-2"><Button variant="quiet" onClick={() => save(false, false)}>Reject optional</Button><Button variant="sage" onClick={() => save(analytics, advertising)}>Save choices</Button></div>{error && <p role="alert">Your browser couldn’t save your choice. Optional tracking remains off.</p>}
  </DialogContent></Dialog>;
}
