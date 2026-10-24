export type MembershipPlan = { classes: number | "Unlimited"; price: number; link?: string };

export const reformerMembershipPlans: MembershipPlan[] = [
  { classes: 4, price: 85, link: "https://momence.com/Balance/membership/Monthly-Membership---4-classes/574026" },
  { classes: 6, price: 120, link: "https://momence.com/Balance/membership/Monthly-Membership---6-classes/574023" },
  { classes: 8, price: 155, link: "https://momence.com/Balance/membership/Monthly-membership---8-classes/574021" },
  { classes: 12, price: 216 },
  { classes: "Unlimited", price: 240, link: "https://momence.com/Balance/membership/Monthly-Membership---Unlimited-Reformer-classes/574005" },
];
export const matMembershipPlans: MembershipPlan[] = [
  { classes: 4, price: 50, link: "https://momence.com/m/771514" },
  { classes: 6, price: 75, link: "https://momence.com/m/771691" },
];
export const rolloverPolicy = { maximumClasses: 1, expiresAfterBillingCycles: 1, usedFirst: true, accumulates: false, limitedMonthlyOnly: true };
export const rolloverCopy = "Limited monthly members can carry one unused class into their next billing cycle. It is used first, expires at the end of that cycle and cannot accumulate.";
export const popUpPrice = 24;
export const popUpMemberDiscount = 0.15;
export const popUpMemberPrice = Math.round(popUpPrice * (1 - popUpMemberDiscount) * 100) / 100;