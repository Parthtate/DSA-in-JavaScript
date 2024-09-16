// Balance Paranthesis
// Input -> "["  "("  ")" ")" ")" "{" "}" "]"

// { [ ( ) ] }
// for open -> +1
// for close -> -1 


function balancePara(array, startIndex = 0, currentIndex = 0){
    if (array.length == startIndex) {
        return currentIndex == 0;
    }

    if (currentIndex < 0) {
        return false // ")" return false.
    }

    // Recursive case
    if (array[startIndex] === "(" || array[startIndex] === "{" || array[startIndex] === "[") {
        return balancePara(array, startIndex + 1, currentIndex + 1);
    } else if(array[startIndex] === ")" || array[startIndex] === "}" || array[startIndex] === "]") {
        return balancePara(array, startIndex + 1, currentIndex - 1);
    } else {
        return false
    }
}
console.log(balancePara(["(", "(", ")", ")", "{", "}"]));