// How to explain prototypal inheritance and chaining:

// 1) example (old method)
// let faang = {
//     name: "google",
//     salary: function(){
//         console.log("500K salary");
//     }
// };

// let enginner = {
//     empId: 12231,
//     task: function(){
//         console.log("task assigned");
//     }
// };

// enginner.__proto__ = faang; // inherit faang proprties.
// console.log(enginner);
// console.log(enginner.name);

// 2) example (modern method)
// let employee = {
//     name: "Parth",
//     salary: function(){
//         console.log("600k salary");
//     }
// };

// let company = Object.create(employee,{
//     taskAssigned: {
//         task:"make website"
//     },
// });
// console.log(employee.name);

// Property shadowing:

// let user = {
//     name: 'chai',  // called Property shadowing, same key but outerside key easy to access.
//     __proto__: {name: 'tea',
//         __proto__: {type: 'ginger'}}
// };

// console.log(user.name); // Expected output: 'chai'
// console.log(user.type); // Expected output: 'ginger'

// setPrototypeof:

// let proto2 = { type: 8 };
// let proto1 = { name: 'tea', __proto__: proto2 };
// let users = { name: 'chai' };
// Object.setPrototypeOf(users, proto1);

// console.log(users.name); // Output: 'chai'
// console.log(users.type); // Output: 8

let channel = {
    name: "chai aur code"
};

let earn = {
    monthly: '56000',
    __proto__: channel
};

let manger = {
    value: 10,
}

Object.setPrototypeOf(manger, earn);

console.log(earn.name);

// getPrototypeof:

// Define a constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Add a method to the prototype
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Create an instance of Person
const person1 = new Person('Alice', 30);

// Get the prototype of the person1 instance
const prototypeOfPerson1 = Object.getPrototypeOf(person1);

console.log(prototypeOfPerson1); // Output: { greet: [Function] }
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.