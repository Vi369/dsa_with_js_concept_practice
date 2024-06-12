class Node{
    constructor(key){
        this.key = key
        this.left = null
        this.right = null
    }
}



const depthFirstTraversal = (root)=>{
    if(root === null){ // tree is empty
        return []
    }

    // create stack that already have base value 
    const stack = [root]
    const values = []

    while(stack.length > 0){ 
        const node = stack.pop();
        values.push(node.key)

        // go left side first 
        // if(node.right !== null){
        //     stack.push(node.right)
        // }

        // if(node.left !== null){
        //     stack.push(node.left)
        // }
        

        // go right side first then
        if(node.left !==null){
            stack.push(node.left)
        }

        if(node.right !== null){
            stack.push(node.right)
        }
    }
    return values;
}

const fruit = new Node("apple")

fruit.left = new Node("banana");
fruit.right = new Node("chery");
fruit.left.left = new Node("papaya");
fruit.left.right = new Node("grapse");
fruit.right.left = new Node("lichi");
fruit.right.right = new Node("mango");

const result = depthFirstTraversal(fruit)

console.log(result) 

