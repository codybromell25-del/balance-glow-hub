import QuickBuyBar from "@/components/pricing/QuickBuyBar";
import { data, planItem, packItem } from "@/pages/Pricing";

const SiteQuickBuyBar = () => (
  <QuickBuyBar
    memberships={{ reformer: data.reformer.plans.map(planItem), mat: data.mat.plans.map(planItem) }}
    classes={{ reformer: data.reformer.packs.map(packItem), mat: data.mat.packs.map(packItem) }}
    intro={{ reformer: [{ label: "3 Reformer intro classes", price: 50, link: data.reformer.intro.link }], mat: [{ label: "3 intro classes", price: 40, link: data.mat.intro.link }] }}
  />
);
export default SiteQuickBuyBar;
