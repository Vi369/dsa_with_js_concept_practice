function biggestIsland(graph){
    const visited = new Set()
    let largest = 0;

    function dfs(node){
        if(visited.has(node)){
            return 0
        }
        visited.add(node)
        let size = 1

        // find all neighbour
        for (const neighbour of graph[node]) {
            size = size + dfs(neighbour)
            // size += dfs(neighbour) 
        }
        return size 
    }

    // iterate over graph
    for (const node in graph) {
        if(!visited.has(node)){
            const componentSize = dfs(node)
            if(componentSize > largest){
                largest = componentSize;
            }
        }
    }
    return largest;
}


const graph = {
    "a": ['b', 'c'],
    "b": ['a', 'c', 'd'],
    "c": ['a', 'b', 'd'],
    "d": ['b', 'c'],
    "e": ['f'],
    "f": ['e']
};

console.log(biggestIsland(graph))

