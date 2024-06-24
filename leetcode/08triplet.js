var increasingTriplet = function(nums) {
    let smallestValue = Infinity
    let secondSmallestValue = Infinity

    for(let i=0; i< nums.length; i++){
        if(nums[i] <= smallestValue){
            smallestValue = nums[i]
        }else if( nums[i+1] < secondSmallestValue){
            secondSmallestValue = nums[i+1]
        }else{
            return true
        }
    }
    return false
};

// dry run 
// nums = [5,2,3,4,5]

// smallestValue // 5
// secondSmallestValue // na 