// var increasingTriplet = function(nums) {
//     let smallestValue = Infinity
//     let secondSmallestValue = Infinity

//     for(let i=0; i< nums.length; i++){
//         if(nums[i] <= smallestValue){
//             smallestValue = nums[i]
//         }else if( nums[i+1] < secondSmallestValue){
//             secondSmallestValue = nums[i+1]
//         }else{
//             return true
//         }
//     }
//     return false
// };


var increasingTriplet = function(nums) {
    let smallestValue = Infinity
    let secondSmallestValue = Infinity

    for(const num of nums){
        if(num <= smallestValue){
            smallestValue = num
        }else if( num <= secondSmallestValue){
            secondSmallestValue = num
        }else{
            return true
        }
    }
    return false
};

// exa1
nums = [2,4,0,-2,-3]
//exa 2
nums1 = [2,4,-1,-2,-3]

// exa3 
nums2 = [2,4,0,-1,1,2]

console.log(increasingTriplet(nums)) // false
console.log(increasingTriplet(nums1)) // false
console.log(increasingTriplet(nums2)) // true