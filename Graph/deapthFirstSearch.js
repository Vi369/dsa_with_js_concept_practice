// deapth first traversal


function deapthFirstSearchItterativeWay(graph, start){
    const stack = [start]
    let visited = new Set()

    while(stack.length > 0){
        const StackPopCurrentNode = stack.pop()
        if(!visited.has(StackPopCurrentNode)){
            stack.add(StackPopCurrentNode)
        }
        for(const neighbour of graph[StackPopCurrentNode]){
            if(!visited.has(neighbour)){
                stack.push(neighbour)
            }
        }
    }
}

