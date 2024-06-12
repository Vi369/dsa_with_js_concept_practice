// Implementation binary search tree

class BSTNode{
    constructor(key){
        this.key = key  // key -> data
        this.top = null  // left subtree 
        this.bottom = null  // right subtree
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null 
    }
}

// insertion on BST
/** 
 * first take a data and create a node 
 * check if root is empty it means its a first value so insert a value
 * else call a helper method that compare value and add value
 */

BinarySearchTree.prototype.insert = function(key){
    const newNode = new BSTNode(key);
    if(this.root === null){
        this.root = newNode
    }else{
        this.root = this.insertMethod(this.root, newNode)
    }
}

// insert Method 
/**
 * case1: 
 * if rootNode.key < newNode.key it means its store in top side of tree
 * check rootNode top is null or not if it null it means its a first value of rootnode top side so simply add the value
 * else call a method itself so it search the top side null position and provide updated root value and key(data)
 */

/**
 * case2: (similar for the bottom side)
 * check if greter then means its store bottom side of tree
 * if rootnode bottom = null if yes so its bottom first value just add it 
 * else call a method that find null in bottom side (calling method itself its a recursive call so it find in the bottom side of null position)
 * with update root and data(key) in the end of the call it find null and value is added
 */

BinarySearchTree.prototype.insertMethod()  = function(rootNode, newNode){
    if(rootNode.key < newNode.key){
        if(rootNode.top === null){
            rootNode.top = newNode;
        }else{
            rootNode.top = this.insertMethod(rootNode.top, newNode)
        }
    }

    if(rootNode.key > newNode.key){
        if(rootNode.bottom === null){
            rootNode.bottom = newNode;
        }else{
            rootNode.bottom = this.insertMethod(rootNode.bottom , newNode);
        }
    }
}

// deletion in BST
/**
 * call a method that check all the cases and null the node
 * provide root node value and key value to method 
 */

BinarySearchTree.prototype.delete = function(key){
    return this.root = deleteNode(this.root, key);
}

// deleteNode method 
/**
 * if tree not exist return null
 * 
 * first check provide key is less then or greater if less so find key value in top side and if greater then find bottom side
 * case1: firt check its a leaf node if yes then null the node
 * case2: check if only one child if top is null then return bottom if bottom null then return top
 * case3: if node have 2 child then find the minimum value in the bottom side (approach in order successor)
 * after get min value call the delete method (its a recursive call) that find the value and null the value 
 * 
 */

BinarySearchTree.prototype.deleteNode = function(rootNode, key){
    if(rootNode === null){
        return null // tree not Exist
    }

    if(key < rootNode.key){
        rootNode.top = this.deleteNode(rootNode.top, key);
    }else if( key > rootNode.key){
        rootNode.bottom = this.deleteNode(rootNode.bottom, key)
    }else{
        if(rootNode.top === null && rootNode.bottom === null){
            return null // this value return where its call
        }else if(rootNode.top === null){
            return rootNode.bottom
        }else if(rootNode.bottom === null){
            return rootNode.top
        }else{

            const minValueNode = this.findMinNode(rootNode.bottom); // find in min the bottom side
            rootNode.key = minValueNode.key; // replace the node
            rootNode.bottom = this.deleteNode(rootNode.bottom, minValueNode.key) // delete the node
        }
    }
    return rootNode;
}

// find minmum value method
/**
 * traverse in the bottom top side because we want minimum value
 */

// findMinNode method
BinarySearchTree.prototype.findMinNode() = function(rootNode){
    while(rootNode.top !== null){
        rootNode = rootNode.top
    }
    return rootNode;
}



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



const bstString = new BinarySearchTree();
bstString.insert("Superman")
bstString.insert("Batman")
bstString.insert("Spiderman")
bstString.insert("Wonder Women")
bstString.insert("Monkey Man")