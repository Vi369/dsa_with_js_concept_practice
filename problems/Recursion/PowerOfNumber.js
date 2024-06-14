// power of number : privode value base and the exponent

// recursive 
function powerOfNumber(base, expo){
    if(expo === 0){
        return 1 // base case
    }else{
        return (base * powerOfNumber(base, expo - 1));
    }
}

console.log("recursive way:",powerOfNumber(5,3));


// iterative way
const power = (base, expo)=>{
    let power = base; // first step we already do here so loop will be 1 less
    for(let i = 1; i<expo; i++){ // 
        power = (power*base)
    }
    return power
}


console.log(power(5,3));
console.log(power(3,3));
console.log(power(6,3));