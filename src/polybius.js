//Function takes in two arguments one to be true
//Declare Polybius square values as object with paired number key 
//And corresponding alphabet string value
//Declare input as variable changing letters to lower case
//In order to ignore uppercase letters
//Declare output as a string
//If statement checks to see if input is a string
//Returns false immediately if not a string
//Checks for value is a string
//Checks for 42 to be i or j
//Returns encryption message
//Else checks for number pairs
//Checks against square object
//Returns unencrypted message

function polybius(input, encode = true) {
    const square = {
        11: 'a', 21: 'b', 31: 'c', 41: 'd', 51: 'e',
        12: 'f', 22: 'g', 32: 'h', 42: '(i/j)', 52: 'k',
        13: 'l', 23: 'm', 33: 'n', 43: 'o', 53: 'p',
        14: 'q', 24: 'r', 34: 's', 44: 't', 54: 'u',
        15: 'v', 25: 'w', 35: 'x', 45: 'y', 55: 'z'
    }
    input = input.toLowerCase()
    let output = ""
    if(typeof input !== "string") return output = false
    if(encode){    //values = characters; letter = character
        for(values in input){
            const letter = input[values]
            if(letter === " "){
                output += letter
                continue
            }
            if(letter === "i" || letter === "j") {
                output += 42
                continue
            }
            for(value in square) {  //letters = value
                if(letter === square[value]) output += value
            }
        }
    } else {
        for(numbers in input){
            let numPairs = input.split(" ")
            for(element in numPairs){
                if(numPairs[element].length % 2 != 0) {
                    return output = false
                } 
            }
            const pair = `${input[0]}${input[1]}`
            if(input[0] === " "){
                output += input[0]
                input = input.slice(1)
                continue
            }
            for(num in square){
                if (pair === num){
                    output += square[num]
                }
            }
            input = input.slice(2)
        }
    }
    return output;
}

module.exports = polybius;
