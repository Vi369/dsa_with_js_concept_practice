function fibTabu(n){
    if(n<=1){
        return n
    }

    const table = Array(n+1).fill(0)

    table[1] = 1

    for(let i = 2; i<=n; i++){
        table[i] = table[i-1] + table[i-2];
    }

    // return table[n]
    return table
}

// console.log(fibTabu(5))


// tribonacci using tabu (bottom up dp)
function tribTabu(n){
    if(n<=1){
        return 0
    }

    const table = Array(n+1).fill(0)
    table[1] = 1
    table[2] = 1

    for(let i = 3; i<=n; i++){
        table[i] = table[i-1] + table[i-2] + table[i-3];
    }
    return table[n]
    // return table
}

console.log(tribTabu(5))
