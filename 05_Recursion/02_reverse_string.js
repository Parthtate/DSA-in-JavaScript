
// reverse the string
// hello 

function reverseString(string){
    let reverse = ""
    let length = string.length - 1

    while (length >= 0) {
        reverse = reverse + string[length]
        length = length - 1
    }
    return reverse
}
// console.log(reverseString('Hello'));


// reverse string using recursion approach

function reverseRecursionString(string) {
    // base case
    console.log(`Current String ${string}`);
    if (string === "") {
        return string
    }

    let recursivePart = reverseRecursionString(string.substring(0, string.length - 1));
    let result = string[string.length - 1] + recursivePart
    // + indicate concate the method.

    console.log(`Reversing: Last char: ${string[string.length -1]} added in front of ${recursivePart} to form a result: ${result}`);
}
console.log(reverseRecursionString('hello'));