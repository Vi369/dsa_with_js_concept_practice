var moveZeroes = function(nums) {
    let writeIndex = 0;
    for(let readIndex = 0; readIndex < nums.lenght; readIndex++){
        if(nums[readIndex] !==0){
            nums[writeIndex] = nums[readIndex];
            writeIndex++
        }
    }

    //fill reamaning position to 0
    while(writeIndex < nums.lenght){
        nums[writeIndex] = 0
        writeIndex++
    }

    return nums;
};
