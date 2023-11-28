import { assert, expect } from "chai";
import toString from "../src/toString.js";

describe("toString", function() {
    it("Should return empty string for null or undefined", () => {
        expect(toString(null)).to.equal("")
        expect(toString(undefined)).to.equal("")
    });
    it("Should return value itself if it's already a string", () => {
        let testString = "test";
        expect(toString(testString)).to.deep.equal(testString);
    });
    it("Should convert array to string and return it", () => {
        expect(toString([1,2,3])).to.equal("1,2,3");
        expect(toString([1,null,3])).to.equal("1,,3");
    });
    it("Should return correct zero value when given zero or minus zero", () => {
        expect(toString(0)).to.equal("0");
        expect(toString(-0)).to.equal("-0");
    });
    it("Should return symbol as a string", () => {
        expect(toString(Symbol("test"))).to.equal("Symbol(test)");
    });
    // Rest of these don't affect the code coverage, but they seem like good tests to have
    it("Should return string value of object", () => {
        expect(toString({a:1})).to.equal("[object Object]");
    });
    it("Should return string value of boolean", () => {
        expect(toString(true)).to.equal("true");
    });
    it("Should return string value of number", () => {
        expect(toString(1)).to.equal("1");
    });
    it("Should return string value of NaN", () => {
        expect(toString(NaN)).to.equal("NaN");
    });
})