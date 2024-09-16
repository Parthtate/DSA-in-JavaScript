/* Big-O
Time Complexity -> Big O notation is helps us to undersand how long an algorithm 
will take 
Space Complexity -> or how much memoery it will need as the amount of data it handles grows.
Time Complexity + Space Complxity = Big O

O(n) -> Signifies that the exection time of the algorithm
grows linerly in propertion to the size of the input data(n).
*/

const groceries = ["milk", "suger", "Rice", "Oil", "Bananas", "Bread", "eggs"];

const searchItems = (items) => {
    for (let i = 0; i < groceries.length; i++) {
        if (groceries[i] === items) {
            console.log(`Found ${items}`);
        }
    }

    // O(n)

    for (let j = 0; j < groceries.length; j++) {
        if (groceries[j] === items) {
            console.log(`Found ${items} 2 `);
        }
    }

    // n + n = 2n -> O(2n)
    // Drop the constant so it becomes O(n)
}

// searchItems("flour");

/* O(1)
O(1) aka constant time, signifies that the execution time of an algorithm remains constant regardless of the input size.
*/

const numbers = [1, 2, 3, 4, 5]

// O(1) 
/*
We dont care about the is decreasing or incresing the array elements we just have to specific index which pass in the index.
*/
const getElement = (arr, index) => arr[index];
console.log(getElement(numbers, 0));
 


/*
O(n^2)
Indicates that the algorithm execution time grows quadratically with the size of the input data (represented by n).

O(n^2) is when their is nested loop(loop inside another loop) 
*/

function findPairs(arr){
    for(let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++){
            console.log(`Pair: ${arr[i]}, ${arr[j]}`);
        }
    }
}
const nums = [1, 2, 3, 4, 5];

// findPairs(nums)


