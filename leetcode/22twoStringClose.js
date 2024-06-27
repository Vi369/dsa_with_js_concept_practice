

/*
 * calculate the length 
 * fm1 and fm2 
 * fm -> keys compare size
 * check have samecharacter
 * values -> array -> sort
 * arrya -> string -> compare
 */


var closeStrings = function(word1, word2) {
    if(word1.length !== word2.length){
        return false
    }

    const frequencyMap1 = new Map();
    const frequencyMap2 = new Map();

    for(const charater of word1){
        frequencyMap1.set(charater, (frequencyMap1.get(charater) || 0) + 1)
    }

    for(const charater of word2){
        frequencyMap2.set(charater, (frequencyMap2.get(charater) || 0) + 1)
    }
    // console.log(frequencyMap1)
    // console.log(frequencyMap2)

    const characterSet1 = new Set(frequencyMap1.keys());
    const characterSet2 = new Set(frequencyMap2.keys());

    if(characterSet1.size !== characterSet2.size){
        return false
    }

    const havesameCharacter = [...characterSet1].every((char)=> characterSet2.has(char))

    if(!havesameCharacter){
        return false
    }

    const sortedFrequency1 = Array.from(frequencyMap1.values()).sort((a,b)=> a-b)
    const sortedFrequency2 = Array.from(frequencyMap2.values()).sort((a,b)=> a-b)

    // console.log(sortedFrequency1)
    // console.log(sortedFrequency2)

    const areFrequencyIdentical = sortedFrequency1.join(',') === sortedFrequency2.join(',')

    // console.log(sortedFrequency1.join(','))
    // console.log(sortedFrequency2.join(','))

    if (!areFrequencyIdentical) {
        return false
      }
  
      return true
};

let word1 = "cabbba", word2 = "abbccc"
console.log(closeStrings(word1,word2))


/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 * 
 * algo; 1 check length
 * 2 Fm1 and fm2
 * 3 keys ka set and compare the size 
 * 4 check have same character or not 
 * 5 Array -> values -> sorted
 * Array -> string _> compare 
 */
var closeStrings2 = function(word1, word2) {
    if(word1.length !== word2.length){
        return false
    }

    const frequencyMap1 = new Map();
    const frequencyMap2 = new Map();

    for(const character of word1){
        frequencyMap1.set(character, (frequencyMap1.get(character) || 0) + 1)
    }

    for(const character of word2){
        frequencyMap2.set(character, (frequencyMap2.get(character) || 0) + 1)
    }

    const frequencySet1 = new Set(frequencyMap1.keys())
    const frequencySet2 = new Set(frequencyMap2.keys())

    if(frequencySet1.size !== frequencySet2.size){
        return false;
    }

    const haveSameCharacter = [...frequencySet1].every((char)=> frequencySet2.has(char))

    if(!haveSameCharacter){
        return false
    }

    const sortedFrequncy1 = Array.from(frequencyMap1.values()).sort((a,b)=> a-b)
    const sortedFrequncy2 = Array.from(frequencyMap2.values()).sort((a,b)=> a-b)

    return sortedFrequncy1.join(',') === sortedFrequncy2.join(',')
};