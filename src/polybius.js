// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    let output = "";
    const cipher = [ // the test cipher key has X and Y swapped for some reason
      ["a", "f", "l", "q", "v"], // this is required for "i/j" to come out to "42"
      ["b", "g", "m", "r", "w"], // therefore columns are referred to as rows and vice versa
      ["c", "h", "n", "s", "x"], // this key isn't how I would do it, personally, but whatever
      ["d", "(i/j)", "o", "t", "y"],
      ["e", "k", "p", "u", "z"]
    ];
    if(encode) {
      const inputA = input.toLowerCase().split("");
      inputA.forEach(char => {
        if(char === " ") {
          output += " ";
        } else if(char === 'i' || char === 'j') {
          output += '42';
        } else {
          const col = cipher.findIndex(row => row.includes(char));
          const row = cipher[col].findIndex(row => row === char);
          output += `${col + 1}${row + 1}`; // positions adjusted to start from 1 instead of 0
        }
      });
    } else { // decode
      const inputB = input.split(" ") // array of each word in the message
      if(inputB.join('').length % 2 !== 0) return false; // if input without spaces has odd amount of numbers, fail out
      inputB.forEach((word, index, inputB) => {
        for (let i = 0; i < word.length; i += 2) {
          const col = word[i];
          const row = word[i + 1];
          if(`${col}${row}` === '42') {
            output += '(i/j)';
          } else {
            output += cipher[col - 1][row - 1]; // positions adjusted to start from 0 instead of 1
          }
          console.log(output);
        }
        if(index < inputB.length - 1) output += " "; // add a space if any more words remain
      });
    }
    return output;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
