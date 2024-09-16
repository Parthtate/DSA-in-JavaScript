// [1,2,3,4]
// left = [1,1,1,1]
// right = [1,1,1,1]


function productArray(nums){
    let length = nums.length

    let left = new Array(length).fill(1);
    let right = new Array(length).fill(1);

    let result = []

    // left array
    for (let i = 1; i < length; i++) {
        left[i] = nums[i-1] * left[i-1]
    }
    console.log(left);

    // right array
    for(let i = right.length -2; i >= 0; i--){
       right[i] = nums[i+1] * right[i+1]
    }
    console.log(right);

    // result -> multiplication of left * right arrays
    for(let i = 0; i < length; i++){
        result[i] = left[i] * right[i]
    }
    return result
};

console.log(productArray([1,2,3,4]));