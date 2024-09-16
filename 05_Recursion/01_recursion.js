function factorial(n){
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
// console.log(factorial(5));

// Direct and In-direct recursion

function printNumber(min, max) {
    // Base case
    if (min > max) {
        return;
    }

    printNumber(min + 1, max); 
    console.log(min); // before winding call min
}

console.log(printNumber(1, 5));


function printNumber(min, max) {
    // Base case
    if (min > max) {
        return;
    }

    console.log(min); // after winding call min
    printNumber(min + 1, max)
}

console.log(printNumber(1, 5));