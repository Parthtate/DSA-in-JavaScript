// How to explain Promise and queue.

console.log("Start!"); // Synchronously call stack

setTimeout(() => {  // Store in Task queue.
    console.log("Timeout");
}, 0);

Promise.resolve("Promise")
.then(resolve => {  // Store in Mico-task queue.
    console.log(resolve);
})
.then(resolve => { // called chaining 
    console.log(resolve);
})

console.log("End.");  // Synchronously run, in call stack.