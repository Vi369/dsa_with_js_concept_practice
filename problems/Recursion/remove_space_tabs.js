// remove " " and '\t'


// itterative
function removeTabAndSpace(inputString){
    let result = ""
  for (let i = 0; i < inputString.length; i++) {
    let char = inputString[i]
    if (char !== " " && char !== "\t") {
      result += char
    }
  }
  return result
} 

let string = "faljals  alkjsdljad    lajsldjlasd"

// console.log(' ' === '   ');
// console.log(' '!== ' ' && ' '!=='   ')
// console.log(' ' !==' ' || ' ' !== '     ')

// console.log(removeTabAndSpace(string))


// recursive 
function recursiveRemoveTabAndSpace(inputString){
    if(inputString.length === 0){
        return ''
    }
    let firstChar = inputString[0]
    let restOfString = inputString.slice(1);
    // console.log(`rest of string:${restOfString}`)
    // console.log(`first char:${firstChar}`)

    if(firstChar === ' ' || firstChar === '\t'){
        return recursiveRemoveTabAndSpace(restOfString)
    }
    
    return firstChar + recursiveRemoveTabAndSpace(restOfString)
}

let string2 = "    lakljasd lkjljals lkajlsd   aksj"
let string3 = " jfs"


console.log(recursiveRemoveTabAndSpace(string3))




