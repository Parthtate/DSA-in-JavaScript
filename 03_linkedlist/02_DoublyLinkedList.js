// Doubly Linked List: (DLL)

class Node{
    constructor(data, next = null, prev = null){  // define constructor because useing new keyword.
        this.data = data
        this.next = next
        this.prev = prev
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }
}

// insert node at beginning:
DoublyLinkedList.prototype.insertAtBeginning = function(data){
    const newNode = new Node(data, this.head, null)

    // if not is not empty.
    if (this.head !== null) {
        this.head.prev = newNode  
    } 
      this.head = newNode

    if (this.tail === null) {
        this.tail = newNode
    }
}

// insert node at End
DoublyLinkedList.prototype.insertAtEnd = function(data){
    const newNode = new Node(data, null, this.tail)

    // check if tail is not empty.
    if (this.tail !== null) {
        this.tail.next = newNode
        // this.tail = newNode // same code exist outside scope, so avoid code reputation.
    }
    this.tail = newNode // update tail

    if (this.head === null) {
        this.head = newNode
    }
}

// insert after give node
DoublyLinkedList.prototype.insertAfter = function(prevNode, data){
    if (prevNode == null) {
        console.log("Invalid prevNode!");
        return
    }

    const newNode = new Node(data, prevNode.next, prevNode)

    // if any data present in node
    if(prevNode.next !== null){
        prevNode.next.prev = newNode // access 2nd last node, then go to last node, access previous of last node and point to newNode.
        //prevNode.next = newNode // update newNode prevoius
    }
    prevNode.next = newNode

    // if data not present in node
    if (newNode.next == null) {
        // tail update 
        this.tail = newNode
    }
}

// delete first node.
DoublyLinkedList.prototype.deleteFirstNode = function(){
    if (!this.head) {
        console.log("nothing to delete!");
        return 
    }

    if (this.head === this.tail) {
        this.head = null
        this.tail = null
    } 
    else {
        this.head = this.head.next // update new this.head
        this.head.prev = null
    }
}

// delete last node.
DoublyLinkedList.prototype.deleteLastNode = function(){
    if (!this.tail) {
        console.log("DLL is empty.");
        return
    }

    // if this.head & this.tail value is equal.
    if (this.head === this.tail) {
        this.head = null
        this.tail = null
    } 
    else {
        // delete last node.
        this.tail = this.tail.prev // update this.tail to second last node.
        this.tail.next = null
    }
}

// reverse DLL
DoublyLinkedList.prototype.reverseDoubly = function(){
    let current = this.head;
    let temp = null

    // if any data present in DLL
    if (current) {  // or if(current != null)
        // swapping
        temp = current.prev
        current.prev = current.next
        current.next = temp
        // updation loop
        current = current.prev // prev is next after swapping.
    }

    // swapping tail to head
    if (temp != null) {
        this.tail = this.head
        this.head = this.tail.prev
    }
    
}