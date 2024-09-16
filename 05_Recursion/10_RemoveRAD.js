// Remove adjcent duplicate from string.

// let str = "aabcc";

// let i = 1;

// console.log(str.substring(0, i));
// console.log(str.substring(i + 1));
// console.log(str.substring(0, i) + str.substring(i + 1));

function removeAdjDup(inputString){
    let result = ""

    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] !== inputString[i+1] || inputString === inputString.length - 1) {
            result += inputString[i];
        }        
    }
    return result
}
console.log(removeAdjDup("aabbccd"));

// Recursive 
function recursiveRAD(inputString){
    // Base case 
    if (inputString.length <= 1) {
        return inputString;
    }

    if (inputString[0] === inputString[1]) {
        return recursiveRAD(inputString.substring(1));
    }

    return inputString[0] + recursiveRAD(inputString.substring(1));
}
console.log(recursiveRAD("Helloo"));