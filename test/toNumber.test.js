import toNumber from '../src/toNumber.js';
import chai from "chai"
const expect = chai.expect


describe("toNumber", () => {

    it("Should convert decimals correctly", () => {
        expect(typeof(toNumber(3.2))).to.equal("number");
    })

    it("Should convert min value correctly", () => {
        expect(toNumber(Number.MIN_VALUE)).to.equal(5e-324);
    })

    it("Should convert Infinity to Infinity", () => {
        expect(toNumber(Infinity)).to.equal(Infinity);
    })

    it("Should convert strings to number", () => {
        expect(toNumber("3.2")).to.equal(3.2);
    })

    it("Should convert hex strings to number", () => {
        expect(toNumber("0xFF")).to.equal(255);
    })

    it("Should convert octal strings to number", () => {
        expect(toNumber("0o7")).to.equal(7);
    })

    it("Should convert binary strings to number", () => {
        expect(toNumber("0b101")).to.equal(5);
    })

    it("Should return NaN on strings", () => {
        expect(Number.isNaN(toNumber("abc"))).to.equal(true);
    })

})