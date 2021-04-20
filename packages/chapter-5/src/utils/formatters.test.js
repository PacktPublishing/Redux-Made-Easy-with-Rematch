import { number } from "./formatters";

describe("formatters", () => {
  it("number should format correctly", () => {
    expect(number(12336.43)).toEqual("$12,336.43");
  });
});
