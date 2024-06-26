// find the highest altitude

var largestAltitude = function(gain) {
    let currentAltitude = 0, MaxAltitude = 0

    for(let i =0; i<gain.length; i++){
        currentAltitude += gain[i]
        MaxAltitude = Math.max(currentAltitude, MaxAltitude)
    }
    return MaxAltitude
};

// Example 2:

// Input: gain = [-4,-3,-2,-1,4,3,2]
// Output: 0
// Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.
 
let gain = [-4,-3,-2,-1,4,3,2]

console.log(largestAltitude(gain))