// deapth first traversal

const graph = {
    "a": ['b', 'c'],
    "b": ['a', 'c', 'd'],
    "c": ['a', 'b', 'd'],
    "d": ['b', 'c'],
    "e": ['f'],
    "f": ['e']
  };

function deapthFirstSearchItterativeWay(graph, start){
    const stack = [start]
    let visited = new Set()

    while(stack.length > 0){
        const currentNode = stack.pop()
        if(!visited.has(currentNode)){
            visited.add(currentNode)
            for(const neighbour of graph[currentNode]){
                if(!visited.has(neighbour)){
                    stack.push(neighbour)
                }
            }
        }
    }
    return visited
}

// console.log(deapthFirstSearchItterativeWay(graph, 'a'))




// recursive way 
// start => currentNode
function deapthFSR(graph , start, visited = new Set()){
    if(!visited.has(start)){
        visited.add(start)
        for(const neighbour of graph[start]){
            deapthFSR(graph, neighbour, visited)
        }
    }
    return visited
}


console.log(deapthFSR(graph, 'a'))
