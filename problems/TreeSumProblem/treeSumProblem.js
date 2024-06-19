// DFS way 

class TreeNode {
    constructor(key) {
      this.key = key;
      this.left = null;
      this.right = null;
    }
  }

function treeSum(root){
    if(root === null){
        return 0
    }

    const leftSum = treeSum(root.left)
    const rightSum = treeSum(root.right)

    return root.key + leftSum + rightSum
}


// BFs

function treeSumBFS(root){
    let sum = 0;
    if(root === null){
        return sum // depends
    }

    let queue = [root]

    while(queue.length>0){
        const node = queue.shift()
        sum += node.key

        if(node.right !==null){
            queue.push(node.right)
        }

        if(node.left !== null){
            queue.push(node.left)
        }

    }
    return sum;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// console.log("Sum of tree nodes:", treeSum(root));

console.log("Sum of tree nodes:", treeSumBFS(root));

