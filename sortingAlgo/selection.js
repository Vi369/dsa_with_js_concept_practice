/** 
 * in Selection sort selection is index not that index value
*/

function selectionSort(arr){

    for(let i = 0; i< arr.length - 1; i++){
        let minIndex = i
        console.log("i call")

        for(let j = i+1; j< arr.length; j++){
            console.log("j call")
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        //swap and replacement element
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
    }
    return arr;
}

const arr = [2,5,6,8,1,3]

console.log(selectionSort(arr));