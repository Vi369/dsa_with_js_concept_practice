// problem : find firt occurence of given value 

// array = [1,2,3,2,3,4,5,6,8,8,1,4,1,11];
// findMe = 1;
// currentIndex = 0;
// Output => 0
// if not found = -1


// itterative
const firstOcc = (arr, findMe, currentIndex)=>{
    while(currentIndex < arr.length){
        if(arr[currentIndex]=== findMe){
            return currentIndex
        }
        currentIndex +=1 // update value so loop will contineu otherwise loop will be infinite
    }
    return -1

}


array = [1,3,2,3,4,5,6,8,8,1,4,1,11];
findMe = 1;
currentIndex = 0;

// const result = firstOcc(array, findMe,currentIndex);
// console.log(result)



/**
 * first base case: if current index length === arr.length means 12 === 12
 * second base case : we found the index of given value
 */

// recursive way 
function recursiveFindFirstOcc(arr, findme, currentIndex){
    if(currentIndex === arr.length){
        return -1
    }

    if(arr[currentIndex] === findme){
        return currentIndex
    }

    return recursiveFindFirstOcc(arr, findme, currentIndex + 1);
}


array = [1,3,2,3,4,5,6,8,8,1,4,1,11];
findMe = 8;
currentIndex = 0;

const result = recursiveFindFirstOcc(array, findMe,currentIndex);
console.log(result) // 7

