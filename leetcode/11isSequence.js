// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

var isSubsequence = function(s, t) {
    // if s is length > t length means s is not subsequnce of t not possible
    if(s.length > t.length) return false

    let sCurrentIndex = 0;
    for(let char of t){
        if(s[sCurrentIndex] === char) sCurrentIndex++
        if(sCurrentIndex >= s.length) break
    }

    return sCurrentIndex === s.length
};

// another approch 
var isSubsequence2 = function(s, t) {
    let index = -1; 
    for (let char of s) {
        index = t.indexOf(char, index + 1);
        if (index === -1) {
            return false;
        }
    }
    return true;
};

let sequence = "ace"
let str = 'acdbe'

console.log(isSubsequence(sequence, str));