// sum of numbers till N
// suppose sum(5)-> 5+4+3+2+1

// recursive
function sumANum(value){
    if (value == 1) {
        return value
    }
    return value + sumANum(value -1)
}
console.log(sumANum(5));

// iterative

function sumOfNum(value) {
    let count = 0;

    for (let i = 1; i <= value; i++) {
        count = count + i;
    }
    return count
}
console.log(sumOfNum(6));