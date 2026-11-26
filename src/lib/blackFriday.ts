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

export const isBlackFriday = (now: Date = new Date()): boolean => {
  if (typeof window !== "undefined" && new URLSearchParams(window.location.search).get("bf") === "preview") return true;
  return now >= BLACK_FRIDAY_START && now < BLACK_FRIDAY_END;
};

/** Sale price for a pack link, or undefined when not on sale / sale not running. */
export const blackFridayPrice = (link: string, now?: Date): number | undefined =>
  isBlackFriday(now) ? blackFridayPacks[link]?.[1] : undefined;

/** Adds sale price + oldPrice (formatted strings) to string-priced packs. */
export const withBlackFriday = <T extends { price: string; link: string; oldPrice?: string }>(packs: T[]): T[] =>
  packs.map((p) => {
    const sale = blackFridayPrice(p.link);
    return sale === undefined ? p : { ...p, oldPrice: p.price, price: `€${sale}` };
  });
