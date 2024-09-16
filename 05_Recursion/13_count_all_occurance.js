// Check key occurance in array iterative and recursive.
// [1, 2, 4, 3, 2, 5, 9, 2, 1]
// key -> 2

// Iterative approach
function countKeyIA(array, key){
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === key) {
            count++
        }        
    }
    return count
}
console.log(countKeyIA([1, 2, 4, 3, 2, 5, 9, 2, 1], 2));

// Recursive approach
function recursiveAO(array, key, index = 0) {
    // base case
    if (index >= array.length) {
        return 0
    }
    // if (array[index] == key) {
    //     return recursiveAO(array, key, index + 1) + 1;
    // } else {
    //     return recursiveAO(array, key, index + 1)
    // }

    return (array[index] === key ? 1 : 0) + recursiveAO(array, key, index + 1)
    
}
console.log(recursiveAO([1, 2, 4, 3, 2, 5, 9, 2, 1], 3));