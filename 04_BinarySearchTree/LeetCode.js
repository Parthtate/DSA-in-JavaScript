// Problems: Sum of all node.key in tree
// class Node {
//     constructor(key) {
//         this.key = key;
//         this.left = null;
//         this.right = null;
//     }
// }

// breadth first search for sumOfNodes.

const sumOfTree = (root) => {
    if (root === null) {
        return 0;
    }

    const queue = [ root ];
    let sum = 0;

    while (queue.length > 0) { // queue lenght is greater than 0 than it goes enter the loop.
       const node = queue.shift();
       sum += node.key;

       if (node.left !== null) {
        queue.push(node.left)
       }

       if (node.right !== null) {
        queue.push(node.right)
       }
    }
}

// depth 

const treeSum = (root) => {
    if (root === null) {
        return 0;
    }

    return root.key + treeSum(root.left) + treeSum(root.right)
}