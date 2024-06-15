// Implementation of a binary search tree

class BSTNode {
    constructor(key) {
        this.key = key // key -> data
        this.top = null // top subtree
        this.bottom = null // bottom subtree
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
}

// insertion in BST
/**
 * first take a data and create a node
 * check if root is empty it means it's the first value so insert a value
 * else call a helper method that compares value and adds value
 */
BinarySearchTree.prototype.insert = function(key) {
    const newNode = new BSTNode(key);
    if (this.root === null) {
        this.root = newNode;
    } else {
        this.insertMethod(this.root, newNode);
    }
}

// insert Method
/**
 * case1:
 * if rootNode.key > newNode.key it means it's stored in the top side of the tree
 * check rootNode top is null or not if it's null it means it's the first value of rootNode's top side so simply add the value
 * else call the method itself so it searches the top side null position and provide updated root value and key(data)
 */

/**
 * case2: (similar for the bottom side)
 * check if greater then means it's stored in the bottom side of the tree
 * if rootNode bottom = null if yes so it's bottom first value just add it
 * else call a method that finds null in the bottom side (calling method itself it's a recursive call so it finds the null position in the bottom side)
 * with updated root and data(key) in the end of the call it finds null and value is added
 */

BinarySearchTree.prototype.insertMethod = function(rootNode, newNode) {
    if (newNode.key < rootNode.key) {
        if (rootNode.top === null) {
            rootNode.top = newNode;
        } else {
            this.insertMethod(rootNode.top, newNode);
        }
    } else if (newNode.key > rootNode.key) {
        if (rootNode.bottom === null) {
            rootNode.bottom = newNode;
        } else {
            this.insertMethod(rootNode.bottom, newNode);
        }
    }
}

// deletion in BST
/**
 * call a method that checks all the cases and null the node
 * provide root node value and key value to method
 */

BinarySearchTree.prototype.delete = function(key) {
    this.root = this.deleteNode(this.root, key);
    return this.root
}

// deleteNode method
/**
 * if tree does not exist return null
 *
 * first check provided key is less than or greater if less so find key value in top side and if greater then find bottom side
 * case1: first check it's a leaf node if yes then null the node
 * case2: check if only one child if top is null then return bottom if bottom null then return top
 * case3: if node has 2 children then find the minimum value in the bottom side (approach in-order successor)
 * after getting min value call the delete method (it's a recursive call) that finds the value and null the value
 *
 */

BinarySearchTree.prototype.deleteNode = function(rootNode, key) {
    if (rootNode === null) {
        return null; // tree does not exist
    }

    if (key < rootNode.key) {
        rootNode.top = this.deleteNode(rootNode.top, key);
    } else if (key > rootNode.key) {
        rootNode.bottom = this.deleteNode(rootNode.bottom, key);
    } else {
        if (rootNode.top === null && rootNode.bottom === null) {
            return null; // this value return where it's called
        } else if (rootNode.top === null) {
            return rootNode.bottom;
        } else if (rootNode.bottom === null) {
            return rootNode.top;
        } else {
            const minValueNode = this.findMinNode(rootNode.bottom); // find min in the bottom side
            rootNode.key = minValueNode.key; // replace the node
            rootNode.bottom = this.deleteNode(rootNode.bottom, minValueNode.key); // delete the node
        }
    }
    return rootNode;
}

// find minimum value method
/**
 * traverse in the top side because we want minimum value
 */

// findMinNode method
BinarySearchTree.prototype.findMinNode = function(rootNode) {
    while (rootNode.top !== null) {
        rootNode = rootNode.top;
    }
    return rootNode;
}


// search value exist or not  TODO: 


// usage example 
const bst = new BinarySearchTree();
bst.insert(100)
bst.insert(80)
bst.insert(10)
bst.insert(90)
bst.insert(50)
bst.insert(70)
bst.insert(60)
bst.insert(40)
bst.insert(30)

console.log(JSON.stringify(bst))
const result = bst.delete(30)
console.log(JSON.stringify(bst))


const bstString = new BinarySearchTree();
bstString.insert("Superman")
bstString.insert("Batman")
bstString.insert("Spiderman")
bstString.insert("Wonder Women")
bstString.insert("Monkey Man")

console.log(JSON.stringify(bstString))

bstString.delete("Monkey Man")

console.log(JSON.stringify(bstString))