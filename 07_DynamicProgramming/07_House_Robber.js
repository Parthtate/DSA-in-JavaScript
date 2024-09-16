// House Robber, Non Adjecent problem

function houseRobber(nums, i=0, memoization={}){

    if (i in memoization) return memoization[i]; // return the position from the memoery

    if (i >= nums.length) return 0 // reached at the of end the tree []

    const pickedFirst = houseRobber(nums, i+1, memoization)
    const pickedSecond = nums[i] + houseRobber(nums, i+2, memoization)

    memoization[i] = Math.max(pickedFirst, pickedSecond)
    console.log(memoization[i]);

    return memoization[i]
}

const nums = [2, 7, 9, 3, 1];
console.log(houseRobber(nums));