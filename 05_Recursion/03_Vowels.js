// count vowels in a string

// iteration approach

function isVowels(charactor){
    // if user pass the string in capital word
    let lowerChar = charactor.toLowerCase()
    let vowels = "aeiou"

    if (vowels.indexOf(lowerChar) != -1) {
        return true
    } else {
        return false
    }
}

function countVowels(string) {
    let count = 0;

    for (let i = 0; i < string.length; i++) {
        if (isVowels(string[i])) {
            count = count + 1
        }
    }
    return count
}
// console.log(countVowels("Hello"));

function countRecursiveVowels(string, stringLength){
    console.log(`Length: ${stringLength}, string: ${string.substring(0, stringLength)}`);

    // base case
    if (stringLength == 1) {
        console.log("Base case hit here");
        console.log("Result", Number(isVowels(string[0])));

        return Number(isVowels(string[0]));
    }

    let result = countRecursiveVowels(string, stringLength - 1) + isVowels(string[stringLength - 1]);
    console.log(`count after checking ${string[stringLength - 1]}: ${result}`);

    return result
}
let str = "Hello"
console.log(countRecursiveVowels(str, str.length));