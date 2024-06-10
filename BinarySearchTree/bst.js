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

    // insert(key){
    //     const newNode = new BSTNode(key);
    //     if(this.root === null){
    //         this.root = newNode;
    //     }else{
    //         this.insertMethod(this.root, newNode)
    //     }
    // }

    // insertMethod(node, newNode){ // node means this.root
    //     if(newNode.key < node.key){
    //         if(this.left === null){
    //             this.left = newNode
    //         }else(
    //             this.insertMethod(this.left, newNode)
    //         )
    //     }else{
    //         if(this.right === null){
    //             this.right = newNode
    //         }else{
    //             this.insertMethod(this.right, newNode)
    //         }
    //     }
    // }

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
}

