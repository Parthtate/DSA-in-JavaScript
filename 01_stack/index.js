// Basic level implementation of Stack.

// stack is a spacial type of data structure similar like Array.
// In stack we control how data add or delete.

// class create constructor it helps invoke any data sturcture.
class Stack {
    constructor(){
        this.stack = []
    }

    //stack.push() cannot use like this, so created push() method
    push(data){
        this.stack.push(data)
    }

    // remove value from the stack
    pop(){
        this.stack.pop()
    }

    // peek() returns the value from top of the stack. 
    peek(){
        return this.stack[this.stack.length - 1] // -1 is because length start with 1 
    }

    // isEmpty() returns stack is empty or not
    isEmpty(){
        return this.isEmpty === 0; // it will returns the true if empty or false
    }

    // size() returns length of stack
    size(){
       return this.stack.length
    }

    // destory, remove, clear values from stack
    clear(){
        this.stack = [] // no need use loop, directly Assing empty Array = []
    }

    // conatains() returns value or element is available in stack.
    conatains(element){
        return this.stack.includes(element) // include Determines whether an array includes a certain element, returning true or false as appropriate.
    }

    reverse(){
        return this.stack.reverse() // Reverses the elements in an array in place
    }

    // printStack() for printing every element from stack.
    printStack(){
        let str = "";
        for (let i = 0; i < this.stack.length; i++) {
            str += this.stack[i] + "\n";
        }
        return str
    }
}

// usage Examples:

let myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(4);

myStack.pop();

myStack.reverse();

myStack.conatains(5);

myStack.isEmpty();

myStack.clear();

console.log(myStack.printStack());




