function sumOfNumbers(value){
    if(value === 1){
        return 1
    }
    return(value + sumOfNumbers(value -1))
}

console.log(sumOfNumbers(3))