export const CONSENT_KEY = "balance_tracking_consent_v1";
export const CONSENT_NOTICE = {
  version: "2026-10-25",
  text: "Analytics: Google Analytics, Google Tag Manager and Microsoft Clarity use device, browsing and interaction data to measure website use. Advertising: Meta uses device information, cookie identifiers, page visits and ad interaction information to measure and optimise Facebook and Instagram ads. No customer matching or payment reporting is enabled by this website. Essential storage remembers your choices. You can reject optional tracking or change your choices through Cookie settings.",
};
export type ConsentRecord = {
  visitorId: string;
  notice: typeof CONSENT_NOTICE;
  history: { at: string; analytics: boolean; advertising: boolean; region: string | null }[];
};
const regulated = new Set("AT BE BG HR CY CZ DK EE FI FR DE GR HU IS IE IT LV LI LT LU MT NL NO PL PT RO SK SI ES SE GB CH BR CA".split(" "));
export function requiresConsent(region: string | null) {
  return !region || region === "XX" || region === "T1" || regulated.has(region);
}
export function permissions(region: string | null, record: ConsentRecord | null, optOut = false) {
  const latest = record?.notice.version === CONSENT_NOTICE.version ? record.history.at(-1) : undefined;
  const allowedByRegion = !requiresConsent(region);
  return {
    analytics: latest?.analytics ?? allowedByRegion,
    advertising: !optOut && (latest?.advertising ?? allowedByRegion),
  };
}
export function readConsent(): ConsentRecord | null {
  try {
    const record = JSON.parse(localStorage.getItem(CONSENT_KEY) || "null");
    if (!record || typeof record.visitorId !== "string" || record.notice?.version !== CONSENT_NOTICE.version || !Array.isArray(record.history)) return null;
    if (!record.history.every((item: ConsentRecord["history"][number]) => typeof item.at === "string" && typeof item.analytics === "boolean" && typeof item.advertising === "boolean")) return null;
    return record;
  } catch { return null; }
}
export function recordChoice(analytics: boolean, advertising: boolean, region: string | null) {
  const previous = readConsent();
  const record: ConsentRecord = {
    visitorId: previous?.visitorId || crypto.randomUUID(),
    notice: CONSENT_NOTICE,
    history: [...(previous?.history || []), { at: new Date().toISOString(), analytics, advertising, region }],
  };
  try { localStorage.setItem(CONSENT_KEY, JSON.stringify(record)); } catch { return false; }
  window.dispatchEvent(new Event("balance-consent-changed"));
  return true;
}
export function openCookieSettings() { window.dispatchEvent(new Event("balance-cookie-settings")); }