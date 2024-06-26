// my first attempt/approach to solve this question 

// var findDifference = function(nums1, nums2) {
//     const constantSet1 = new Set(nums1)
//     const constantSet2 = new Set(nums2)

//     // checking set 2 
//     const num1 = nums1.filter((num)=> !constantSet2.has(num))
//     // checking set 1 
//     const num2 = nums2.filter((num)=> !constantSet1.has(num))

//     // removing duplicate
//     const answer = [[...new Set(num1)], [...new Set(num2)]]
//     return answer;
// };


// second attempt 
var findDifference = function(nums1, nums2) {
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)

    /**no duplicate and not present in other array */
    // checking on set1 that not in set2 
    const uniqueArray1 = [...set1].filter(num => !set2.has(num))
    // checking on set2 that not in set1 
    const uniqueArray2 = [...set2].filter(num => !set1.has(num))

    // return 
    return [uniqueArray1, uniqueArray2]
};





let num1 = [1,2,3]
let num2 = [2,4,5]

console.log(findDifference(num1,num2))