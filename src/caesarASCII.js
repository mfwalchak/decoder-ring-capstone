// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

      const alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"

  function caesar(input, shift, encode = true) {
    //input = input.toLowerCase;
    let message = [];
    //create an empty array to push the result into
    //if there is no shift, shift = 0, shift is greater than 25 or -25, return false
    if (!shift || shift === 0 || shift <-25 || shift > 25) {
      return false;
    }
    //if encode is false should decode by reversing the shift number
    if (encode == false) {
      shift = -shift;
    }
    //each character in the user input should change in the alphabet according to the shift input
    let cipher = Array.from(input);
    for (let i = 0; i < cipher.length; i++) {
      //if charCode is not an alpha char pass it through to the message array unchanged, otherwise perform the caesar shift
      console.log(input.charCodeAt(i));
      message.push(input.charCodeAt(i));
    }
    console.log(message.join(""));
    //let decodeMessage = message.join();
    //console.log(String.fromCharCode(decodeMessage));
    //ASCII capitals are 65-90
    //ASCII lowercase are 97-122
    //shift ASCII dec by shift value but keep in letters?
    //if (codeLetter >=65 && codeLetter <= 90); //do something with these uppercase values
    //if (codeLetter >=97 && codeLetter <=122); //do something these lowercase values
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };