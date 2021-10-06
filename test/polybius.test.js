const { expect } = require("chai");
const { polybius } = require("../src/polybius");

// Write your tests here!
describe ("polybiusModule", ()=>{

    // it("should return encoded output as a string", ()=> {
    //     const expected = typeof "";    
    //     const actual = polybius(typeof string === true);
    //     expect(actual).to.equal(expected);
    // });

    it("should have an even number of characters when decoding, excluding spaces", ()=> {
        const expected = true;       
        const actual = polybius.length % 2 !== 0;
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces in the message", ()=> {
        const expected = "443251 1454423152 2124432533 124335";        
        const actual = polybius("the quick brown fox");
        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", ()=> {
        const expected = "414351343344 231144445124";        
        const actual = polybius("doesn't MATTER");
        expect(actual).to.equal(expected);
    });

    it("should display i/j together at 42", ()=> {
        const expected = "ij"      
        const actual = polybius("42", false);
        expect(actual).to.equal(expected);
    });

});
