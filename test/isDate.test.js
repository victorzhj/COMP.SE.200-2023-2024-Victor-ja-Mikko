import isDate from '../src/isDate.js';
import chai from "chai"
const expect = chai.expect


describe("isDate", () => {
    it("Should return true with new Date object", () => {
        expect(isDate(new Date)).to.equal(true);
    })

    it("Should return false with string objects", () => {
        expect(isDate('Sunnuntai 12.11')).to.equal(false)
    })

    it("Should return false with Integer objects", () => {
        expect(isDate(1)).to.equal(false)
    })

    it("Should return false with empty objects", () => {
        expect(isDate({})).to.equal(false)
    })
})