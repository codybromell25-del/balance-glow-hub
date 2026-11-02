export type MembershipPlan = { classes: number | "Unlimited"; price: number; link?: string };

export const reformerMembershipPlans: MembershipPlan[] = [
  { classes: 4, price: 85, link: "https://momence.com/m/971003" },
  { classes: 8, price: 155, link: "https://momence.com/m/971006" },
  { classes: 12, price: 210, link: "https://momence.com/m/971005" },
  { classes: "Unlimited", price: 240, link: "https://momence.com/m/574005" },
];
export const matMembershipPlans: MembershipPlan[] = [
  { classes: 4, price: 50, link: "https://momence.com/m/771514" },
  { classes: 8, price: 90, link: "https://momence.com/m/971008" },
];
export const rolloverPolicy = { automatic: true, allUnusedCredits: true, expiresAfterBillingCycles: 1, limitedMonthlyOnly: true };
export const rolloverCopy = "Unused credits automatically roll over into your next monthly billing cycle and expire at the end of that cycle.";
export const popUpPrice = 24;
export const popUpMemberDiscount = 0.15;
export const popUpMemberPrice = Math.round(popUpPrice * (1 - popUpMemberDiscount) * 100) / 100;
