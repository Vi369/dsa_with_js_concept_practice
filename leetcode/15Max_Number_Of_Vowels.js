// max vowels 

/**
 * Example 1:

Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.
 */

var maxVowels = function(s, k) {
    const vowels = new Set([
        'a', 'e', 'i', 'o', 'u'
    ])

    let currentVowelCount = 0, maxVowelsCount = 0;

    for(let i = 0; i<k; i++){
        if(vowels.has(s[i])){
            currentVowelCount++
        }
    }

    maxVowelsCount = currentVowelCount

    for(let i = k; i< s.length; i++){
        if(vowels.has(s[i-k])){
            currentVowelCount--
        }
        if(vowels.has(s[i])){
            currentVowelCount++
        }
        // update maxVowelCount if currentVouwlCount is greater
        maxVowelsCount = Math.max(currentVowelCount, maxVowelsCount)
    }

    return maxVowelsCount
};