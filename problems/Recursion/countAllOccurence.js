// arr = [1,2,3,3,5,3]
//key = 3

function countOccurence(arr, key){
    let count = 0
    for(let i =0; i< arr.length; i++){
        if(arr[i] === key){
            count++
        }
    }
    return count
}

const arr = [1,2,3,3,5,3]

// console.log(countOccurence(arr,1))
// console.log(countOccurence(arr,3))
// console.log(countOccurence(arr,5))

// recursive 

function recursiveCountOccurence(arr, key){
    
    if(arr.length === 0){
        return 0
    }
    return (arr[0]=== key? 1: 0) + recursiveCountOccurence(arr.slice(1), key)
}

let array = [1, 2, 3, 4, 1, 2, 1];
let key = 1;
// console.log(recursiveCountOccurence(array, key)); 


// pass index value
function recursiveCount(arr, key, index = 0){    
    if(index >= arr.length){
        return 0
    }
    return (arr[index]=== key? 1: 0) + recursiveCount(arr, key, ++index)
}

let array3 = [1, 2, 3, 4, 1, 2, 1];
let key2 = 1;

console.log( recursiveCount(array3, key2)); 