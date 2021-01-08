//Function calls for three parameters, one equal to true
//If statement to return false condition right away
//Declare the constants as array of lower case alphabet
//Declare empty string for output
//Declare variable to change all input to lowercase as to not conflict with uppercase
//For loop goes through input 
//Declare variable as each item in the input
//If statement to meet conditions of non-alphabetic symbols and including letters
//Continue the operations
//Ternary operator to either add or subtract value of shift
//If statements tell which way to shift depending on value range of shift
//Collect and return the output

function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift > 25 || shift < -25) 
    return false;

    const alphabet = [
    "a","b","c","d","e",
    "f","g","h","i","j",
    "k","l","m","n","o",
    "p","q","r","s","t",
    "u","v","w","x","y","z"
    ];

    let output = "";
    const lowercase = input.toLowerCase();
        for (let i = 0; i < lowercase.length; i++) {
            let letter = lowercase[i];
                if (!alphabet.includes(letter)) {
                    output += letter;
                    continue;
                }
                let index = alphabet.indexOf(letter);
                let shiftIndex = (encode) ? (index + shift) : (index - shift);
                if (shiftIndex > 25) shiftIndex -= 26;
                if (shiftIndex < 0) shiftIndex += 26;
                output += alphabet[shiftIndex];
        } return output;
}

module.exports = caesar;
