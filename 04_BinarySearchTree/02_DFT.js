// Depth First Traversal 

// for reference not necessary to write
// class Node {
//     constructor(data){
//         this.data = data
//         this.left = null 
//         this.right = null
//     }
// }

// Iterative approach

const depthFirstTraversal = function(root){
    if (root === null) {
        return [];  // return an empty array
    }

    const values = [];
    const stack = [root];

    while (root.length > 0) {  // if any values present in tree then it goes.
        const node = stack.pop()
        values.push(node.data) // data, key, elements, objects are same 

        // travesal left and right to push values
        if (node.right !== null) {
            stack.push(node.right)
        }
        if (node.left !== null) {
            stack.push(node.left)
        }
    }
    return values
}

// Recursive apparoch

const recursiveDepthFirstTraversal = (root) => {
    if (root === null) {
        return // a message or empty Array
    }

    // it create automatically an Array, for storing data
    const leftValues = recursiveDepthFirstTraversal(root.left)
    const rightValues = recursiveDepthFirstTraversal(root.right)

    // return [root.key, leftValues, rightValues]
    // [a, [b, c, d], [d, e]]

    // return [root.key, ...leftValues, ...rightValues]
    // [a, b, c, d, d, e]

}

 
