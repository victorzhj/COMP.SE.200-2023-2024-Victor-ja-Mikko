import { expect } from "chai";
import upperFirst from "../src/upperFirst.js";

describe("upperFirst", () => {
    it("Should convert only the first character of string to uppercase", () => {
        expect(upperFirst("test")).to.equal("Test");
        expect(upperFirst("tEsT")).to.equal("TEsT");
    });
    it("Return the string as it is if it's already in upper case", () => {
        expect(upperFirst("TEST")).to.equal("TEST");
    });
})
