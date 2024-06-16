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


/** remove both => input = "aabccdee" 
 * Output => "bde"
*/

// TODO: using stack to remove all duplicate


