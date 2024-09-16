// Minimum coin sum problem
// find the minimum steps to achived 0(goal)

function minSum(coins, amount, memo={}){
    if (amount in memo) return memo[amount];
    if (amount === 0) return 0;
    if (amount < 0) return -1;

    let minCoinSum = Infinity;

    // for (const coin of coins) {
    //     let currentCount = 1 + minSum(coins, amount - coin, memo);
    //     minCoinSum = Math.min(currentCount, minCoinSum)
    // }

    for (const coin of coins) {
        let result = minSum(coins, amount - coin, memo)
        if (result !== -1) {
            minCoinSum = Math.min(minCoinSum, result + 1)
        }
    }
    memo[amount] = minCoinSum === Infinity ? -1 : minCoinSum
    return memo[amount]
}

function maxSum(coins, amount, memo = {}) {
    if (amount in memo) return memo[amount];
    if (amount === 0) return 0;
    if (amount < 0) return -Infinity;  // Return a large negative number for invalid solutions

    let maxCoinSum = -Infinity;

    for (const coin of coins) {
        let currentCount = 1 + maxSum(coins, amount - coin, memo);
        maxCoinSum = Math.max(currentCount, maxCoinSum);
    }

    if (maxCoinSum === -Infinity) {
        memo[amount] = -1;
    } else {
        memo[amount] = maxCoinSum;
    }

    return memo[amount];
}

// Example usage:
// let coins = [1, 2, 5];
// let amount = 11;
// let result = maxSum(coins, amount);
// console.log(result);  // Output should be 11 (using 1 coin 11 times)

const amount = 4;
const coins = [1, 2, 3]
console.log(minSum(coins, amount));
console.log(maxSum(amount, coins));
// const amount = 15;
// const coins = [4, 6, 10]
// console.log(minSum(coins, amount));