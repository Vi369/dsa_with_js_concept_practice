

function maxIslandSize(grid){
    const rows = grid.length;
    const cols = grid[0].length

    const visited = new Set()
    let maxSize = -Infinity;

    function exploreSize(row, col){
        const pos = row + ',' + col
        if(row < 0 || row >= rows ||
           col < 0 || col >= cols ||
           grid[row][col] === 'W' ||
           visited.has(pos)
        ){
            return 0
        }

        // if not visited
        visited.add(pos)

        let size = 1;

        size += exploreSize(row +1, col)
        size += exploreSize(row -1, col)
        size += exploreSize(row, col+1)
        size += exploreSize(row, col-1)

        // return 
        return size;
    }

    for(r = 0; r < rows; r++ ){

        for(c = 0; c < cols; c++){
            if(grid[r][c] === 'L' && !visited.has(r + ',' + c)){
                const size =  exploreSize(r, c)
                maxSize = Math.max(size, maxSize)
            }
        }
    }
    return maxSize;
}



function minIslandSize(grid){
    const rows = grid.length
    const cols = grid[0].length

    const visited = new Set()
    let smallestSize = Infinity;

    function exploreSize(row, col){
        const pos = row + ',' + col
        if(
            row < 0 || row >= rows || 
           col < 0 || col >= cols ||
           grid[row][col] === 'W' || visited.has(pos)
        ){
            return 0
        }

        visited.add(pos)
        let size = 1

        size += exploreSize(row + 1 , col)
        size += exploreSize(row - 1 , col)
        size += exploreSize(row , col + 1)
        size += exploreSize(row , col - 1)

        return size;
    }

    for(let r = 0; r < rows; r++){

        for(let c = 0; c < cols; c++){
            if(grid[r][c] === 'L' && !visited.has(r +','+ c)){
                const size = exploreSize(r, c)
                smallestSize = Math.min(size, smallestSize)
            }
        }
    }
    return smallestSize;
}

const grid = [ 
  ['L', 'L', 'W'],
  ['L', 'L', 'W'],
  ['W', 'W', 'W']
]
const grid2 = [
    ['L', 'L', 'W'],
    ['L', 'L', 'W'],
    ['W', 'W', 'L']
]
const grid1 = [ 
    ['L', 'L', 'W'],
    ['L', 'L', 'L'],
    ['W', 'W', 'L']
]

// console.log(minIslandSize(grid2))


// example max size 
console.log(maxIslandSize(grid))
console.log(maxIslandSize(grid1))
console.log(maxIslandSize(grid2))