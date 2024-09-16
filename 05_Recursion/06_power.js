// power of number using base and exponent

// recursive approach

function power(base, exp){
    // base case
    if (exp === 0) {
        return 1
    } else {
         return base * power(base, exp -1)
    }

}

console.log(power(2,4));