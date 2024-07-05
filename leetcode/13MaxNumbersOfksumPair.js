

var maxOperations = function(nums, k) {
    nums.sort((a,b)=> a-b);

    let left = 0;
    let right = nums.length - 1
    let operation = 0;

    while(left < right){
        const sum = nums[left] + nums[right];

        if(sum === k){
            operation++;
            left++;
            right--
        }else if(sum < k){
            left++
        }else{
            right--
        }
    }
    return operation;
};

// method 2
var maxOperations = function(nums, k) {

};

/**
 * logic => k=10
 */