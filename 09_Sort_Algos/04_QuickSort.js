function quickSort(arr, low = 0, high = arr.length - 1){
    //Base case
    if (low < high) {
        let pivotIndex = partition(arr, low, high)

         quickSort(arr, low, pivotIndex - 1)  // For left Side sorting
         quickSort(arr, pivotIndex + 1, high) // For right Side sorting
    }
    return arr
}

function partition(arr, low, high){
    let pivot = arr[high]
    let i = low - 1

    for(let j = low; j < high; j++){
        if (arr[j] < pivot) {
            i++

            //swap, if it is confusing, you can use temp variable for swap
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    //Swap agian for pivot and ith position
    [arr[i+1], arr[high]] = [arr[high], arr[i+1]]
    return i + 1 
};

console.log(quickSort([8, 2, 4, 7, 1, 3, 9, 6, 5]));
