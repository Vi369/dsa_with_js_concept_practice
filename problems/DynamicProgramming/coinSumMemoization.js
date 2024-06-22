//"coin change problem" sum possiable or coinpossiable

/*

"coin change problem", where you need to determine if it's possible to form a specific amount using any combination of elements from a given set, which can be used an unlimited number of times."

sumPossible(8, [5, 12, 4]); -> true
sumPossible(103, [6, 20, 1]); // -> true
sumPossible(8, [5, 3, 4]) -> true
sumPossible(15, [4, 6, 10]) -> false


*/

function coinPossiable(amount , numbers, memo = {}){
    if(amount in memo){
        return memo[amount]
    }

    if(amount === 0){
        return true
    }
    if(amount < 0){
        return false
    }

    for(const num of numbers){
        if(coinPossiable(amount - num, numbers, memo) === true){
            memo[amount] = true
            return true
        }
    }
    memo[amount] = false
    return false
}


// console.log(coinPossiable(8, [5, 12, 4]))
// console.log(coinPossiable(8, [5, 3, 4]))

console.log(coinPossiable(15, [4, 6, 10]))
console.log(coinPossiable(103, [6, 20, 1]))


