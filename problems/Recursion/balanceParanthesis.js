// problem : ["(", "(", ")", ")", "(", ")"]


/**
 * 
 */

function balanceParanthesis(array, startIndex = 0, counter = 0){

    if(startIndex === array.length){
        return counter === 0
    }

    if(counter < 0){
        return false
    }


    if(array[startIndex] === "("){
        return balanceParanthesis(array, startIndex + 1, counter + 1)
    }else if(array[startIndex] === ")"){
        return balanceParanthesis(array, startIndex + 1, counter - 1)
    }else{
        return false
    }
}

let arr = ["(", "(", ")", ")", "(", ")"]
let arr1 = [")", "(", ")", ")", "(", ")"]

// const result = balanceParanthesis(arr1)
// console.log(result);


// itterative way 
function itterativeBalancePranthesis(arr){
    let count = 0;

    for(let i = 0; i<arr.length; i++){
        if(arr[i] === "("){
            count++;
        }else if(arr[i]=== ")"){
            count--;
        }else{
            return false
        }
    }

    if(count < 0){
        return false
    }

    if(count === 0){
        return true
    }
}

// console.log(itterativeBalancePranthesis(arr))
// console.log(itterativeBalancePranthesis(arr1))


// TODO: check all type prenthesi using stack 