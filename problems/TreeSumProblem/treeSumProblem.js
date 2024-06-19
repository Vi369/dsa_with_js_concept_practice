// DFS way 

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
        sum += queue.shift()

        if(root.right !==null){
            queue.push(root.right)
        }

        if(root.left !== null){
            queue.push(root.left)
        }

    }
    return sum;
}