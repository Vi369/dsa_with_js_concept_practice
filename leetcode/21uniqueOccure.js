var uniqueOccurrences = function(arr) {
    // creating map to store key value pair item occurence
    const mapCount = new Map()

    for (const num of arr) {
        mapCount.set(num, (mapCount.get(num) || 0)+1) // overwritin existion key with new value
    }

    // creating set 
    const countSet = new Set()

    for (const num of mapCount.values()) {
        if(!countSet.has(num)){
            countSet.add(num)
        }else{
            return false
        }
    }
    return true
};


// example 
let arr = [1,2,2,1,1,3]
console.log(uniqueOccurrences(arr)) // true

// example 2
let arr2 = [-3,0,1,-3,1,1,1,-3,10,0,0]
console.log(uniqueOccurrences(arr2)) // false
