var mergeAlternately = function(word1, word2) {
    let mergedStr = ''
    let i = 0;
    let j = 0

    while(i < word1.length && j< word2.length){
        mergedStr += word1[i]
        mergedStr += word2[j]
        i++
        j++
    }

    while(i< word1.length){
        mergedStr +=word1[i]
        i++
    }
    while(j<word2.length){
        mergedStr +=word2[j]
        j++
    }

    return mergedStr

};

let word1 = "abc"
let word2 = "pqr"

console.log(mergeAlternately(word1, word2))