// Reverse the string 
/*
case1:
const line = 'Sky is blue'

output -> 'blue is Sky'
*/

function reverseString(string){
    let result = [];

    let word = "";

    for (let i = 0; i < string.length; i++) {
        if (string[i] !== " ") {
            word += string[i]

        } else if (word.length > 0) {
            result.unshift(word)
            word = ""
        }       
    }

    if (word.length > 0) {
        result.unshift(word)
    }

    return result.join(" ")
}
console.log(reverseString('sky is blue'));