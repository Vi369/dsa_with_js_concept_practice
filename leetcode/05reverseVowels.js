// using two pointer techniques

var reverseVowels = function(s) {
    const vowels = 'aeiouAEIOU'
    const charactersArray = s.split('');

    let leftIndex = 0
    let rightIndex = s.length -1

    while(leftIndex < rightIndex){
        while(leftIndex < rightIndex && vowels.indexOf(charactersArray[leftIndex]) === -1){
            leftIndex++
        }

        while( leftIndex < rightIndex && vowels.indexOf(charactersArray[rightIndex]) === -1){
            rightIndex--
        }

        if(leftIndex < rightIndex){
            const temp = charactersArray[leftIndex];
            charactersArray[leftIndex] = charactersArray[rightIndex]
            charactersArray[rightIndex] = temp;
            leftIndex++
            rightIndex--
        }
    }
    return charactersArray.join('');

};