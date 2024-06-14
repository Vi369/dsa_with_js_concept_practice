// recursive 
function length(str){
    if(str === ''){
        return 0
    }else{
        return 1 + length(str.substring(1));
    }
}

// console.log(length("vikas"))


// iterative 
function findLength(str){
    let count = 0;
    while(str){
        count +=1
        str = str.slice(1)
    }
    return count
}

console.log(findLength("vikas"))