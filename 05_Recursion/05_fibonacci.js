// fibonacci series 
// iterative approach

function fibonacci(value){
    let n0 = 0;
    let n1 = 1;

    for (let i = 0; i < value; i++) {
        temp = n0 + n1;
        n0 = n1;
        n1 = temp;
    }
    return n0;
}
// console.log(fibonacci(4));

// recursive approach
function recursiveFibonacci(value){
    // base case
    if (value == 0) {
        return value
    }
    else if (value == 1) {
        return value
    }
    // OR 

    // if (value <= 1) {
    //     return value
    // }

    // formula -> fib(value - 1) + fib(value - 2)
    return (recursiveFibonacci(value - 1) + recursiveFibonacci(value - 2));
}
console.log(recursiveFibonacci(6));