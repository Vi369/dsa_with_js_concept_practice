//Remove Duplicate Adjecnet

// iterative approach
function removeDupliAdj(inputString){
    let result = ""
    for (let i = 0; i < inputString.length; i++) {
        if(
            inputString[i] !== inputString[i+1] || 
            i === inputString.length
        ){
            result += inputString[i]
        }
    }
    return result
}

//  console.log(removeDupliAdj("helloo"))

// recursive way 
function recursiveRAD(inputString){
    if(inputString.length <=1){
        return inputString
    }

    if(inputString[0]===inputString[1]){
        return recursiveRAD(inputString.substring(1))
    }
    
    return inputString[0] + recursiveRAD(inputString.substring(1))
}


// console.log(recursiveRAD("vvikass"))
// console.log(recursiveRAD("Hherro"))



// stack approach 
function stackApproachRemoveDuplicate(inputString){
    let stack = []

    for(const character of inputString){
        if(stack.length === 0 || character !== stack[stack.length - 1]){
            stack.push(character)
        }else if(stack.length > 1 && character === stack[stack.length -1]){
            stack.pop()
        }
    }

    return stack.join("")
}

console.log(stackApproachRemoveDuplicate("vvikaaasssss"))

// TODO: using stack to remove all duplicate
/** remove both => input = "aabccdee" 
 * Output => "bde"
*/
// algo => char not == to all the string in the string

function removeAllDuplicateAdjecent(inputString){

}

