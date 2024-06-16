// problem : ["(", "(", ")", ")", "(", ")"]

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


// check all type prenthesi using stack 

const checkBalanceParenthesis = (array)=>{
    let stack = [];

    for(let i=0; i< array.length; i++){
        let stackLastPopValue = stack[stack.length -1] 

        if(array[i] === "(" || array[i] === "{" || array[i] === "["){
            stack.push(array[i])
        }else if(
            stackLastPopValue === "(" && array[i] === ")" || 
            stackLastPopValue === "{" && array[i] === "}" || 
            stackLastPopValue === "[" && array[i] === "]"
        ){
            stack.pop();
        } else{ //tackLastPopValue === ")" || stackLastPopValue === "}" || stackLastPopValue === "]" 
            return false
        }    
    }

    return stack.length === 0
}


// example 
let arr3 = ["(", ")", "{","[","]","}"]
let arr4 = ["}","(", ")", "{","[","]","}"]

console.log(checkBalanceParenthesis(arr3))
console.log(checkBalanceParenthesis(arr4))