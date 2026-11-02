/// <reference types="bun" />
import { describe, expect, test } from "bun:test";
import { reformerMembershipPlans, matMembershipPlans, rolloverPolicy, rolloverCopy, popUpPrice, popUpMemberDiscount, popUpMemberPrice } from "./membershipPlans";
import { communityEvents, eventPrice } from "./communityEvents";

describe("October membership and event rules", () => {
  test.each([[4,85],[8,155],[12,210],["Unlimited",240]])("%s monthly classes cost €%s", (classes, price) => expect(reformerMembershipPlans.find(p => p.classes === classes)?.price).toBe(price));
  test("Mat rates", () => expect(matMembershipPlans.map(p => p.price)).toEqual([50,90]));
  test("the 6-class monthly memberships are discontinued", () => {
    for (const plan of [...reformerMembershipPlans, ...matMembershipPlans]) expect(plan.classes).not.toBe(6);
  });
  test("all unused credits roll over, automatically", () => { expect(rolloverPolicy.allUnusedCredits).toBe(true); expect(rolloverPolicy.automatic).toBe(true); });
  test("rolled-over credits expire at the end of the next billing cycle", () => expect(rolloverPolicy.expiresAfterBillingCycles).toBe(1));
  test("rollover is only for limited monthly plans", () => expect(rolloverPolicy.limitedMonthlyOnly).toBe(true));
  test("the stated rule matches the November policy", () => expect(rolloverCopy).toBe("Unused credits automatically roll over into your next monthly billing cycle and expire at the end of that cycle."));
  test("pop-ups cost €24", () => expect(popUpPrice).toBe(24));
  test("pop-up members save 15% and pay €20.40", () => { expect(popUpMemberDiscount).toBe(0.15); expect(popUpMemberPrice).toBe(20.4); expect(eventPrice("pop-up",true)).toBe(20.4); });
  test("holiday classes exclude the member discount", () => expect(eventPrice("holiday",true)).toBe(24));
  test("Halloween uses a pass rather than holiday pricing", () => expect(eventPrice("treat",true)).toBeNull());
  test.each(communityEvents.filter(e => e.category === "holiday").map(e => [e.name]))("%s holiday runs at all six studios", name => expect(communityEvents.find(e => e.name === name)?.locations).toEqual(["Limerick","Clane","Kildare Town","Blessington","Enfield","Bray"]));
  test.each([["Boo at balance","2026-10-30"],["Reformer X Barre","2026-12-13"],["Movember","2026-11-15"],["Sunday Reset","2027-01-17"],["Valentine’s Day","2027-02-14"],["Throwback Class","2027-02-19"],["Mother’s Day","2027-03-07"],["Strong & Social","2027-04-23"],["Pilates Day","2027-05-01"],["Father’s Day","2027-06-20"],["International Day of Friendship","2027-07-30"]])("%s has the confirmed date", (name,date) => expect(communityEvents.find(e => e.name === name)?.date).toBe(date));
});

describe("November membership joining links", () => {
  test("every membership plan has a joining link", () => {
    for (const plan of [...reformerMembershipPlans, ...matMembershipPlans]) {
      expect(plan.link, `${plan.classes} plan is missing a joining link`).toBeTruthy();
    }
  });
  test.each([
    [4, "https://momence.com/m/971003"],
    [8, "https://momence.com/m/971006"],
    [12, "https://momence.com/m/971005"],
    ["Unlimited", "https://momence.com/m/574005"],
  ])("Reformer %s joins at the current Momence link", (classes, link) => expect(reformerMembershipPlans.find(p => p.classes === classes)?.link).toBe(link));
  test.each([
    [4, "https://momence.com/m/771514"],
    [8, "https://momence.com/m/971008"],
  ])("Mat, Barre & Yoga %s joins at the current Momence link", (classes, link) => expect(matMembershipPlans.find(p => p.classes === classes)?.link).toBe(link));
  test("no plan still points at a retired joining link", () => {
    const retired = ["https://momence.com/Balance/membership/Monthly-Membership---4-classes/574026","https://momence.com/Balance/membership/Monthly-membership---8-classes/574021","https://momence.com/Balance/membership/Monthly-Membership---Unlimited-Reformer-classes/574005"];
    const live = [...reformerMembershipPlans, ...matMembershipPlans].map(p => p.link);
    for (const link of retired) expect(live).not.toContain(link);
  });
});
