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

    delete(key){
        this.root = this.deleteNode(this.root, key);
    }

    deleteNode(node, key){ // here node -> this.root
        if(node === null){
            return null
        }

        if(key < node.key){
            node.left = this.deleteNode(node.left , key)
        } else if(key > node.key){
            node.right = this.deleteNode(node.right , key)
        }else{
            // if node with no child or one child
            if(node.left === null && node.right === null){
                return null
            }else if(node.left === null){
                return node.right
            }else if(node.right === null){
                return node.left
            }else{ // if node (root) has 2 child
                let tempNode = null;

                // in order of predecessor (max in the left subtree)
                tempNode = findMaxNode(node.left);

                // delete in order of predecessor
                node.left = this.deleteNode(node.left, tempNode.key)
            }    
        }
        return node;
    }

    // find max value in left subtree
    findMaxNode(node){ // node provide left side root
        let current = node
        while(current.right !==null){
            current = current.right
        }
        return current
    }
}

