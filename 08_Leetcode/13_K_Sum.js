var maxOperations = function(nums, k) {
    // first sort the array [3, 1, 2, 4] -> [1, 2, 3, 4]
    nums.sort((a, b) => a-b )

    let left = 0
    let right = nums.length - 1
    let operation = 0

    while (left < right) {
        const sum = nums[left] + nums[right]
        if (sum === k) {
            operation++

            left++
            right--
        } else if (sum < k) {
            left++
        } else {
            right--
        }
        
    }
    return operation
};