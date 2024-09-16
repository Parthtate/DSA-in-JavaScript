// Breadth First Search and optimization

// Queue data structure are use.
// class Node {
//     constructor(key){
//         this.key = key
//         this.left = null 
//         this.right = null
//     }
// }

const breadthFirstSearch = (root) => {
    if (root === null) {
        return []; // ask interviewer what type of o/p show when Array is empty
    }

    const values = [];
    const queue = [root];

    while (queue.length > 0) {
        const node = queue.shift();
        values.unshift(node.key); // Collect values in the BFS order

        if (node.left !== null) {
            queue.push(node.left)
        }
        if (node.right !== null) {
            queue.push(node.right);
        }
    }
    return values
}