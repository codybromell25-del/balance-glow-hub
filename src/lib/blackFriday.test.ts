import { describe, test as it, expect } from "bun:test";
import { blackFridayLink, blackFridayPrice, isBlackFriday, blackFridayPacks } from "./blackFriday";

const during = new Date("2026-11-28T12:00:00Z");
describe("Black Friday sale", () => {
  it("runs three days only", () => {
    expect(isBlackFriday(new Date("2026-11-26T23:59:00Z"))).toBe(false);
    expect(isBlackFriday(new Date("2026-11-27T00:00:00Z"))).toBe(true);
    expect(isBlackFriday(new Date("2026-11-29T23:59:00Z"))).toBe(true);
    expect(isBlackFriday(new Date("2026-11-30T00:00:00Z"))).toBe(false);
  });
  it("Reformer packs: 6 €115, 10 €190, 20 €370", () => {
    expect(blackFridayPrice("https://momence.com/Balance/membership/6-Reformer-Classes/573990", during)).toBe(115);
    expect(blackFridayPrice("https://momence.com/Balance/membership/10-Reformer-Classes/573992", during)).toBe(190);
    expect(blackFridayPrice("https://momence.com/Balance/membership/20-Reformer-Classes/573995", during)).toBe(370);
  });
  it("Mat, Barre & Yoga packs: 3 €36, 6 €70", () => {
    expect(blackFridayPrice("https://momence.com/m/771509", during)).toBe(36);
    expect(blackFridayPrice("https://momence.com/m/771510", during)).toBe(70);
  });
  it("memberships and single classes are excluded", () => {
    expect(blackFridayPrice("https://momence.com/m/574005", during)).toBeUndefined();
    expect(blackFridayPrice("https://momence.com/balance/membership/Single-Reformer-Class/573997", during)).toBeUndefined();
    expect(Object.keys(blackFridayPacks)).toHaveLength(5);
  });
  it("no sale price outside the window", () => {
    expect(blackFridayPrice("https://momence.com/m/771509", new Date("2026-12-01T00:00:00Z"))).toBeUndefined();
  });
  it("sends sale packs to the Black Friday checkout links only during the sale", () => {
    const during = new Date("2026-11-28T12:00:00Z");
    expect(blackFridayLink("https://momence.com/Balance/membership/6-Reformer-Classes/573990", during)).toBe("https://momence.com/m/986693");
    expect(blackFridayLink("https://momence.com/Balance/membership/10-Reformer-Classes/573992", during)).toBe("https://momence.com/m/988575");
    expect(blackFridayLink("https://momence.com/Balance/membership/20-Reformer-Classes/573995", during)).toBe("https://momence.com/m/988593");
    expect(blackFridayLink("https://momence.com/m/771509", during)).toBe("https://momence.com/m/986689");
    expect(blackFridayLink("https://momence.com/m/771510", during)).toBe("https://momence.com/m/986691");
    expect(blackFridayLink("https://momence.com/m/771509", new Date("2026-12-01T00:00:00Z"))).toBe("https://momence.com/m/771509");
  });
});
