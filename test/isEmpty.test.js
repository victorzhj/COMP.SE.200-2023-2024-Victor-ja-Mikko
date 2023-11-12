import isEmpty from '../src/isEmpty.js';
import chai from "chai"
const expect = chai.expect


describe("isEmpty", () => {

    it("Should result to true with null", () => {
        expect(isEmpty(null)).to.equal(true);
    })

    it("Should result to true with true", () => {
        expect(isEmpty(true)).to.equal(true);
    })

    it("Should result to true with 1", () => {
        expect(isEmpty(1)).to.equal(true);
    })

    it("Should result to true with empty arrays", () => {
        expect(isEmpty([])).to.equal(true);
    })

    it("Should result to true with empty objects", () => {
        expect(isEmpty({})).to.equal(true);
    })

    it("Should result to true with empty map", () => {
        expect(isEmpty(
            new Map()
        )).to.equal(true);
    })

    it("Should result to true with empty set", () => {
        expect(isEmpty(
            new Set()
        )).to.equal(true);
    })

    it("Should result to false with non-empty map", () => {
        expect(isEmpty(
            new Map().set('a',1)
        )).to.equal(false);
    })

    it("Should result to false with non-empty set", () => {
        expect(isEmpty(
            new Set([1, 2, 3])
        )).to.equal(false);
    })

    it("Should result to false with array of integers", () => {
        expect(isEmpty([1,2,3])).to.equal(false);
    })

    it("Should result to false with strings", () => {
        expect(isEmpty("abc")).to.equal(false);
    })

    it("Should result to false with non-empty objects", () => {
        expect(isEmpty({a: 1})).to.equal(false);
    })

})