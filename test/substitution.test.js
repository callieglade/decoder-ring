// Write your tests here!
const {substitution} = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution", () => {
    it ("should allow for spaces, letters, and special characters", () => {
        expect(substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")).to.equal("jrufscpw");
    });
    it("should retain spaces in the message", () => {
        expect(substitution("a thinkful", "xoyqmcgrukswaflnthdjpzibev")).to.equal("x jrufscpw");
    });
    it("should return false if the alphabet is less than 26 characters", () => {
        expect(substitution("thinkful", "short")).to.be.false;
    });
    it("should return false if alphabet contains any duplicate characters", () => {
        expect(substitution("thinkful", "abcabcabcabcabcabcabcabcyz")).to.be.false;
    });
});