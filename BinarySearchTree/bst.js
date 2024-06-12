// implementation bst
class BSTNode{
    constructor(key){
        this.key = key
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    insert(key){
        const newNode = new BSTNode(key);
        if(this.root === null){// it means this is the first value in bst
            this.root = newNode;
        }else{
            this.insertMethod(this.root, newNode) 
        }
    }

    insertMethod(node, newNode){
        if(newNode.key < node.key){ // comparision between root value and newNode key value
            if(node.left === null){
                node.left = newNode
            }else{
                this.insertMethod(node.left, newNode) 
            }
        }else{ // means value is greater then root
            if(node.right === null){
                node.right = newNode
            }else{
                this.insertMethod(node.right, newNode)
            }
        }
    }

    delete(key){// we assume jis node ko delete kar rahe hai wo root hai
        this.root = this.deleteNode(this.root, key) // key means kya delete karna hai
    }

    deleteNode(node, key){// node => root , key is the value

        if(node === null){ // if tree null not exit 
            return null
        }

        if(key < node.key){ // if yes so its go tree left part
            node.left = this.deleteNode(node.left, key) // but this time we pass this root where he stand
        } else if(key > node.key){ // means we go tree right sight
            node.right = this.deleteNode(node.right, key) // right node root and key 
        }else{ // in case after traversing we find the key

            // condition first 
            if(node.left === null && node.right === null){ // leaf node
                return null
            }else if(node.left === null) {// means only one child in right so return right child
                return node.right
            }else if(node.right === null){
                return node.left 
            }else{ // root has 2 child
                let tempNode = this.findMinNode(node.right) // because we want rigth minimun node we traverse rigth root node in left side
                node.key = tempNode.key;
                node.right = this.deleteNode(node.right, tempNode.key) // deletion change finding in right ,remove the tempnode key
            }
        }
        return node;
    }

    findMinNode(node){
        while(node.left !==null){ // find the left side null value if null receive it means its a last and minimum value in left side 
            node = node.left
        }
        return node
    }

    // in pre and post order traversal 
    inorderTraversal(){
        const result = []
        this.inorder(this.root, result)
        return result
    }

    inorder(node, result){
        if(node !== null){
            this.inorder(node.left, result)
            result.push(node.key)
            this.inorder(node.right, result)
        }
    }
    // pre order traversal 
    preOrderTraversal(){
        const result = []
        this.preOrder(this.root, result)
        return result
    }

    preOrder(node, result){
        if(node !== null){
            result.push(node.key)
            this.preOrder(node.left, result)
            this.preOrder(node.right, result)
        }
    }

    // Post order traversal 
    postOrderTraver(){
        const result = []
        this.postOrder(this.root, result)
        return result
    }

    postOrder(node, result){
        if(node !==null){
            this.postOrder(node.left, result)
            this.postOrder(node.right, result)
            result.push(node.key)
        }
    }
}

// 

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

const inorder = bst.inorderTraversal();
const preOrder = bst.preOrderTraversal()
const postOrder = bst.postOrderTraver()

inorder.map((data)=>{
    console.log("inorder:->", data)
})

preOrder.map((data)=>{
    console.log("preOrder:->", data)
})

postOrder.map((data)=>{
    console.log("postOrder:->", data)
})




