// How to create node & linkedlist?
// LinkedList is cutomized data structure with the help of an Array. 
// We can create linkedlist using Object or Class, etc.

// class is nothing but full of objects. In js their is no Class, just wrapprer the class.
class Node{
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}

class LinkedList{
    constructor(){
        // created an empty node list, e.g [1, 3, 4, 6], 1=> head, 6=> tail.
        this.head = null      
    }
}

// insert at the Beginning.
LinkedList.prototype.insertAtBeginning = function(data){
    const newNode = new Node(data, this.head);
    this.head = newNode;
}

// insert at the End.
// null treated as false.
LinkedList.prototype.insertAtEnd = function(data){
    const newNode = new Node(data);
    if (!this.head) {  //this.head is null, we can't go inside checking condition, so use !this.head for reverse the condition if true=>false, or false=>true.
        this.head = newNode;
        return;
    }
    let last = this.head
    while(last.next){
        last = last.next
    }

    last.next = newNode;
}

// insert at give node.
LinkedList.prototype.insertAfter = function(prevNode, data){
    if (!prevNode) {
        console.log("The given prevNode cannot be null");
        return;
    }

    const newNode = new Node(data, prevNode.next)
    prevNode.next = newNode
}

// delete the first node.(change the this. head, not delete the break linking)
LinkedList.prototype.deleteFirstNode = function(){
    if (!this.head) {
        console.log("head is empty");
        return 
    }
    this.head = this.head.next;
}

// delete last node(second last node)
LinkedList.prototype.deleteLastNode = function(){
    if (!this.head) {
        console.log("The head is empty");
        return 
    }

    if(!this.head.next){
        this.head = null; // if second node give null, delete firts node
        return
    }

    let secondLast = this.head;  // assume this.head is secondLast
    while(secondLast.next.next){
        secondLast = secondLast.next; // update the secondlast value with his next value and put null.
    }
    secondLast.next = null
}

// delete node with key(data) #leetcode(match the key) for delete node.
LinkedList.prototype.deleteByKey = function(key){
    // if list is empty.
    if(!this.head){
        console.log("The list is empty.")
        return
    }

    // key found at head.
    if (this.head.next === key) {
        this.head = this.head.next // update the this.head
        return
    }

    // traverse the node for finding key.
     let current = this.head

     while (current.next !== null) {
        if (current.next.data === key) {
            current.next = current.next.next
            return
        }
        current = current.next        
     }
     console.log("No node found with key: ", key);
}

// search node with key.
LinkedList.prototype.serach = function(key){
    let current = this.head
    while (current) {
        if (current.data === key) {
           return true 
        }
        current = current.next
    } 
    return false
}

// traversal print all nodes.
LinkedList.prototype.printList = function(){
    let current = this.head;

    // store the current.data in Array.
    let listValue = []

    while(current){
        listValue.push(current.data) // add data to list
        current = current.next //move to next node
    }

    if (listValue.length > 0){
        console.log(listValue.join(" -> "));  
    } else {
        console.log("The linkedlist empty.");
    }
    
}

// Reverse a linked list(little challenging):

LinkedList.prototype.reverse = function(){
    let current = this.head
    let prev = null
    let next = null

    // check if node is empty.
    while(current){
        next = current.next  // 1. current node update to next node.
        current.next = prev // 2. update the pointer from next node to previous node.
        prev = current      // 3. update previous by current node.
        current = next      //4. current go to the next node
    }

    // after loop is over, prev value will update as this.head node
    prev = this.head
}