import { describe, expect, test } from "bun:test";
import { communityEvents, publishedEvents, eventTime, eventLocations } from "./communityEvents";

describe("event release list", () => {
  test("all upcoming planned events are restored in date order", () => {
    expect(publishedEvents.map(e => e.name)).toEqual(["Movember", "Reformer X Barre", "Sunday Reset", "Valentine’s Day", "Throwback Class", "Mother’s Day", "Strong & Socials", "Pilates Day", "Father’s Day", "International Day of Friendship"]);
  });

  test("Movember points at the real Momence booking page", () => {
    const movember = publishedEvents[0];
    expect(movember.date).toBe("2026-11-15");
    expect(movember.bookingLink).toBe("https://momence.com/l/2Bhk27Br");
    expect(eventTime(movember)).toBe("11:00 AM · 45 minutes");
  });

  test("the past Halloween event stays hidden", () => {
    const hidden = communityEvents.filter(e => !e.released);
    expect(hidden.map(e => e.name)).toEqual(["Boo at balance"]);
    expect(hidden.every(e => e.bookingLink === undefined)).toBe(true);
  });

  test("Reformer X Barre runs on 13 December with confirmed studio times", () => {
    const event = publishedEvents.find(e => e.name === "Reformer X Barre");
    expect(event?.date).toBe("2026-12-13");
    expect(event?.locations).toEqual(["Clane", "Kildare Town"]);
    expect(event?.locationTimes).toEqual({ Clane: "2.30pm", "Kildare Town": "2pm" });
    expect(event?.bookingLink).toBeUndefined();
  });

  test("Sunday Reset and Throwback Class run at every studio except Enfield", () => {
    for (const name of ["Sunday Reset", "Throwback Class"]) {
      const event = publishedEvents.find(e => e.name === name);
      expect(event?.locations).toEqual(["Limerick", "Clane", "Kildare Town", "Blessington", "Bray"]);
      expect(event?.locations).not.toContain("Enfield");
    }
  });

  test("event location labels name the right studios", () => {
    const sunday = publishedEvents.find(e => e.name === "Sunday Reset");
    expect(sunday && eventLocations(sunday)).toBe("All studios except Enfield");
    const movember = publishedEvents.find(e => e.name === "Movember");
    expect(movember && eventLocations(movember)).toBe("All six studios");
    const barre = publishedEvents.find(e => e.name === "Reformer X Barre");
    expect(barre && eventLocations(barre)).toBe("Clane · Kildare\u00A0Town");
  });
});
