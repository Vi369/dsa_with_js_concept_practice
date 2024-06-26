function findMaxAverage(nums, k){
    let sum = 0;

    for(let i =0; i<k; i++){
        sum += nums[i]
    }
    let maxSum = sum;

    for(let i = k; i<nums.length; i++){
        sum = sum - nums[i-k] + nums[i]
        maxSum = Math.max(sum, maxSum);
    }

    // return 
    return maxSum/k;
}

const nums = [1,2,3,4,5]

console.log(findMaxAverage(nums, 3)) // expected output : 4