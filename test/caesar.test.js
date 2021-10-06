// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesarModule", ()=>{

it("should return the encoded value", ()=>{
    const expected = "uftujoh"; //testing
    const actual = caesar("testing", 1);
    expect(actual).to.equal(expected);
});

it("should return the decoded value", ()=> {
    const expected = "testing";
    const actual = caesar("uftujoh", 1, false);
    expect(actual).to.equal(expected);
});

it("should return false if no shift value is provided", ()=> {
    const expected = false;
    const actual = caesar("testing");
    expect(actual).to.equal(expected);
});

it("should return false if the shift value exceeds 25", ()=> {
    const expected = false;
    const actual = caesar("testing", 30);
    expect(actual).to.equal(expected);
});

it("should return false if the shift value exceeds -25", ()=> {
    const expected = false;
    const actual = caesar("testing", -30);
    expect(actual).to.equal(expected);
});

it("should ignore capital letters", ()=> {
    const expected = "uftujoh" //testing
    const actual = caesar("TESting", 1);
    expect(actual).to.equal(expected);
});

it("should ignore non-alpha chars", ()=> {
    const expected = "?!uftujoh!?" //testing
    const actual = caesar("?!testing!?", 1);
    expect(actual).to.equal(expected)
});

});