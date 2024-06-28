var decodeString = function(s) {
    let stack = [];
    let currentStr = '';
    let currentNum = 0

    for(let char of s){
        if(char >= '0' && char <= '9'){
            currentNum = (currentNum * 10) + (char - '0')
        }else if(char === '['){
            stack.push(currentNum);
            stack.push(currentStr);


            // reset the currentStr and currentNum
            currentNum = 0;
            currentStr = ''
        }else if(char ===']'){
            let prevStr = stack.pop();
            let repeatNumber = stack.pop();

           currentStr = prevStr + currentStr.repeat(repeatNumber)
        }else{
           currentStr = currentStr + char
        }
    }
    // console.log(stack)
    return currentStr;
};

console.log(decodeString("3[a]2[bc]"))