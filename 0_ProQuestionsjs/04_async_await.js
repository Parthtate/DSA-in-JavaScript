// How to explain async/await.

const one = () => Promise.resolve("one");
 

async function test(){
    console.log("Inside test function"); 
    const result = await one(); 
    console.log(result);
    console.log("chai aur code"); // after use await keyword, all methods goes to the micro-task queue.
    const greet = "Namaste!";
    console.log(greet);
};

console.log("Before calling function!"); 
test();
console.log("After calling function.");
