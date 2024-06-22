// non adjecnt value 

function houseRobber(nums, i = 0, memo ={}){
    if(i in memo){
        return memo[i]
    }

    if(i>= nums.length){
        return 0
    }

    const firstValueSkip = houseRobber(nums, i+1, memo)
    const takeFirstValueSkipSecondOne = nums[i] + houseRobber(nums, i+2, memo)

    memo[i] = Math.max(firstValueSkip, takeFirstValueSkipSecondOne)

    // console.log(memo)
    return memo[i]
}

const nums = [2,7,9,3,1]

console.log(houseRobber(nums))