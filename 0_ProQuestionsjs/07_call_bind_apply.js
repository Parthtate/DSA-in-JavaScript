// call, apply, bind:
/*
1. call: Immediately invoke the function, with specified this keyword.
 created another context of copy use for making library. 

2. apply: Same as call but arguments are passed as an Array.

3. bind: Returns the completly new function, when called has its this value set to provided value.
*/

// call | apply(Array) | bind

const person = {
    name: 'Alice',
    age: 20
}
const person2 = {
    name: 'Sam',
    age: 25
}
function introduce(interest, hobby){
    console.log(`My name is ${this.name} and i am ${this.age} years old. I like ${interest} and ${hobby}.`);
    // this keyword find the variable name with the help of lexical scoping.
}
introduce.call(person,'code','cricket'); // call get context of person

introduce.apply(person2, ['science', 'painting']); // apply get arguments in Array, same as call.

const boundIntroduce = introduce.bind(person, 'literture');
// boundIntroduce can now be called later with remaining arguments.

 boundIntroduce('writing')
