// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = {
    a: "11",
    b: "21",
    c: "31",
    d: "41",
    e: "51",
    f: "12",
    g: "22",
    h: "32",
    i: "42",
    j: "42",
    k: "52",
    l: "13",
    m: "23",
    n: "33",
    o: "43",
    p: "53",
    q: "14",
    r: "24",
    s: "34",
    t: "44",
    u: "54",
    v: "15",
    w: "25",
    x: "35",
    y: "45",
    z: "55",
  };

  function polybius(input, encode = true) {
    input = input.toLowerCase();
    const message = [];
    const key = Object.keys(alphabet);
    const value = Object.values(alphabet);

    if (encode === true) {
      for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < key.length; j++) {
          if (input[i] == key[j]) {
            message.push(value[j]);
          }
        }
        if (input[i] === " ") {
          message.push(" ");
        }
      }
      return message.join("");
    } else {
      let noSpaces = input.replace(" ", "");
      if (noSpaces.length % 2 !== 0) {
        return false;
      }
      console.log(input);
      let decoderArray = [];
      for (let i = 0; i < input.length; i += 2) {
        let codex1 = input[i];
        let codex2 = input[i + 1];
        if (input[i] === " ") {
          decoderArray.push(" ");
          i--;
        } else {
          decoderArray.push(`${codex1}${codex2}`);
        }
      }
      for (let i = 0; i < decoderArray.length; i++) {
        if (decoderArray[i] === " ") {
          message.push(" ");
        }
        for (j = 0; j < value.length; j++) {
          if (decoderArray[i] === value[j]) {
            message.push(key[j]);
          }
        }
      }
      console.log(message.join(""));
      return message.join("");
    }
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
