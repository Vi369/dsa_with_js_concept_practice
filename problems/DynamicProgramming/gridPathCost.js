function maxPathCost(grid, row = 0, col= 0, memo ={}){

    const position = row + ',' + col

        // memo result
        if(position in memo) return memo[position]

    if( row >= grid.length || 
        col >= grid[0].length
    ){
        return -Infinity
    }

    // check if we have arrived at given location 
    if(row === grid.length -1 && col === grid[0].length -1){
        return grid[row][col]
    }

    const rightPaths = maxPathCost(grid, row, col+1, memo);
    const downPaths = maxPathCost(grid, row+1, col, memo)

    memo[position] = grid[row][col] + Math.max(rightPaths , downPaths);

    return memo[position]
}


// Example 
const grid = [
    [3,4],
    [1,2]
]

//Example 2
let grid2 = [
    [0, 5, 3],
    [0, 9, 0],
    [1, 0, 1]
];

// console.log(maxPathCost(grid)) // expected output: 9
// console.log(maxPathCost(grid2)) // expected output: 15

// min path cost 

function minPathCost(grid, row = 0, col= 0, memo ={}){

    const position = row + ',' + col

        // memo result
        if(position in memo) return memo[position]

    if( row >= grid.length || 
        col >= grid[0].length
    ){
        return Infinity
    }

    // check if we have arrived at given location 
    if(row === grid.length -1 && col === grid[0].length -1){
        return grid[row][col]
    }

    const rightPaths = minPathCost(grid, row, col+1, memo);
    const downPaths = minPathCost(grid, row+1, col, memo)

    memo[position] = grid[row][col] + Math.min(rightPaths , downPaths);

    return memo[position]
}


// Example 
const grid3 = [
    [3,4],
    [1,2]
]

//Example 2
// Example 2: 3x3 grid
let grid4 = [
    [1, 2, 3],
    [4, 8, 2],
    [1, 5, 3]
];
console.log(minPathCost(grid3)) // expected output: 6
console.log(minPathCost(grid4)) // expected output: 11
