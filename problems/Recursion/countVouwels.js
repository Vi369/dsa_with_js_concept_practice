// problem : given sentence count vowels

const isVowel = (character)=>{
    const lowerChar = character.toLowerCase();
    const vowel = 'aeiou'
    if(vowel.indexOf(lowerChar) !== -1){
        return true
    }else{
        return false
    }
}

const countVowel = (string)=>{
    let count = 0
    if(string === ''){
        return count
    }

    for(let i = 0; i < string.length; i++){
        if(isVowel(string[i])){
            count += 1
        }
    }
    return count
}


// example 
// console.log(countVowel("helloaeiou"))


// recursive approach
function recursiveCountVowels(string, stringLength){
    console.log(`Length: ${stringLength}, Current String ${string.substring(0, stringLength)}, string: ${string}`)
    
    if (stringLength == 1) {
      console.log("Base case: ", Number(isVowel(string[0])))
        return Number(isVowel(string[0])); 
    }
  
  
    // return recursiveCountVowels(string, stringLength - 1) + isVowel(string[stringLength - 1]); 
  
    let result = recursiveCountVowels(string, stringLength - 1) + Number(isVowel(string[stringLength - 1]));

    console.log("isVowel value: ", isVowel(string[stringLength - 1]))

    console.log(`count after checking ${string[stringLength - 1]}: ${result}`)
    return result
  
  }
  
  let myString = "vikas"
  console.log(recursiveCountVowels(myString, myString.length))