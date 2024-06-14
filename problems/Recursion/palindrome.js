// madam === madam  this type of value called palindrome

function palindrome(str){
    if(str.length<=1){
        return true
    }else if(str[0] === str[str.length -1]){
        return palindrome(str.substring(1, str.length -1))
    }else{
        return false
    }
}

// console.log(palindrome("ada"))
// console.log(palindrome("iji"))

function palindromeCheckAllValue(value){
    let str = String(value).split(' ').join('').trim();
    if(str.length<=1){
        return true
    }else if(str[0] === str[str.length -1]){
        return palindrome(str.slice(1, str.length -1))
    }else{
        return false
    }
}

console.log(palindromeCheckAllValue(121))
console.log(palindromeCheckAllValue([1,2,1]))
console.log(palindromeCheckAllValue('madam'))
console.log(palindromeCheckAllValue('a santa at nasa'))

// let string = 'a santa at nasa'

// console.log(string.trim())





