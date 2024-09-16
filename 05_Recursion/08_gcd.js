// LeetCode question:
// Find Greatest Common Divisor(GCD)
// Input: 18 or 42 O/P -> 6
// 43 divisiors are 1,2,3,6,7,14,21,42
// 18 divisiors are 1,2,3,6,9,18
  
// Iterative approach

function gcdDivision(num1, num2){
    let hcf = 1;  // Highest common factor

    for (let i = 1; i <= Math.min(num1, num2); i++) {
            // Check 
            if (num1 % i === 0 && num2 % i === 0 ) {
                hcf = i;
            }
    }
    return hcf; // return the higesht common factor found
}
const a = 42;
const b = 56;
// console.log(`GCD of ${a} and ${b}: ${gcdDivision(a, b)}`);

// Recursive approach
function findGCD(num1 , num2){
    // Base case
    if (num1 == num2) {
        return num1
    }

    // Recurive Base case (Different from other e.g)
    if (num1 > num2) {
        return findGCD(num1 - num2, num2);
    }
    if (num1 < num2) {
        return findGCD(num1, num2 - num1);
    }
}

const value = 42;
const value2 = 18;
console.log(`Greatest Common Division of ${value} and ${value2}: ${findGCD(value, value2)}`);