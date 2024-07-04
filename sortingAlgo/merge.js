// merge sort 
function mergeSort(arr){
    // edge case
    if(arr.length === 1){
        return arr;
    }
    // first find the arr middle 
    const middle = Math.floor(arr.length / 2);

    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right))
}


function merge (left , right){
    let result = [];
    let leftPointer = 0
    let rightPointer = 0
    while(leftPointer < left.length && rightPointer < right.length){
        if(left[leftPointer] < right[rightPointer]){
            result.push(left[leftPointer])
            leftPointer++
        }else{
            result.push(right[rightPointer])
            rightPointer++
        }
    }

    // remaining left element 
    while(leftPointer < left.length){
        result.push(left[leftPointer]);
        leftPointer++
    }

    // remaining right element
    while(rightPointer < right.length){
        result.push(right[rightPointer])
        rightPointer++
    }

    return result;
}

console.log(mergeSort([4,5,2,3,1]))