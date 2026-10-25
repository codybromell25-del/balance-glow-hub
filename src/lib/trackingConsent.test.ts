/// <reference types="bun" />
import { describe, expect, test } from "bun:test";
import { CONSENT_NOTICE, permissions, requiresConsent, type ConsentRecord } from "./trackingConsent";
const record = (analytics: boolean, advertising: boolean): ConsentRecord => ({ visitorId: "test", notice: CONSENT_NOTICE, history: [{ at: "2026-10-25T10:39:00Z", analytics, advertising, region: "IE" }] });
describe("advertising consent", () => {
  test("Ireland waits for a choice", () => expect(permissions("IE", null).advertising).toBe(false));
  test("unknown region waits for a choice", () => expect(permissions(null, null).advertising).toBe(false));
  test("unresolved and Tor regions require consent", () => { expect(requiresConsent("XX")).toBe(true); expect(requiresConsent("T1")).toBe(true); });
  test("ordinary tracking outside consent regions", () => expect(permissions("AU", null).advertising).toBe(true));
  test("refusal overrides regional defaults", () => expect(permissions("AU", record(true, false)).advertising).toBe(false));
  test("analytics acceptance is not advertising acceptance", () => expect(permissions("IE", record(true, false))).toEqual({ analytics: true, advertising: false }));
  test("advertising acceptance permits tracking", () => expect(permissions("IE", record(false, true)).advertising).toBe(true));
  test("privacy opt-out overrides acceptance", () => expect(permissions("AU", record(true, true), true).advertising).toBe(false));
  test("withdrawal retains acceptance evidence but denies new events", () => { const r = record(true, true); r.history.push({at: "2026-10-25T11:00:00Z",analytics:false,advertising:false,region:"IE"}); expect(r.history.length).toBe(2); expect(permissions("IE",r).advertising).toBe(false); });
});