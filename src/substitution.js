// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
//
const substitutionModule = (function () {
  // you can add any code you want within this function scope

  //input is the string to be encoded
  //alphabet is the substituion alphabet
  //
  function substitution(input, alphabet, encode = true) {
    input = input.toLowerCase();
    let result = "";
    const realAlphabet = "abcdefghijklmnopqrstuvwxyz";

    if (!alphabet || alphabet.length !== 26) {
      return false;
    }
    let cipherArray = alphabet.split("");
    //console.log(cipherArray);

    let checkForUnique = cipherArray.some(
      (currentValue, currentIndex) =>
        cipherArray.indexOf(currentValue) !== currentIndex
    );
    if (checkForUnique) return false;
//spaces
    for (let i = 0; i < input.length; i++) {
      if (input[i] === " ") result += " ";

    if (encode === true) {
      index = realAlphabet.indexOf(input.charAt(i));
      result += alphabet.charAt(index);
    } else {
      index = alphabet.indexOf(input.charAt(i));
      result += realAlphabet.charAt(index);
    }
  }    console.log(result);
       return result;
}

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
