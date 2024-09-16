function insertionSort(arr){
    // Start from second position
    for(let i = 1; i < arr.length; i++){
        let current = arr[i]
        let j = i - 1

        while (j >= 0 && arr[j] > current) {
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = current
    }
    return arr
}
console.log(insertionSort([1, 4, 7, 3, 9]));
