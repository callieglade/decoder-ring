// Write your tests here!
const {polybius} = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {
    it("should translate i and j to 42", () => {
        expect(polybius("ninja")).to.equal("3342334211");
    });
    it("should decode 42 as (i/j)", () => {
        expect(polybius("3342334211", false)).to.equal("n(i/j)n(i/j)a");
    });
    it("should ignore capital letters", () => {
        expect(polybius("Ninja")).to.equal("3342334211");
    });
    it("maintains spaces in the message", () => {
        expect(polybius("A Ninja")).to.equal("11 3342334211");
    });
});