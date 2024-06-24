// Input: s = "the sky is blue"
// Output: "blue is sky the"

/**
 * logic: converer string to array then split based on the space after that reverse array and join and send as string 
 * second problem is if extra space then
 * solu=> trim()
 */
var reverseWords = function(s) {
    return s.trim().split(' ').reverse().filter((word)=>word!="").join(' ');
};

let s = "the sky is blue";

console.log(reverseWords(s));

