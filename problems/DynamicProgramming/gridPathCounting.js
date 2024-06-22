function countPaths(grid, row = 0, col= 0, memo ={}){

    const position = row + ',' + col

    if( row >= grid.length || 
        col >= grid.length[0] ||
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

    memo[position] = countPaths(grid, row+1, col, memo) + countPaths(grid, row, col+1,memo)

    return memo[position]
}