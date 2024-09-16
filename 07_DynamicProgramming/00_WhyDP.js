// Why to learn DP
function fib(n){
    if (n === 0) return 0
    if (n === 1) return 1

    return fib(n - 1) + fib(n - 2)
}
// console.log(fib(5));

function tribionnaci(n){
    if (n === 0) return 0
    if (n === 1 || n === 2) return 1

    return tribionnaci(n-1) + tribionnaci(n-2) + tribionnaci(n-3)
}
console.log(tribionnaci(5));