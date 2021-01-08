// Write your tests here!

const expect = require("chai").expect;
const polybius = require("../src/polybius");

describe("polybius", () => 
{
    it("should return a string after encryption", () => 
    {
        const actual = polybius("hello");
        expect(actual).to.be.a('string');
    });

    it("should correctly encrypt letters in single words or strings of words", () =>
    {
        const expected = "25432441 4324 34442442332234";
        const actual = polybius("word or strings");
        expect(actual).to.equal(expected);
    });

    it("should translate i and j to 42 when encrypting", () => 
    {
        const expected = "44324234 42543352";
        const actual = polybius("this junk");
        expect(actual).to.equal(expected);
    });

    it("should translate 42 to (i/j) when decrypting", () => 
    {
        const expected = "th(i/j)s (i/j)unk";
        const actual = polybius("44324234 42543352", encode = false);
        expect(actual).to.equal(expected);
    });

    it("should ignore uppercase letters", () => 
    {
        const smallLetterInput = polybius("a message");
        const capitalLetterInput = polybius("A Message");
        expect(smallLetterInput).to.equal(capitalLetterInput);
    })

    it("should ignore spaces during encryption", () => 
    {
        const expected = "44324234 3453113151 ";
        const actual = polybius("this space ");
        expect(actual).to.equal(expected);
    });

    it("should ignore spaces during decryption", () => 
    {
        const expected = "th(i/j)s space";
        const actual = polybius("44324234 3453113151", encode = false);
        expect(actual).to.equal(expected);
    });

    it("should return false if the set of numbers are not even during decryption", () => {
        const actual = polybius("11223", false);
        expect(actual).to.be.false;
    });

});