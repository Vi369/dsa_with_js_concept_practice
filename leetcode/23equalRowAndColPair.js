let grid = [[3,2,1],[1,7,6],[2,7,7]]


var equalPairs = function(grid) {
    const rowMap = new Map()

    for(let i = 0; i< grid.length; i++){
        const rowStr = grid[i].join(',')
        rowMap.set(rowStr, (rowMap.get(rowStr) || 0) + 1)
    }

    console.log(rowMap);

    let count = 0;

    // const colMap = new Map()

    for(let j = 0; j< grid.length; j++){
        let colArr = []
        for(let i =0; i< grid.length; i++){
            colArr.push(grid[i][j])
        }
        
        const colStr = colArr.join(',')
        if(rowMap.has(colStr)){
            count = count + rowMap.get(colStr)
        }
    }

    return count
};

console.log(equalPairs(grid))