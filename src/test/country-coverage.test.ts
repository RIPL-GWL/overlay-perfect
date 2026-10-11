import { describe, expect, it } from "vitest";
import { countries, stats, solveAnswer, trustPoints } from "@/frontend/features/about/content";
import { countries as marketCountries } from "@/frontend/features/global-presence/content";
import { stats as manufacturerStats } from "@/frontend/features/manufacturers/content";
import { services, stats as serviceStats } from "@/frontend/features/our-services/content";

describe("nine-country coverage", () => {
  it("includes Netherlands in both complete lists", () => {
    expect(countries).toHaveLength(9);
    expect(countries).toContain("Netherlands");
    expect(marketCountries).toHaveLength(9);
    expect(marketCountries.find((country) => country.slug === "netherlands")?.img).toBeTruthy();
  });
  it("uses nine in all shared country statistics", () => {
    expect(stats.find((stat) => stat.label === "Global Presence")?.value).toBe("9 Countries");
    for (const group of [manufacturerStats, serviceStats]) {
      expect(group.find((stat) => stat.label === "Countries")?.value).toBe("9");
    }
  });
  it("does not retain outdated About and Services copy", () => {
    expect(JSON.stringify([solveAnswer, trustPoints, services])).not.toMatch(/8 countries/i);
  });
});