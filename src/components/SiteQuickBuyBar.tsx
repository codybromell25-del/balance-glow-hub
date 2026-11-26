import QuickBuyBar from "@/components/pricing/QuickBuyBar";
import { data, planItem, packItem } from "@/pages/Pricing";
import { blackFridayPacks, isBlackFriday } from "@/lib/blackFriday";

const deal = (packs: typeof data.reformer.packs) =>
  packs.filter((p) => blackFridayPacks[p.link]).map((p) => ({ ...packItem(p), was: blackFridayPacks[p.link][0] }));

const SiteQuickBuyBar = () => (
  <QuickBuyBar
    deals={isBlackFriday() ? { reformer: deal(data.reformer.packs), mat: deal(data.mat.packs) } : undefined}
    memberships={{ reformer: data.reformer.plans.map(planItem), mat: data.mat.plans.map(planItem) }}
    classes={{ reformer: data.reformer.packs.map(packItem), mat: data.mat.packs.map(packItem) }}
    intro={{ reformer: [{ label: "3 Reformer intro classes", price: 50, link: data.reformer.intro.link }], mat: [{ label: "3 intro classes", price: 40, link: data.mat.intro.link }] }}
  />
);
export default SiteQuickBuyBar;
