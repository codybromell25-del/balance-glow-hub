import { readConsent, permissions } from "./trackingConsent";

type Pixel = {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  push?: Pixel;
  loaded?: boolean;
  version?: string;
};
type Clarity = { (...args: unknown[]): void; q?: unknown[][] };
declare global {
  interface Window { fbq?: Pixel; _fbq?: Pixel; dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void; clarity?: Clarity; }
}
let regionPromise: Promise<string | null> | undefined;
export function getTrackingRegion() {
  if (!regionPromise) regionPromise = (async () => {
    try {
      const response = await fetch("/cdn-cgi/trace", { signal: AbortSignal.timeout(2000), credentials: "same-origin" });
      if (!response.ok) return null;
      return (await response.text()).match(/^loc=([A-Z]{2})$/m)?.[1] || null;
    } catch { return null; }
  })();
  return regionPromise;
}
function script(id: string, src: string) {
  if (document.getElementById(id)) return;
  const element = document.createElement("script"); element.id = id; element.async = true; element.src = src; document.head.appendChild(element);
}
let analyticsLoaded = false;
let lastPixelPage = "";
export function syncTracking(region: string | null) {
  const optOut = (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;
  const permission = permissions(region, readConsent(), optOut);
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function (..._args: unknown[]) { window.dataLayer?.push(arguments); };
  window.gtag("consent", "update", { analytics_storage: permission.analytics ? "granted" : "denied", ad_storage: permission.advertising ? "granted" : "denied", ad_user_data: "denied", ad_personalization: permission.advertising ? "granted" : "denied" });
  window.fbq?.("consent", permission.advertising ? "grant" : "revoke");
  // Already-loaded vendor tags cannot be unloaded; restart after withdrawal to block all new sends.
  if ((!permission.analytics && analyticsLoaded) || (!permission.advertising && window.fbq)) { window.location.reload(); return; }
  if (permission.analytics && !analyticsLoaded) {
    analyticsLoaded = true;
    script("balance-ga", "https://www.googletagmanager.com/gtag/js?id=G-L3P9C2SBXW");
    window.gtag("js", new Date()); window.gtag("config", "G-L3P9C2SBXW");
    const clarity: Clarity = window.clarity || function (...args: unknown[]) { clarity.q = clarity.q || []; clarity.q.push(args); };
    window.clarity = clarity;
    script("balance-clarity", "https://www.clarity.ms/tag/upky6ovmbb");
  }
  // Keep GTM disabled until its tags have been audited for duplicate pixels and purchase rules.
  if (!permission.advertising || window.location.pathname === "/thank-you") return;
  if (!window.fbq) {
    const pixel: Pixel = (...args) => { if (pixel.callMethod) pixel.callMethod.apply(pixel, args); else pixel.queue.push(args); };
    pixel.queue = []; pixel.push = pixel; pixel.loaded = true; pixel.version = "2.0";
    window.fbq = pixel; window._fbq = pixel;
    pixel("consent", "grant");
    pixel("init", "931336278913997", {}, { agent: "lovable" });
    script("balance-meta-pixel", "https://connect.facebook.net/en_US/fbevents.js");
  }
  const page = window.location.pathname;
  if (lastPixelPage !== page) { window.fbq("track", "PageView"); lastPixelPage = page; }
}