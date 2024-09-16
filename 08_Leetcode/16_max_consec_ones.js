
/*
Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
*/
var longestOnes = function(nums, k) {
    let left = 0
    let zeroCount = 0
    let maxLen = 0

    for(let right = 0; right < nums.length; right++){
        if (nums[right] === 0) {
            zeroCount++
        }

        // nums[left] move
        while (zeroCount > k) {
            if (nums[left] === 0) {
                zeroCount-- // not considering the nums[0]th element
            }
            left++
        }
        maxLen = Math.max(maxLen, right-left + 1)
    }
    return maxLen

};
console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2));

