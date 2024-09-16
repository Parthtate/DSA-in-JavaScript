// Queue: is like a McDonald's cutomer row, first person is get his order then second person, after third one & so on.
// queue is expensive data structure if their are Millons of rows.
// queue is behaivor like Array, we just able how to access this queue from user.
// In queue we cannot access directly Array.

class Queue{
    constructor(){
        this.queue = []; //queue is like Empty Array
    }

    // push data from back
    enqueue(data){
        this.queue.push(data)
    }

    // remove the value from first place
    dequeue(){
        if (this.isEmpty()) {
            return "Queue is Empty!"
        }
        return this.queue.shift() // Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
    }

    // if any case the index is empty,
    isEmpty(){
        return this.queue.length === 0; // return true or false
    }

    // peek() return first element from queue
    peek(){
        if (this.isEmpty()) { 
            return "Queue is Empty!"
        } 
        return this.queue[0]
    }

    // size() returns the length of queue
    size(){
        return this.queue.length
    }

    //clear() remove all values from queue.
    clear(){
        this.queue = []
    }

    printQueue(){
        let str = "";
        for (let i = 0; i < this.queue.length; i++) {
            str += this.queue[i] + "\n";           
        }
        return str
    }


}

 // Usage Examples:
 let myQueue = new Queue();

 myQueue.enqueue(10) 
 myQueue.enqueue(80) 
 myQueue.enqueue(60) 
 myQueue.enqueue(56)
 
 myQueue.dequeue();
//  myQueue.clear()
myQueue.size()

 console.log(myQueue.printQueue());
