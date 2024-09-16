// using chatgpt
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null; // Initialize the head as null for an empty list
    }

    // Insert at the beginning
    insertAtBeginning(data) {
        const newNode = new Node(data, this.head); // Point the new node to the current head
        this.head = newNode; // Update the head to the new node
    }

    // Insert at the end
    insertAtEnd(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode; // If the list is empty, set the new node as the head
            return;
        }
        let last = this.head;
        while (last.next) {
            last = last.next; // Traverse to the last node
        }
        last.next = newNode; // Set the new node as the next of the last node
    }

    // Insert after a given node
    insertAfter(prevNode, data) {
        if (!prevNode) {
            console.log("The given prevNode cannot be null");
            return;
        }
        const newNode = new Node(data, prevNode.next); // Point the new node to the next of prevNode
        prevNode.next = newNode; // Update prevNode's next to the new node
    }
}

    // Display the list (optional helper function for testing purposes)
//     display() {
//         let current = this.head;
//         while (current) {
//             process.stdout.write(`${current.data} -> `);
//             current = current.next;
//         }
//         console.log("null");
//     }
// }

// Example usage
// const list = new LinkedList();
// list.insertAtBeginning(1);
// list.insertAtEnd(3);
// list.insertAtEnd(4);
// list.insertAtEnd(6);
// list.display(); // Output: 1 -> 3 -> 4 -> 6 -> null

// const secondNode = list.head.next;
// list.insertAfter(secondNode, 5)
