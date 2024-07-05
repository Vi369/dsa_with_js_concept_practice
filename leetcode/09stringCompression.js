// comparess algo 
var compress = function(chars) {
    let index = 0;
    let i = 0;

    while(i< chars.length){
        let j = i;
        while(j < chars.length && chars[i] === chars[j]){
            j++;
        }
        let count = j - i;
        chars[index++] = chars[i]
        if(count > 9){
            for(const str of count.toString()){
                chars[index++] = str;
            }
        }else{
            chars[index++] = count;
        }
        i = j
    }
    return index;
};


const chars = ["a","a","b","b","c","c","c"]

console.log(compress(chars))