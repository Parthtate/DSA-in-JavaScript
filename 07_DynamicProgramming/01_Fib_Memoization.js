// Solve fibonacci problem using memoization (top-down) approach
// Memoization -> is also known for Diary or Memoery

function fibMemo(n, memo = {}) {
    // let memo = {}

    if (n in memo) return memo[n] // in use cause of object so n in object(memo)
    if (n <= 1) return n // it return 0 or 1 depending on give value.

    memo[n] = fibMemo(n-1, memo) + fibMemo(n-2, memo)
    
    return memo[n]
}
console.log(fibMemo(8));
console.log(fibMemo(6));
console.log(fibMemo(7));
console.log(fibMemo(8));