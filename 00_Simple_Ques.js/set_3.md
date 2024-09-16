# Javascript Questions - Set 2


1. What are rest and spread operator in javascript?

<details>
  <summary>Click to expand!</summary>

Rest and spread operator are two important features in JavaScript that allow you to work with arrays and objects in a more concise and readable way.

The rest operator allows you to take an array or an object as an argument and use it in a function call.

The spread operator allows you to expand an array or an object into individual elements.

Here's an example of using the rest and spread operator in JavaScript:

```javascript
function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15

//spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5];

const arr3 = [...arr1, ...arr2];
console.log(arr3); // Output: [1, 2, 3, 4, 5]
```

In this example, the `sum` function takes an array of numbers as an argument using the rest operator. 
The spread operator is used to expand the array into individual elements, which are then passed to the `reduce` function.


</details>


2. What is higher order function in javascript?

<details>
  <summary>Click to expand!</summary>

Higher order functions are functions that take other functions as arguments or return functions as results. They are a powerful tool in JavaScript that allow you to write more flexible and reusable code.

Here's an example of a higher order function in JavaScript:

```javascript
function applyTwice(func, arg) {
  return func(func(arg));
}

console.log(applyTwice(Math.sqrt, 16)); // Output: 4
```

</details>

3. What are closures in javascript and give 1 DOM related example?
  <details>
  <summary>Click to expand!</summary>
  
Closures are functions that have access to variables from their outer scope, even after the outer function has finished executing.

Here's an example of a closure in JavaScript:

```javascript
function outerFunction() {
  const outerVariable = 'I am an outer variable';

  function innerFunction() {
    console.log(outerVariable); // Output: I am an outer variable
  }

  return innerFunction;
}

const closure = outerFunction();
closure(); // Output: I am an outer variable
```

In this example, the `outerFunction` function defines a variable `outerVariable` and a function `innerFunction` that has access to `outerVariable`. The `innerFunction` returns the `outerFunction` function, which allows it to be called later.

One DOM related example of a closure is the `addEventListener` method. The `addEventListener` method allows you to attach event listeners to elements in the DOM. The event listener function has access to the element's properties and methods, even after the element has been removed from the DOM.

Here's an example of using the `addEventListener` method with a closure:

```javascript
const button = document.getElementById('myButton');

function handleClick() {
  console.log('Button clicked');
}

button.addEventListener('click', handleClick);
```

In this example, the `handleClick` function is defined inside the `addEventListener` method. The `handleClick` function has access to the `button` element, even after the `button` element has been removed from the DOM.

</details>

4. Explain hoisting in javascript.

<details>
  <summary>Click to expand!</summary>

Hoisting is a JavaScript feature that allows you to use variables and functions before they are declared. This means that you can use variables and functions before they are defined in your code. Hoisting is done by the JavaScript engine, which moves the declaration of variables and functions to the top of their `scope`. 

Here's an example of hoisting in JavaScript:

```javascript
divideByTen(100)

function divideByTen(x) {
  console.log(x / 10);  
}
```

In this example, the `divideByTen` function is called with the argument `100`. The `divideByTen` function is defined after the call to `divideByTen`, so the function is hoisted to the top of the scope. This means that the `divideByTen` function is available to be called before it is defined.


</details>


5. What is temporal dead zone in javascript?

<details>
  <summary>Click to expand!</summary>

Temporal dead zone is a concept in JS related to let and const declarations. Variables with let or const declarations are hoisted to the top of their scope, but they are not immediately available in the code. This means that you can use a variable before it is declared, but the value of the variable will be undefined until it is assigned a value.

Here's an example of a temporal dead zone in JavaScript:

```javascript


console.log(x); // Output: ReferenceError: x is not defined

let x = 5;

console.log(x); // Output: 5
```

In this example, the variable `x` is declared with the `let` keyword.

</details>

