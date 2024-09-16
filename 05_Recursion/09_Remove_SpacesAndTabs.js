// Remove tabs and spaces from a String.
// "\t" and " " are remove from a string.

// Iteration approach
function removeTabsAndSpaces(inputString){
    let result = ""; // store the inputString 

    for (let i = 0; i < inputString.length; i++) {
        const char =  inputString[i];
        if (char !== " " && char !== "\t") {
            result += char;
        }
    }
    return result;
}

// console.log(removeTabsAndSpaces("Parth Pandurang Tate"));

// Recursive approach
function recursiveRemoveTAS(string){
    // Base case
    if (string.length === 0) {
        return ""
    }

    const firstChar = string[0];
    const restOfString = string.slice(1);

    if (firstChar === " " || firstChar === "\t") {
        return recursiveRemoveTAS(restOfString);
    }

    return firstChar + recursiveRemoveTAS(restOfString);
}

console.log(recursiveRemoveTAS("Par th"));
