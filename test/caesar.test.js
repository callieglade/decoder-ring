// Write your tests here!
const {caesar} = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
    const defaultMessage = "Sphinx of black quartz, judge my vow";
    it("should return false if shift is 0 or > 25 or < -25", () => {
        expect(caesar(defaultMessage, 0)).to.be.false;
    });
    it("should ignore capital letters", () => {
        expect(caesar(defaultMessage, 4)[0]).to.equal("w");
    });
    it("should encode shifts that go past the end of the alphabet", () => {
        expect(caesar(defaultMessage, 4)[5]).to.equal("b");
    });
    it("should retain spaces and non-alphabetic symbols in the message", () => {
        expect(caesar(defaultMessage, 4)).to.equal("wtlmrb sj fpego uyevxd, nyhki qc zsa");
    });
});