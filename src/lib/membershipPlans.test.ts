import { describe, expect, test } from "bun:test";
import { reformerMembershipPlans, matMembershipPlans, rolloverPolicy, popUpPrice, popUpMemberDiscount, popUpMemberPrice } from "./membershipPlans";
import { communityEvents, eventPrice } from "./communityEvents";

describe("October membership and event rules", () => {
  test.each([[4,85],[6,120],[8,155],[12,216],["Unlimited",240]])("%s monthly classes cost €%s", (classes, price) => expect(reformerMembershipPlans.find(p => p.classes === classes)?.price).toBe(price));
  test("Mat rates remain unchanged", () => expect(matMembershipPlans.map(p => p.price)).toEqual([50,75]));
  test("rollover allows one class", () => expect(rolloverPolicy.maximumClasses).toBe(1));
  test("rollover expires after next billing cycle", () => expect(rolloverPolicy.expiresAfterBillingCycles).toBe(1));
  test("rollover is used first", () => expect(rolloverPolicy.usedFirst).toBe(true));
  test("rollover cannot accumulate", () => expect(rolloverPolicy.accumulates).toBe(false));
  test("rollover is only for limited monthly plans", () => expect(rolloverPolicy.limitedMonthlyOnly).toBe(true));
  test("pop-ups cost €24", () => expect(popUpPrice).toBe(24));
  test("pop-up members save 15% and pay €20.40", () => { expect(popUpMemberDiscount).toBe(0.15); expect(popUpMemberPrice).toBe(20.4); expect(eventPrice("pop-up",true)).toBe(20.4); });
  test("holiday classes exclude the member discount", () => expect(eventPrice("holiday",true)).toBe(24));
  test("Halloween uses a pass rather than holiday pricing", () => expect(eventPrice("treat",true)).toBeNull());
  test.each(communityEvents.filter(e => e.category === "holiday").map(e => [e.name]))("%s holiday runs at all six studios", name => expect(communityEvents.find(e => e.name === name)?.locations).toEqual(["Limerick","Clane","Kildare Town","Blessington","Enfield","Bray"]));
  test.each([["Boo at balance","2026-10-30"],["Barre X Reformer","2026-11-14"],["Movember","2026-11-15"],["Sunday Reset","2027-01-17"],["Valentine’s Day","2027-02-14"],["Throwback Class","2027-02-19"],["Mother’s Day","2027-03-07"],["Strong & Socials","2027-04-23"],["Pilates Day","2027-05-01"],["Father’s Day","2027-06-20"],["International Day of Friendship","2027-07-30"]])("%s has the confirmed date", (name,date) => expect(communityEvents.find(e => e.name === name)?.date).toBe(date));
});
