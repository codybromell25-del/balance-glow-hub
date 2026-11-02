import { describe, expect, test } from "bun:test";
import { membershipFaqs, membershipFaqCount } from "./membershipFaqs";

const all = membershipFaqs.flatMap((g) => g.questions);
const answerFor = (q: string) => all.find((item) => item.q === q)?.a;

describe("membership FAQs", () => {
  test("carries all twelve questions from the November brief", () => {
    expect(membershipFaqCount).toBe(12);
    expect(all.length).toBe(12);
  });

  test("rollover answer matches the confirmed credit rule", () => {
    expect(answerFor("What happens if I don't use all my classes?")).toContain(
      "unused credits on our 4, 8 and 12-class memberships roll over into the following month",
    );
  });

  test("memberships work across all six studios", () => {
    expect(answerFor("Can I use my membership at different studios?")).toContain(
      "all six balance locations",
    );
  });

  test("on demand is included free with a membership", () => {
    expect(answerFor("How do I access the on-demand Pilates videos?")).toContain(
      "included free with your membership",
    );
  });

  test("cancelling and freezing both route to the studio inbox", () => {
    expect(answerFor("How do I cancel my membership?")).toContain("info@balancestudios.ie");
    expect(answerFor("Can I freeze my membership if I'm going away?")).toContain(
      "info@balancestudios.ie",
    );
  });

  test("no question is duplicated across groups", () => {
    expect(new Set(all.map((item) => item.q)).size).toBe(12);
  });
});
