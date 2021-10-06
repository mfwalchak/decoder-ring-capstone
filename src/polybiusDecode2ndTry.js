if (!encode) {
    console.log(input);
    for (let i = 0; i < input.length; i+=2) {
        console.log(input.charAt(i)+input.charAt(i+1));
    }
    //take from input 2 integers at a time/two indices at a time from returned split array
    // for (let i = 0; i < inputNoSpaces.length; i+2) { //loop through the array 2 indices at a time
    //   for (let j = 0; j < value.length; j++){//loop through the values at the same time to compare
    //     if (inputNoSpaces[i] + inputNoSpaces[i+1] === value[j]) {
    //       message.push(key[j]);
    //       console.log(key[j]);
    //     } 
    //   }
    // } console.log(message.join(""));
    //   return message.join("");
  } 