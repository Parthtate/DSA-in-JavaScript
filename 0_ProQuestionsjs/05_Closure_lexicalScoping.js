// How to ans Closure and lexical scoping.
/*
Closure: function() under function() called as closure.
*/

// function outer(x){
//     return function inner(y){
//         return x+y;
//     }
// }

// const result = outer(2);
// // result(5);

// example 1)
// const getvalue = () => {
//     let score = 10;
//     // return () => score++; 
//     return () => ++score;
// };
// const value = getvalue();
// console.log(value); // value store the getvalue reference (return ++score).

// console.log(value()); // when ++score => 11 | when score++ => 10; 
// console.log(value()); // when ++score => 12 | when score++ => 11;

// const chai = getvalue(); // chai variable create a copy of getvalue. Not continue.


// console.log(chai()); // 11
// console.log(chai()); // 12

// example 2)

function loadBalance(){
    let userBalance = 100;

    function addBalance(){
        let newValue = ++userBalance;
        return newValue;
    };
    return { addBalance };  // return whole function.
};

const balance = loadBalance();
console.log(balance);
console.log(balance.addBalance()); // 101
console.log(balance.addBalance()); // 102
console.log(loadBalance().addBalance()); // 102