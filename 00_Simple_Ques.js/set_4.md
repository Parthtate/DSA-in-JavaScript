# Javascript Questions - Set 4


1. Name some features of ES6 in javascript.

<details>
  <summary>Click to expand!</summary>

ES6 is a set of features that were introduced in ECMAScript 2015. These features include arrow functions, template literals, destructuring assignment, and more.

Here are some of the key features of ES6:
- Arrow functions: Arrow functions provide a more concise syntax for writing functions. They are defined using the `=>` operator.
- Template literals: Template literals allow you to embed expressions inside strings. They are enclosed in backticks (`) and can be used to create multi-line strings.
- Destructuring assignment: Destructuring assignment allows you to extract values from arrays or objects and assign them to variables. It is done using the `=` operator.
- Spread operator: The spread operator allows you to expand an array or an object into individual elements. It is used to pass multiple arguments to a function.
- Classes: Classes provide a way to define objects with properties and methods. They are defined using the `class` keyword.
- Modules: Modules allow you to split your code into separate files and import/export functionality between them. They are defined using the `import` and `export` keywords.  
- Promises: Promises provide a way to handle asynchronous operations in JavaScript. They are used to represent the eventual completion or failure of an asynchronous operation.
- Generators: Generators allow you to define functions that can be paused and resumed. They are defined using the `function*` keyword.
- Maps and Sets: Maps and Sets are data structures that allow you to store key-value pairs. They are defined using the `Map` and `Set` constructors.

</details>


2. What is currying in javascript?

<details>
  <summary>Click to expand!</summary>

Currying is a technique in functional programming that allows you to transform a function that takes multiple arguments into a sequence of functions, each taking a single argument. This can be useful for creating more flexible and reusable code.

Here's an example of currying in JavaScript:

```javascript
function add(x) {
  return function(y) {
    return x + y;
  }
}

const addTwo = add(2);
console.log(addTwo(3)); // Output: 5
```

In this example, the `add` function takes a single argument `x` and returns a new function that takes a single argument `y` and returns the sum of `x` and `y`. The `addTwo` function is created by calling `add` with the argument `2`. The `addTwo` function can then be called with any value of `y` to get the sum of `2` and `y`.

</details>

3. what are arrow functions in javascript?
  <details>
  <summary>Click to expand!</summary>
  
Arrow functions are a shorthand syntax for writing functions in JavaScript. They provide a more concise and readable way to write functions, especially when using anonymous functions.

Here's an example of an arrow function in JavaScript:

```javascript
const add = (x, y) => x + y;
console.log(add(2, 3)); // Output: 5
```

In this example, the arrow function `add` takes two arguments `x` and `y` and returns their sum. The arrow function is defined using the `=>` operator, which is a shorthand for the `function` keyword.

</details>

4. What is prototype chain in javascript?

<details>
  <summary>Click to expand!</summary>

The prototype chain is a mechanism in JavaScript that allows objects to inherit properties and methods from other objects. It is a way to share behavior between objects.

Here's an example of how the prototype chain works in JavaScript:

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.sayName = function() {
  console.log(this.name);
}

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const dog = new Dog('Fido');
dog.sayName(); // Output: Fido
```

In this example, the `Animal` constructor is used to create a base class with a `sayName` method. The `Dog` constructor then uses the `Animal` constructor to create a new object with the `name` property. The `Dog` constructor also sets the `constructor` property of the new object to `Dog`. This allows the `Dog` object to be used as a constructor for other objects.


</details>


5. what is difference between call bind and apply in javascript?

<details>
  <summary>Click to expand!</summary>

The `call` method is used to call a function with a specific this value. 
It takes two arguments: the function to be called and the this value to use. 

The `apply` method is used to call a function with a variable number of arguments. 
It takes two arguments: the function to be called and an array of arguments to pass to the function.

The `bind` method is used to create a new function that, when called, has its `this` value pre-bound to a specific object. 
It takes two arguments: the function to be bound and the `this` value to use.

Here's an example of how the `call`, `apply`, and `bind` methods work in JavaScript:

Use the same examples as used in Pro Interview Section.

</details>

