# Javascript Questions - Set 2


1. Disuss Promise and Promise chaining in javascript.

<details>
  <summary>Click to expand!</summary>

Promises are a way to handle asynchronous operations in JavaScript. They allow you to write code that can be executed asynchronously, without blocking the main thread. Promises are created using the `Promise` constructor, and can be chained together using the `then` method.

Promises have three states: `pending`, `fulfilled`, and `rejected`. When a promise is pending, it means that the asynchronous operation is still in progress. When a promise is fulfilled, it means that the asynchronous operation has completed successfully. When a promise is rejected, it means that the asynchronous operation has failed.

Promises can be chained together using the `then` method. The `then` method takes two arguments: a success callback and an error callback. The success callback is called when the promise is fulfilled, and the error callback is called when the promise is rejected.

Here's an example of using promises to fetch data from an API:

```javascript
fetch('https://api.freeapi.app/v1/jokes/random')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```


</details>


2. What is async/await in javascript?

<details>
  <summary>Click to expand!</summary>

Async/await is a syntax feature in JavaScript that allows you to write asynchronous code in a more synchronous way. It uses the `async` and `await` keywords to define asynchronous functions.

Here's an example of using async/await to fetch data from an API:

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.freeapi.app/v1/jokes/random');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData()
  .then(() => console.log('Data fetched'))
  .catch(error => console.error(error));
```

In this example, the `fetchData` function is defined as an asynchronous function using the `async` keyword. The `await` keyword is used to wait for the `fetch` function to complete before moving on to the next line of code. All code after the `await` keyword, rest of the function is executed in the microtask queue.
</details>

3. Discuss callback and callback hell in javascript.
  <details>
  <summary>Click to expand!</summary>
  
  Callback functions are functions that are passed as arguments to other functions and are called when a certain event occurs. They are commonly used in JavaScript to handle asynchronous operations, such as making HTTP requests or reading from a file.

  example:

  ```javascript
  function readFile(filename, callback) {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) return callback(err);
      callback(null, data);
    });
  }

  readFile('file.txt', (err, data) => {
    if (err) throw err;
    console.log(data);
  });

  setTimeout(() => {
    console.log('Timeout');
  }, 1000);
  ```

Callback hell is a problem in JavaScript where functions are nested inside each other, making the code difficult to read and understand. It can lead to callbacks being called multiple times or not being called at all, which can cause unexpected behavior.

Here's an example of callback hell:

```javascript

fetchRandomJoke(joke) =>{
  console.log(joke);
  translateJoke(joke, translation) =>{
    console.log(translation);
    writeToFile(translation, file) =>{
      console.log('Joke written to file');
      sendEmail(translation, email) =>{
        console.log('Joke sent to email');
      }
    }
  }
}

//better way to do it
const fetchRandomJoke = async (joke) => {
  const joke = await fetchJoke();
  const translation = await translateJoke(joke);
  await writeToFile(translation, file);
  await sendEmail(translation, email);
}
```

In this example, the `fetchRandomJoke` function is called with a callback function that is passed to the `translateJoke` function. The `translateJoke` function is called with a callback function that is passed to the `writeToFile` function. The `writeToFile` function is called with a callback function that is passed to the `sendEmail` function.

The problem with this code is that the callback functions are nested inside each other, making the code difficult to read and understand. It can lead to callbacks being called multiple times or not being called at all, which can cause unexpected behavior. To avoid callback hell, it's recommended to use async/await or promises to handle asynchronous operations.
  

</details>

4. What is the diffeence between == and === in javascript?

<details>
  <summary>Click to expand!</summary>

`==` compares the values of two operands for equality, while `===` compares the values of two operands for strict equality. In other words, `==` checks if the operands are equal, while `===` checks if the operands are equal and of the same type.

Here's an example of using `==` and `===` in JavaScript:

```javascript
let a = 5;
let b = 5;

console.log(a == b); // Output: true
console.log(a === b); // Output: true

a = '5';
b = '5';

console.log(a == b); // Output: false
console.log(a === b); // Output: false
```

In this example, the `==` operator is used to compare the values of `a` and `b`, and the result is `true`. The `===` operator is used to compare the values of `a` and `b`, and the result is also `true`.

In the second example, the `==` operator is used to compare the values of `a` and `b`, and the result is `false`. The `===` operator is used to compare the values of `a` and `b`, and the result is also `false`.

</details>


5. How to create object in javascript?

<details>
  <summary>Click to expand!</summary>

Objects are a fundamental data type in JavaScript. They can be created using object literals or constructor functions.

Object literals are enclosed in curly braces `{}` and are used to create objects with key-value pairs. Here's an example of an object literal:

```javascript
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};
```

Constructor functions are used to create objects with custom properties and methods. Here's an example of a constructor function:

```javascript
function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}

const person = new Person('John', 30, 'New York');
```

In this example, the `Person` function is used as a constructor function to create a new object with the specified properties.

Although there are other ways to create objects such as using the `Object.create()` method, object literals and constructor functions are the most common ways to create objects in JavaScript.

</details>

