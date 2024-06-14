// string reverse

// iterative approach
function reverseString(string){
    let reverse = ''
    if(string === ''){
        return reverse
    }

    let length = string.length - 1 // string position start 0 if we dont minus 1 so value not found out of range thats why

    while(length >= 0){
        reverse += string[length]
        length--
    }
    return reverse
}

// console.log(reverseString("hello"))


// recursive approach 
const recursiveReverseString = (string)=>{
    if(string === ''){// base case 
        return '' // also right string variable
    }

    // return string[string.length - 1] + recursiveReverseString(string.substring(0, string.length - 1))
    
    let result =  recursiveReverseString(string.substring(0, string.length - 1))

    return string[string.length -1 ] + result

}

const result = recursiveReverseString("hello")
console.log(result)


/**
 * in unwinding time our function return value in 1 less because of length -1
 * and ham usi string ki last value ko har time first me add kar rahe hai 
 */