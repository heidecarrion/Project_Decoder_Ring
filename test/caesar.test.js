// Write your tests here!

const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe("caesar", () => 
{
    it("should return false when shift value is not passed in", () =>
    {
      const actual = caesar();
      expect(actual).to.be.false;
    });

    it("should return false when shift value equals zero", () => 
    {
      const actual = caesar("", 0);
      expect(actual).to.be.false;
    });

    
    it("should return false when shift value is greater than 25", () => 
    {
      const actual = caesar("", 26);
      expect(actual).to.be.false;
    });

    it("should return false when shift value is less than -25", () => 
    {
      const actual = caesar("", -26);
      expect(actual).to.be.false;
    });

    it("should shift the letters in a word or string by shift value passed in", () => 
    {
      const expected = "zrug ru vwulqj";
      const actual = caesar("word or string", 3);
      expect(actual).to.equal(expected);
    });

    it("should ignore uppercase letters", () => 
    {
      const expected = "khoor";
      const actual = caesar("HELLO", 3);
      expect(actual).to.equal(expected);
    });

    it("should be able to shift above the letter z", () => 
    {
      const expected = "eee";
      const actual = caesar("zzz", 5);
      expect(actual).to.equal(expected);
    });

    it("should be able to left shift under the letter a", () => 
    {
      const expected = "vvv";
      const actual = caesar("aaa", -5);
      expect(actual).to.equal(expected);
    });

    it("should ignore spaces in the encrypted message", () => 
    {
      const expected = "vsdfhv dqg vshfldo vbperov";
      const actual = caesar("spaces and special symbols", 3);
      expect(actual).to.equal(expected);
    });

    it("should ignore spaces in the decrypted message", () =>
    {
      const expected = "spaces and special symbols";
      const actual = caesar("vsdfhv dqg vshfldo vbperov", 3, encode = false);
      expect(actual).to.equal(expected);
    }); 

    it("should ignore special symbols in the encrypted message", () =>
    {
      const expected = "vshfldo vbperov vxfk dv !, #, $, %, &";
      const actual = caesar("special symbols such as !, #, $, %, &", 3);
      expect(actual).to.equal(expected);
    });

    it("should ignore special symbols in the decrypted message", () =>
    {
      const expected = "special symbols such as !, #, $, %, &";
      const actual = caesar("vshfldo vbperov vxfk dv !, #, $, %, &", 3, encode = false);
      expect(actual).to.equal(expected);
    });
});