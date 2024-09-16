/*
[4, 2, 3, 1]

[2, 4, 3, 1]
[2, 3, 4, 1]
[2, 3, 1, 4]
[2, 1, 3, 4]
[1, 2, 3, 4]
4 is bubble it goes at the end of an Array
*/

function bubbleSort(array){
    let isSort;

    do {
        isSort = false
        for(let i = 0; i < array.length; i++){
            if(array[i] && array[i+1] && array[i] > array[i+1]){ // unsorted array
                //swap
                const temp = array[i]
                array[i] = array[i+1]
                array[i+1] = temp
                isSort = true
            }
        }
        
    } while (isSort);
    return array
}
console.log(bubbleSort([4, 2, 3, 1]));
