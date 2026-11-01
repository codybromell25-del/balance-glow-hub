import { describe, expect, test } from "bun:test";
import { communityEvents, publishedEvents, eventTime } from "./communityEvents";

describe("event release list", () => {
  test("only Movember is published for now", () => {
    expect(publishedEvents.map(e => e.name)).toEqual(["Movember"]);
  });

  test("Movember points at the real Momence booking page", () => {
    const movember = publishedEvents[0];
    expect(movember.date).toBe("2026-11-15");
    expect(movember.bookingLink).toBe("https://momence.com/l/2Bhk27Br");
    expect(eventTime(movember)).toBe("11:00 AM · 45 minutes");
  });

  test("unreleased events keep their details for later", () => {
    const hidden = communityEvents.filter(e => !e.released);
    expect(hidden.length).toBe(communityEvents.length - 1);
    expect(hidden.some(e => e.name === "Barre X Reformer")).toBe(true);
    expect(hidden.every(e => e.bookingLink === undefined)).toBe(true);
  });
});
