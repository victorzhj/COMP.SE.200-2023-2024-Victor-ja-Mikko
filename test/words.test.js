import words from '../src/words.js';
import chai from "chai"
const expect = chai.expect

const compareArrays = (a, b) => {
  return a.toString() === b.toString();
};


describe("words", () => {

    it("Should return an Array", () => {
        expect(
            Array.isArray(words('fred, barney, & pebbles')))
        .to.equal(true);
    })

    it("Should return a array of strings", () => {
        expect(
            compareArrays(
                words('fred, barney, & pebbles'),
                ['fred', 'barney', 'pebbles']
            )
        ).to.equal(true);
    })

    it("Should return result based on given regular expression", () => {
        expect(
            compareArrays(
                words('fred, barney, & pebbles', /[^, ]+/g),
                ['fred', 'barney', '&', 'pebbles']
            )
        ).to.equal(true);
    })

    
})