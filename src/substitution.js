const characters = "abcdefghijklmnopqrstuvwxyz";

//Helper function to sort through given alphabet and compare with characters
function check(alphabet) {
    return [...alphabet].sort().join("") === [...characters].sort().join("");
}

//Helper function for code decryption
//Takes two arguments to go through the input and alphabet value passed in
//For loop to search through each element of the input
//Declare variable with the value of charCodeAt method in order match 
//The input value with the UTF-16 at the index at i
//If statement looking for ascii values pertaining to the alphabet only 
//Greater than 96 less 123 are only for letters
//Declare index variable to indexOf method to return position of specific value in string
//Let the output add itself to the variable characters at the correct index of the string
//Returns the unencrypted output
function decrypt(input, alphabet) {
    let output = "";
    for(let i = 0; i < input.length; i++) {
      const code = input.charCodeAt(i);
      if (code > 96 && code < 123) {
        let index = alphabet.indexOf(input[i]);
        output += characters[index];
      } else {
        output += input[i];
      }
    }
    return output;
} 

//Helper function to encrypt input given an value for alphabet
//Works the same as decrypt function 
//Returns encrypted output
function encrypt(input, alphabet) {
    let output = "";
    for(let i = 0; i < input.length; i++) {
      const code = input.charCodeAt(i);
      if (code > 96 && code < 123) {
        let index = characters.indexOf(input[i]);
        output += alphabet[index];
      } else {
        output += input[i];
      }
    }
    return output;
}

//Substition function takes three agruments with one to be true
//If statement to return false immediately if the passed in alphabet value has less than 
//26 characters
//If statement returns decrypt function if encode value is false
//If statement returns encrypt function if encode is equal to true
function substitution(input, alphabet, encode = true) {
  if (alphabet.length !== 26 || !check(alphabet)) 
    return false;
  if(input && !encode) {
    return decrypt(input.toLowerCase(), alphabet);
  }
  if (input && encode) {
    return encrypt(input.toLowerCase(), alphabet);
  }
}





module.exports = substitution;
