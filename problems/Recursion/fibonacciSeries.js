// iterative 
function fibonacci(num){
    let n1 = 0;
    let n2 = 1
    let temp;

    for(let i=0; i < num; i++){
        temp = n1 + n2;
        n1 = n2;
        n2 = temp;
    }
    return n1
}

// console.log(fibonacci(5))
// console.log(fibonacci(6))
// console.log(fibonacci(8))


// recursive way 
function recursiveFibonacci(num){
    // console.log(`current num:${num}`)
    if(num <= 1){
        return num
    }
    
    let num1 = recursiveFibonacci(num-1);
    // console.log("recursive call num1 unwinding value :",num1)

    let num2 = recursiveFibonacci(num-2);
    // console.log("recursive call num1 unwinding value :",num2)

    return (num1 + num2)
    
    // return (recursiveFibonacci(num - 1) + recursiveFibonacci(num - 2));
}

console.log(recursiveFibonacci(5))
// console.log(recursiveFibonacci(6))
// console.log(recursiveFibonacci(8))