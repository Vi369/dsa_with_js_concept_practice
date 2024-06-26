var pivotIndex = function(nums) {
    let totalSum = nums.reduce((acc, curr)=> acc+curr,0)
    
    let leftSum = 0,rightSum = 0

    for(let i =0; i<nums.length; i++){
        rightSum = totalSum - leftSum - nums[i]
        if(leftSum === rightSum){
            return i
        }
        leftSum += nums[i]
    }
    return -1
};


console.log(pivotIndex([1,2,3,4,5,6,7,8,9,10]))
console.log(pivotIndex([1,3,7,6,5,6]))
