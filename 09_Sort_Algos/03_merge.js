//Breaking part
function mergeSort(array){
    // Base case
    if (array.length === 1) {
        return array
    }

    let middle = Math.floor(array.length / 2)
    let left = array.slice(0, middle)
    let right = array.slice(middle)

    return sort(mergeSort(left), mergeSort(right))
}

// Assembling part
function sort(left, right){
    let result = []
    let leftBox = 0
    let rightBox = 0

    while (leftBox < left.length && rightBox < right.length) {
        if (left[leftBox] < right[rightBox]) {
            result.push(left[leftBox])
            leftBox++
        } else {
            result.push(right[rightBox])
            rightBox++
        } 
    }
    // Concat remaining elements (if any) from the left array
    while (leftBox < left.length) {
        result.push(left[leftBox]);
        leftBox++;
    }

    // Concat remaining elements (if any) from the right array
    while (rightBox < right.length) {
        result.push(right[rightBox]);
        rightBox++;
    }

    return result;

}
console.log(mergeSort([6, 5, 3, 1, 8, 7, 2, 4]));

