// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if(!alphabet || alphabet.length !== 26) return false;
    alphabet = alphabet.split("");
    let unique = "";
    alphabet.forEach(char => { // checks for unique characters in alphabet
      unique.includes(char) ? unique = "" : unique += char; // resets unique length if duplicates
    });
    if(unique.length !== 26) return false;
    let output = "";
    let baseAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const inputA = input.toLowerCase().split("");
    inputA.forEach(char => {
      if(encode) {
        const charIndex = baseAlphabet.findIndex(letter => letter === char);
        (charIndex === -1) ? output += char : output += alphabet[charIndex];  
      } else { // decode
        const charIndex = alphabet.findIndex(letter => letter === char);
        (charIndex === -1) ? output += char : output += baseAlphabet[charIndex];
      }
    });
    return output;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
