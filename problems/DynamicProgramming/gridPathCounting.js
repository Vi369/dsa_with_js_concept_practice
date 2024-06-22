function countPaths(grid, row = 0, col= 0, memo ={}){

    const position = row + ',' + col

    if( row >= grid.length || 
        col >= grid[0].length ||
        grid[row][col] === 'X' // depends on question wall or snake or crocodial
    ){
        return 0
    }

    // check if we have arrived at given location 
    if(row === grid.length -1 && col === grid[0].length -1){
        return 1
    }

    // memo result
    if(position in memo){
        return memo[position]
    }

    const rightPaths = countPaths(grid, row, col+1, memo);
    const downPaths = countPaths(grid, row+1, col, memo)

    memo[position] = rightPaths + downPaths;

    // memo[position] = countPaths(grid, row+1, col, memo) + countPaths(grid, row, col+1,memo)
    return memo[position]
}


// example 
const grid = [
    [0,0],
    [0,0]
]

console.log(countPaths(grid)) // expected output: 2 