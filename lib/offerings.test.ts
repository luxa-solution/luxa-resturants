import { describe, expect, it } from "vitest";
import { packages } from "./offerings";
describe("package guidance", () => {
  it("preserves the three published tiers and price ranges", () => {
    expect(packages.map((pkg) => [pkg.name, pkg.price])).toEqual([
      ["Starter Menu Site", "₦150,000 – ₦500,000"],
      ["Growth", "₦500,000 – ₦1,500,000"],
      ["Signature Brand Experience", "₦1,500,000+"],
    ]);
  });
});
