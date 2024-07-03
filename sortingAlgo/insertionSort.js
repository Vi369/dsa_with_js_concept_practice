function insertionsort(arr){

    for(let i = 1; i<arr.length; i++){
        let currentElement = arr[i];
        let j = i-1 // currentElement previous positon index

        while(arr[j] > currentElement && j>=0){
            arr[j+1] = arr[j]
            j--
        }

        arr[j+1] = currentElement
        console.log("call", arr.join(','))
    }
    return arr;
}

console.log(insertionsort([5,4,3,2,1]))