
function quickSort(arr, low = 0, high = arr.length -1){
    if(low < high){
        let pivotIndex = partition(arr, low, high);

        quickSort(arr, low, pivotIndex -1)
        // console.log("left",left);
        quickSort(arr, pivotIndex + 1, high)
        // console.log("right",right);
    }

    return arr;
}

function partition(arr, low, high){
    let pivot = arr[high];
    let i = low - 1;

    for(let j = low ; j < high; j++){
        if(arr[j] < pivot){
            i++;
            // swaping
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    i++;
    // final swaping of pivot and ith value
    [arr[i], arr[high]] = [arr[high], arr[i]]
    
    return i;
}

const arr = [8,2,4,6,3,1,5]

console.log(quickSort(arr));