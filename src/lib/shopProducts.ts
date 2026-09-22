import gripSocks from "@/assets/grip-socks.jpg";
import toteBag from "@/assets/balance-tote-bag.jpg";
import bundle from "@/assets/bag-socks-bundle.jpg";

export const STUDIOS = [
  { slug: "blessington", name: "Blessington" },
  { slug: "clane", name: "Clane" },
  { slug: "kildare", name: "Kildare Town" },
  { slug: "enfield", name: "Enfield" },
  { slug: "bray", name: "Bray" },
  { slug: "limerick", name: "Limerick" },
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
      blessington: "https://buy.stripe.com/eVqaEYa5B56n8VP5DGb7y08",
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
    },
  },
  {
    id: "bag-socks-bundle",
    title: "Tote Bag + Grip Socks Bundle",
    description: "Our tote bag paired with a pair of grip socks — better together.",
    price: 30,
    image: bundle,
    links: {},
  },
];
