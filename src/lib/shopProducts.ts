import gripSocks from "@/assets/grip-socks.jpg";
import toteBag from "@/assets/balance-tote-bag.jpg";

export const STUDIOS = [
  { slug: "blessington", name: "Blessington" },
  { slug: "clane", name: "Clane" },
  { slug: "kildare", name: "Kildare Town" },
  { slug: "enfield", name: "Enfield" },
  { slug: "bray", name: "Bray" },
] as const;

export type StudioSlug = (typeof STUDIOS)[number]["slug"];

export interface ShopItem {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  /** Stripe payment link per studio. Missing = not yet available for that studio. */
  links: Partial<Record<StudioSlug, string>>;
}

export const SHOP_ITEMS: ShopItem[] = [
  {
    id: "grip-socks",
    title: "balance Grip Socks",
    description: "Our signature grip socks — secure, breathable and made for the reformer.",
    price: 15,
    image: gripSocks,
    links: {
      blessington: "https://buy.stripe.com/6oU00k7XtfL14FzaY0b7y0g",
      clane: "https://buy.stripe.com/14A28sfpV2Yf2xrgikb7y0h",
      enfield: "https://buy.stripe.com/4gMcN6fpV0Q70pj2rub7y0d",
      bray: "https://buy.stripe.com/3cI8wQcdJ56nfkd3vyb7y0e",
      kildare: "https://buy.stripe.com/6oU5kEb9F9mDc81eacb7y0f",
    },
  },
  {
    id: "tote-bag",
    title: "balance Tote Bag",
    description: "A soft, roomy tote for studio days and everything after.",
    price: 20,
    image: toteBag,
    links: {
      blessington: "https://buy.stripe.com/eVqaEYa5B56n8VP5DGb7y08",
      bray: "https://buy.stripe.com/3cI00k3Hd9mDgohfegb7y09",
      kildare: "https://buy.stripe.com/6oUcN64LhgP58VPfegb7y0a",
      enfield: "https://buy.stripe.com/28E3cw91xdCT8VP4zCb7y0b",
      clane: "https://buy.stripe.com/28EbJ21z57ev5JDaY0b7y0c",
    },
  },
];
