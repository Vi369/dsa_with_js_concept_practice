var productExceptSelf = function(nums) {
    let length = nums.length
 
    let leftArray = new Array(length).fill(1)
    let rightArray = new Array(length).fill(1)
 
    let answer = new Array(length)
 
     //left side array
     for(let i = 1 ; i< length; i++){
         leftArray[i] = leftArray[i-1] * nums[i-1]
     } 
 
     // right side array
     for(let i = length - 2; i>= 0; i--){
         rightArray[i] = rightArray[i+1] * nums[i+1]
     }
 
     // answer final array 
     for(let i = 0; i<length; i++){
        answer[i] = leftArray[i] * rightArray[i]
     }
 
     return answer;
 
 };
productExceptSelf([1,2,3,4])

