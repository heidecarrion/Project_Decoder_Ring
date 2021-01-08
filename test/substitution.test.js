// Write your tests here!

const expect = require("chai").expect;
const substitution = require("../src/substitution");


describe ("substitution", () => {

    it("should return false if alphabet value is not 26 characters long", () => 
    {
        const actual = substitution("message", "zyxw");
        expect(actual).to.be.false
    });

    it("should decrypt the given input value passed in", () => 
    {
        const expected = "unencrypted message";
        const actual = substitution("fmvmxibkgvw nvhhztv", "zyxwvutsrqponmlkjihgfedcba", encode = false);
        expect(actual).to.equal(expected);
    });

    it("should encrypt the input using the alphabet value passed in", () => 
    {
        const expected = "fmvmxibkgvw nvhhztv";
        const actual = substitution("unencrypted message", "zyxwvutsrqponmlkjihgfedcba");
        expect(actual).to.equal(expected);
    });

    it("should return false if the the alphabet value passed in has duplicate characters", () => 
    {
        const actual = substitution("message", "zzxwvutsrqponmlkjihgfedcaa");
        expect(actual).to.be.false;
    });

    it("should should ignore spaces during encryption", () => 
    {
        const expected = "fmvmxibkgvw nvhhztv";
        const actual = substitution("unencrypted message", "zyxwvutsrqponmlkjihgfedcba");
        expect(actual).to.equal(expected);
    });

    it("should ignore spaces during decryption", () =>
    {
        const expected = "unencrypted message";
        const actual = substitution("fmvmxibkgvw nvhhztv", "zyxwvutsrqponmlkjihgfedcba", encode = false);
        expect(actual).to.equal(expected);
    });

    it("should ignore uppercase letters", () => 
    {
        const expected = substitution("MESSAGE", "zyxwvutsrqponmlkjihgfedcba");
        const actual = substitution("message", "zyxwvutsrqponmlkjihgfedcba");
        expect(actual).to.equal(expected); 
    });

    it("should return false if all of the characters passed into alphabet are not letters", () => 
    {   
        const actual = substitution("message", "3yxwvutsrqponmlkjihgfedcba");
        expect(actual).to.be.false;
    });
});