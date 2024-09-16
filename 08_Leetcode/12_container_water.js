

var maxArea = function(height) {
    let maxArea = 0
    let left = 0
    let right = height.length - 1
    
    while (left < right) {
        let currentHeight = Math.min(height[left], height[right])
        let currentWidth = right - left

        let currentArea = currentHeight * currentWidth

        maxArea = Math.max(maxArea, currentArea)

        // Moveing two pointers
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    return maxArea
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]));
