function bubbleSort(array){
    let isSwap;
    do {
        isSwap = false;
        for(let i = 0 ; i<array.length -1; i++){
            if(array[i] > array[i+1]){
                const temp = array[i]
                array[i] = array[i+1]
                array[i+1] = temp;
                isSwap = true
            }
        }
    } while (isSwap);
    return array;
}

const array = [4,2,3,1]

const array2 = [1,2,3,4]

console.log(bubbleSort(array));

console.log(bubbleSort(array2));