// Max area Water fill
var maxArea = function(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1

    while(left < right){
        let currentHeight = Math.min(height[left], height[right]);
        //distance 
        let currentWidth = right - left
        let currentArea = currentHeight * currentWidth

        // update max area if current area greater > maxarea
        maxArea = Math.max(currentArea, maxArea);

        // move the pointer
        if(height[left] < height[right]){
            left++
        }else{
            right--
        }
    }

    return maxArea;
        
};


// min area water 
function minArea(heights){
    let minWaterArea = Infinity;
    let left = 0;
    let right = heights.length -1

    while(left < right){
        //distance 
        let currentWidth = right - left
        // finding the max line 
        let currentHeight = Math.max(heights[right], heights[left])
        let currentArea = currentWidth * currentHeight

        // updating the minArea if currentArea is minimum
        minArea = Math.min(currentArea, minArea)

        // move the pointer 
        if(heights[left] > heights[right]){
            left++
        }else{
            right--
        }
    }
    return minArea
}