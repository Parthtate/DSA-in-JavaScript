// core implementation of Binary Search Tree
class BSTNode {
    constructor(key){
        this.key = key
        this.left = null  
        this.right = null 
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null
    }

    // insert newNode
    insert(key){
        const newNode = new BSTNode(key)

        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }     
    }


    insertNode(node, newNode) { // node -> this.root
        // when value is smaller
        if (newNode.key < node.key) { // check if node(this.root) is smaller than given value.

            if (node.left === null) {  // check if left(small) value can be null or not.
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            } // this loop is called recursion.
        } 

        // when value is bigger
        else {
            if (node.right === null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }
/*********************************************************************************************************************************************/
    delete(key) {
        this.root = this.deleteNode(this.root, key) // deleteNode means replace the node from the leafNode.
    }
    deleteNode(node, key){ // node -> root
        if (node == null) {
            // console.log("key is not defined!");
            return null
        }

        // travers part
        if (key < node.key) { 
            node.left = this.deleteNode(node.left, key)
        } else if (key > node.key) {
            node.right = this.deleteNode(node.right ,key)
        } 
        else { // check for leafNode
            if(node.left === null && node.right === null){
                return null;
            } // check for 1 node is present
            else if (node.left === null){
                return node.right;
            } else if (node.right === null) {
                return node.left
            } 
            else {
                let tempNode = this.findMinNode(node.right)
                node.key = tempNode.key // replace node from smallest key to root.node
                node.right = this.deleteNode(node.right, tempNode.key)
            }
        }
        return node
    }

    findMinNode(node){
        while (node.left !== null) {
            node = node.left
        }
        return node
    }
  /******************************************************************************************************************************* */  

  // pratice recursion tree in-pre-post order traversal.
  // pre order -> print root first 
  // in order -> print root in middle
  // post order -> print root in last

  // in-order (Left, Root, Right)
  inOrderTraversal(){
    const result = []
    this.inOrder(this.root, result)
    return result
  }

  inOrder(){
    if (node !== null) {
        this.inOrder(node.left, result)
        result.push(node.key)
        this.inOrder(node.right, result)
    }
  }

  // pre-Order Traversal (Root, Left, Right)
  preOrderTraversal(){
    const result = [];
    this.preOrder(this.root, result)
    return result
  }

  preOrder(){
    if (node.key !== null) { 
    result.push(node.key)
    this.preOrder(node.left, result)
    this.preOrder(node.right, result)
    }
  }

  // postOrder Traversal (Left, Right, Root)
  postOrderTraversal(){
    const result = [];
    this.postOrder(this.root, result)
    return result
  }

  postOrder(){
    if(node.key !== null) { 
    this.postOrder(node.left, result)
    this.postOrder(node.right, result)
    result.push(node.key)
    }
  }
}

