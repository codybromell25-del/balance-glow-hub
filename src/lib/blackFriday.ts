// Black Friday 2026 — three-day sale on class packs and gift vouchers. Memberships excluded.
// Irish time equals UTC in November.
export const BLACK_FRIDAY_START = new Date("2026-11-27T00:00:00Z");
export const BLACK_FRIDAY_END = new Date("2026-11-30T00:00:00Z"); // exclusive
export const GIFT_VOUCHER_DISCOUNT = 15;

/** Momence pack link -> [usual, sale] */
export const blackFridayPacks: Record<string, [number, number]> = {
  "https://momence.com/Balance/membership/6-Reformer-Classes/573990": [130, 115],
  "https://momence.com/Balance/membership/10-Reformer-Classes/573992": [215, 190],
  "https://momence.com/Balance/membership/20-Reformer-Classes/573995": [400, 370],
  "https://momence.com/m/771509": [42, 36],
  "https://momence.com/m/771510": [84, 70],
};

/** Usual Momence pack link -> dedicated Black Friday checkout link. */
export const blackFridayLinks: Record<string, string> = {
  "https://momence.com/Balance/membership/6-Reformer-Classes/573990": "https://momence.com/m/986693",
  "https://momence.com/Balance/membership/10-Reformer-Classes/573992": "https://momence.com/m/988575",
  "https://momence.com/Balance/membership/20-Reformer-Classes/573995": "https://momence.com/m/988593",
  "https://momence.com/m/771509": "https://momence.com/m/986689",
  "https://momence.com/m/771510": "https://momence.com/m/986691",
};

export const isBlackFriday = (now: Date = new Date()): boolean => {
  if (typeof window !== "undefined") {
    const { search, hostname } = window.location;
    // Always show the sale in the Lovable editor preview so it can be reviewed before it starts.
    const isEditorPreview = hostname.includes("id-preview--") || hostname.includes("lovableproject.com");
    if (isEditorPreview || new URLSearchParams(search).get("bf") === "preview") return true;
  }
  return now >= BLACK_FRIDAY_START && now < BLACK_FRIDAY_END;
};

/** Sale price for a pack link, or undefined when not on sale / sale not running. */
export const blackFridayPrice = (link: string, now?: Date): number | undefined =>
  isBlackFriday(now) ? blackFridayPacks[link]?.[1] : undefined;

/** Checkout link to use: the Black Friday link while the sale runs, otherwise the usual one. */
export const blackFridayLink = (link: string, now?: Date): string =>
  (isBlackFriday(now) && blackFridayLinks[link]) || link;

/** Adds sale price + oldPrice (formatted strings) to string-priced packs. */
export const withBlackFriday = <T extends { price: string; link: string; oldPrice?: string }>(packs: T[]): T[] =>
  packs.map((p) => {
    const sale = blackFridayPrice(p.link);
    return sale === undefined ? p : { ...p, oldPrice: p.price, price: `€${sale}`, link: blackFridayLink(p.link) };
  });
