import filter from '../src/filter.js';
import chai from "chai"
const expect = chai.expect


describe("Filter", () => {

    const users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'fred',   'active': false }
    ]

    let result = filter(users, (obj) => obj.active)

    it("Should return an array of references to original objects", () => {
        expect(Object.is(result[0], users[0])).to.equal(true);
    })

    it("Should return a result of type Array", () => {
        expect(Array.isArray(result)).to.equal(true);
    })

    it("Should return an Array with an empty Array inside if no matches are found", () => {
        let result = filter(users, (obj) => obj.user === "Jack")
        expect(Array.isArray(result[0])).to.equal(true);
        expect(result[0].length === 0).to.equal(true);
    })

    // check multiple returned objects

    // it("", () => {
    //     expect().to.equal(true);
    // })


    // it("", () => {
    //     expect().to.equal(true);
    // })

})