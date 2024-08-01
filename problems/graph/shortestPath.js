function shortestPath(edges, start, dest){
    const graph = createGraph(edges)

    const queue = [[start, 0]];
    const visited = new Set([start]);

    while(queue.length > 0){
        const [node, distance] = queue.shift();

        if(node === dest){
            return distance // depends what returns
        }

        for (const neighbour of graph[node]) {
            if(!visited.has(neighbour)){
                visited.add(neighbour)
                queue.push([neighbour, distance + 1])
            }
        }
    }

}