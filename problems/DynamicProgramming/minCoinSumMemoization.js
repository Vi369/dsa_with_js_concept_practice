// min coin sum memoization 

function minCoinSumMemo(amount, coins, memo = {}){
    if(amount in memo){
        return memo[amount]
    }

    if(amount === 0){
        return 0
    }

    if(amount < 0){
        return -1
    }

    let mincoinsCount = Infinity;

    for(const coin of coins){
        const result = minCoinSumMemo(amount - coin, coins, memo)

        if(result !== -1){
            mincoinsCount = Math.min(mincoinsCount, result + 1)
        }
    }

    memo[amount] = mincoinsCount === Infinity ? -1: mincoinsCount

    return memo[amount]
}

// example 
let amount1 = 11;
let coins1 = [1, 2, 5]; // 3 step
console.log(minCoinSumMemo(amount1, coins1)); // expected 3

// example 2
let amount2 = 3;
let coins2 = [2];
console.log(minCoinSumMemo(amount2, coins2)); // Output: -1 

// example 3
let amount3 = 0;
let coins3 = [1, 2, 5];
console.log(minCoinSumMemo(amount3, coins3));

// Example 4
let amount4 = 7;
let coins4 = [2, 3, 6];
console.log(minCoinSumMemo(amount4, coins4));