# Javascript Questions - Set 5

1. How to compare two objects in javascript?

<details>
  <summary>Click to expand!</summary>

You can compare two objects in JavaScript using the `===` operator. This operator checks if the two objects are the same object or if they have the same value.

You can convert an object to a string using the `toString()` method. This method returns a string representation of the object. You can then compare the string representations of the objects using the `===` operator.

</details>


2. What is event delegation in javascript?

<details>
  <summary>Click to expand!</summary>

Event delegation is a technique in JavaScript that allows you to attach event listeners to a parent element and handle events for its child elements. This can be useful for creating more flexible and reusable code.

Here's an example of event delegation in JavaScript:

```javascript
const parentElement = document.getElementById('parent');
const childElements = document.getElementsByClassName('child');

childElements.forEach(childElement => {
  childElement.addEventListener('click', handleClick);
});

function handleClick(event) {
  console.log('Child element clicked');
}
```

In this example, the `parentElement` variable is used to get the parent element with the ID `'parent'`. The `childElements` variable is used to get all the child elements with the class `'child'`. The `forEach` method is used to iterate over each child element and attach a click event listener to it. The `handleClick` function is used to handle the click event for each child element.

</details>

3. What is event bubbling and capturing in javascript?
  <details>
  <summary>Click to expand!</summary>
  
Event bubbling is a technique in JavaScript that allows you to handle events for child elements by attaching event listeners to the parent element. This can be useful for creating more flexible and reusable code.

Event capturing is a technique in JavaScript that allows you to handle events for child elements by attaching event listeners to the child element. This can be useful for creating more flexible and reusable code.

</details>

4. What is shallow copy and deep copy in javascript?

<details>
  <summary>Click to expand!</summary>

Shallow copy is a copy of an object whose references are same. It creates a new object with the same properties as the original object. If you modify the properties of the new object, it will also modify the original object.

Deep copy is a copy of an object that creates a new object with the same properties and values. It does not share the same references between the original object and the new object. If you modify the properties of the new object, it will not modify the original object.

```javascript 
// Shallow copy
const person1 = { name: 'John', age: 30 };
const person2 = person1;
person2.age = 31;
console.log(person1.age); // Output: 31

// Deep copy
const person1 = { name: 'John', age: 30 };
const person2 = JSON.parse(JSON.stringify(person1));
person2.age = 31;
console.log(person1.age); // Output: 30
```


</details>


5. What is an IIFE in JavaScript?

<details>
  <summary>Click to expand!</summary>

An IIFE, or immediately-invoked function expression, is a JavaScript function that is invoked immediately after it is defined. It is often used to create a private scope for variables and functions.

Here's an example of an IIFE in JavaScript:

```javascript
(function() {
  // Private variables and functions
  const name = 'John';
  function sayHello() {
    console.log('Hello, ' + name + '!');
  }

  // Public functions
  function greet() {
    console.log('Hello, world!');
  }
})();

// Output:
// Hello, John!
// Hello, world!
```

In this example, the IIFE is immediately invoked after it is defined. The `name` variable and the `sayHello` function are private to the IIFE, and they cannot be accessed from outside the IIFE. The `greet` function is also private to the IIFE, but it can be accessed from outside the IIFE.

</details>

