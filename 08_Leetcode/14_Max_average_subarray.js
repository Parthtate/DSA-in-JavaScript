// Sliding window technique.
// [1,2,3,4,5] k = 3
var findMaxAverage = function(nums, k) {
    let sum = 0
    
    for(let i = 0; i < k; i++){
        sum += nums[i]
    }

    let maxSum = sum

    for(let i = k; i < nums.length; i++){
        sum = sum - nums[i-k] + nums[i]
        maxSum = Math.max(maxSum, sum)
    }
    return maxSum / k
};
console.log(findMaxAverage([1,2,3,4,5], 3));
