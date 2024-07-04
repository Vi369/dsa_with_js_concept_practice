function quickSort(arr, low = 0, high = arr.length -1){
    // edge case
    if(low < high){
        let pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, high)
    }
    return arr;
}

function partition(arr, low, high){
    let pivot = arr[high];
    let i = low -1;

    for(let j = low; j< high; j++){
        if(arr[j] < pivot){
            i++;
            // swap the 
            [arr[i], arr[j]]= [arr[j], arr[i]]
        }
    }
    i++;
    // final swap the ith value and pivot value
    [arr[i], arr[high]] = [arr[high], arr[i]];

    return i
}

console.log(quickSort([2,4,1,7,8,3,9,6,5]))