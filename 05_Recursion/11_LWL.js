// Find string length without using length.

// Recursive approach

function stringLength(string){
    // Base case
    if (string === "") {
        return 0
    }
    return 1 + stringLength(string.substring(1));
}
console.log(stringLength("Parth"));