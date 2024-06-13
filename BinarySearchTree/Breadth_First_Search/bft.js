class Node{
    constructor(key){
        this.key = key
        this.left = null
        this.right = null
    }
}

const BreadthFirstTraversal = function(root){
    // ask sir if tree not exist so what should i return 
    const values = []
    if(root === null){
        return []
    }

    const queue = [root]

    while(queue.length > 0){
        const node = queue.shift()
        values.push(node.key)

        // traverse left to right 
        if(node.left !==null){
            queue.push(node.left)
        }

        if(node.right !==null){
            queue.push(node.right)
        }
    }
    return values;
}