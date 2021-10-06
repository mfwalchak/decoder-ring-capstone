else { //this block runs if set to decode, i.e. encode === false
    console.log(input);
    for (let i = 0; i < input.length; i++) {
      let codex = input.substring(i, 2);
   //   message.push(codex);
      console.log(codex);
      message.splice(codex);
   //    if (message.length < input.length){
   //     continue;
   //    }
   //  } 
  //    message.push(codex);
     //  for (let j = 0; j < value.length; j++){  
     //   if (codex === value[j]) {
     //      message.push(key[j]);
     //    }
 //       } if (input[i] === " ") {
 //         message.push(" ");
 //       }
 //     }
 //       console.log(message.join(""));
  //      return message.join("");
 // }

   //set i+2 accumulator to grab 2 index at a time;

   //console.log(Object.keys(alphabet));
   //console.log(Object.values(alphabet));
}
 }