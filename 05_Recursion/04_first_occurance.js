// find first occurance from an array
// array -> [3, 6, 1, 4, 5, 1, 7]
// index -> 0 (by default or you can change while calling the function)
// To find -> 1
// output -> 2
// if not found -> -1

// iterative appraoch
function firstOcc(arr, findMe, currIndex){
    while (currIndex < arr.length) {
        if (arr[currIndex] == findMe) {
            return currIndex
        }
        return currIndex += 1 // or currIndex = currIndex + 1
    }
    // if not found 
    return -1
}
let arr = [3, 6, 1, 4, 5, 1, 7]
// console.log(firstOcc(arr, 3, 0));

// recursive approach
function recursiveFirstOcc(arr, findMe, currIndex){
    // multiple base case can occcurre here 
    if (arr.length === currIndex) { // if given number is not found in array
        return -1
    }

    // if found
    if (arr[currIndex] === findMe) { 
        return currIndex
    }

    return recursiveFirstOcc(arr, findMe, currIndex + 1);
}
let array = [3, 6, 1, 4, 5, 1, 7];
console.log(recursiveFirstOcc(array, 9, 1));