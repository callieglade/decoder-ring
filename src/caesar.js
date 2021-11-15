// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if(-25 > shift || shift === 0 || shift > 25) return false;
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    if(encode === false) shift *= -1; // reverses the inputted direction of the shift
    let output = "";
    let inputA = input.split("");
    inputA.forEach(char => {
      char = char.toLowerCase(); // this should not affect non-alphabetic characters
      const charIndex = alphabet.findIndex(letter => letter === char);
      if(charIndex === -1) { // findIndex returns -1 if no elements matched
        output += char;
      } else {
        // loops the shift back to the start of the alphabet if charIndex > 25
        let shiftedIndex = (charIndex + shift) % alphabet.length;
        if (shiftedIndex <= -1) shiftedIndex += 26; // accounts for negative numbers
        output += alphabet[shiftedIndex]
      }
    });
    return output;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
