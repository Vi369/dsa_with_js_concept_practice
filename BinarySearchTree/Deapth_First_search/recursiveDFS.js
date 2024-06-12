class Node{
    constructor(key){
        this.key = key
        this.left = null
        this.right = null
    }
}


// recursive call 
const recursiveDeapthFirstTraversal = (root)=>{
    if(root === null){
        return [] // this is the base case of recursive and also if tree not exist so it return null
    }

    const leftValue = recursiveDeapthFirstTraversal(root.left);
    const rightValue = recursiveDeapthFirstTraversal(root.right);

    return [root.key, ...leftValue, ...rightValue]
}



// const tree = new Node(1)

// tree.left = new Node(2);
// tree.right = new Node(3);
// tree.left.left = new Node(4);
// tree.left.right = new Node(5);
// tree.right.left = new Node(6);
// tree.right.right = new Node(7);

// second example 
const fruit = new Node("apple")

fruit.left = new Node("banana");
fruit.right = new Node("chery");
fruit.left.left = new Node("papaya");
fruit.left.right = new Node("grapse");
fruit.right.left = new Node("lichi");
fruit.right.right = new Node("mango");

const array = recursiveDeapthFirstTraversal(fruit);

console.log(array) /**
actual output without spread => [
  1,
  [ 2, [ 4, [], [] ], [ 5, [], [] ] ],
  [ 3, [ 6, [], [] ], [ 7, [], [] ] ]
]
*/

// if spread then combines the values
/** output => [
  1, 2, 4, 5,
  3, 6, 7
]

*/

