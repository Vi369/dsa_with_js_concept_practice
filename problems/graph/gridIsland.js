function islandConunt(grid){
    const rows = grid.length;
    const cols = grid[0].length;

    const visited = new Set()
    let count = 0;

    function dfs(row, col){
        const pos = row + ',' + col

        if(
            row < 0 || row >= rows ||
            col < 0 || col >= cols ||
            grid[row][col] === 'W' || 
            visited.has(pos)
        ){
            return 
        }

        dfs(row+1, col)
        dfs(row-1, col)
        dfs(row, col+1)
        dfs(row, col-1)
    }

    for(let r = 0; r < rows; r++){
        // cols loop
        for(let c = 0; c < cols; c++){
            if(grid[r][c] === 'L' && !visited.has(r, + '', + c)){
                count++
                dfs(r,c)
            }
            
        }
    }

    return count;
};

// example 
