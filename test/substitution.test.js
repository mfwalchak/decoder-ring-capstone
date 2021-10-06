// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitutionModule", ()=> {

    it("should maintain spaces", ()=> {
        const message = "yp ysii.rs";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const expected = "string";    
        const actual = substitution(message, alphabet);
        expect(actual).to.be.a("string");
    });
});
    it("should ignore capitals", ()=> {
        const message = "YP ysIi.rs";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const expected = "my message";    
        const actual = substitution(message, alphabet, false);
        expect(actual).to.equal(expected);
    });
    it("should return false if alphabet is not exactly 26 characters", ()=> {
        const expected = false;  
        const message = "YP ysIi.rs";
        const alphabet = ".waeszrdxtfcygvuhbijkfjfdjjnokmpl";  
        const actual = substitution(message, alphabet);
        expect(actual).to.equal(expected);
    });
