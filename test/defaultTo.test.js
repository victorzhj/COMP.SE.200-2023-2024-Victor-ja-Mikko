import { expect } from "chai";
import defaultTo from "../src/defaultTo.js";

describe("defaultTo", function() {
  it("should return the original value when it is not null or undefined", () => {
    expect(defaultTo(1, 10)).to.equal(1);
    expect(defaultTo("test", "default")).to.equal("test");
    expect(defaultTo(false, true)).to.equal(false);
  });

  it("should return the default value when the original value is null or undefined", () => {
    expect(defaultTo(null, 10)).to.equal(10);
    expect(defaultTo(undefined, "default")).to.equal("default");
  });

  it("should return the default value when the original value is NaN", () => {
    expect(defaultTo(NaN, "default")).to.equal("default");
  });
});