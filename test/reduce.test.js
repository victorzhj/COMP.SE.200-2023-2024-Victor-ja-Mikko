import { expect } from "chai";
import reduce from "../src/reduce.js";

describe("reduce", () => {
    it("should reduce an array of numbers to a single value", () => {
        const arr = [1, 2, 3, 4, 5];
        const sum = reduce(arr, (accumulator, value) => accumulator + value, 0);
        expect(sum).to.equal(15);
    });

    it("should reduce an object to an accumulated value", () => {
        const obj = { a: 1, b: 2, c: 3 };
        const result = reduce(obj, (accumulator, value, key) => {
            return accumulator + value;
        }, 0);
        expect(result).to.equal(6);
    });

    it("should use the first element of the array as the initial value if accumulator is not given", () => {
        const arr = [1, 2, 3, 4, 5];
        const sum = reduce(arr, (accumulator, value) => accumulator + value);
        expect(sum).to.equal(15);
    });

    it("should return undefined if the collection is empty and no initial value is provided", () => {
        const arr = [];
        const result = reduce(arr, (accumulator, value) => accumulator + value);
        expect(result).to.be.undefined;
    });
});
