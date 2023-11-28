import { expect } from "chai";
import chunk from "../src/chunk.js";

describe("chunk", () => {
    it("should split the array into chunks of specified size", () => {
        const result = chunk(["a", "b", "c", "d"], 2);
        expect(result).to.deep.equal([["a", "b"], ["c", "d"]]);
    });

    it("should split the array into chunks of size 1 by default", () => {
        const result = chunk(["a", "b", "c", "d"]);
        expect(result).to.deep.equal([["a"], ["b"], ["c"], ["d"]]);
    });

    it("should handle empty arrays", () => {
        const result = chunk([], 2);
        expect(result).to.deep.equal([]);
    });

    it("should handle arrays with fewer elements than the chunk size", () => {
        const result = chunk(["a", "b"], 3);
        expect(result).to.deep.equal([["a", "b"]]);
    });

    it("should handle null and undefined arrays", () => {
        const result = chunk(null, 2);
        expect(result).to.deep.equal([]);
        const result2 = chunk(undefined, 2);
        expect(result2).to.deep.equal([]);
    });

    it("should handle chunk sizes of 0", () => {
        const result = chunk(["a", "b", "c", "d"], 0);
        expect(result).to.deep.equal([]);
    });
});
