/**  question 
 * console.log(maskify('5512103073210694')); 
 * 5###########0694
*/ 


function maskify(cardNumber){
    if(cardNumber === ''){
        throw new Error("Card Number Can't be empty!")
    }
    if(isNaN(cardNumber)){
        throw new Error("provide number")
    }
    
    if(cardNumber.length < 6 || cardNumber === ''){
        throw new Error("Card Number can't less then 6 numbers!")
    }


    // first number 
    const firstNumber = cardNumber[0]
    // last four number
    const lastFourNumber = cardNumber.slice(-4)

    let maskedNumber = '';
    if(typeof cardNumber === 'number'){
        cardNumber = cardNumber.toString()
    }
        for(let i = 1; i<cardNumber.length - 4; i++){
            const char = cardNumber[i]
            if(isNaN(char)){
                maskedNumber += char
            }else{
                maskedNumber += '#'
            }
        }
    return (firstNumber + maskedNumber + lastFourNumber);
}

console.log(maskify('5512103073210694'))
// console.log(maskify('123')) 
// console.log(maskify('adasds'))