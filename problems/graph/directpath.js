/*
Given two nodes (start and dest) in a directed acyclic graph (DAG), return true if there is a directed path from start to dest, otherwise return false.

Example 1:

Input: start = 1, dest = 3
Output: true
Explanation: There is a directed path 1 -> 2 -> 3.
Example 2:

Input: start = 1, dest = 4
Output: false
Explanation: There is no path from 1 to 4.



*/

const graph = {
    "a": ['b', 'c'],
    "b": ['a', 'c', 'd'],
    "c": ['a', 'b', 'd'],
    "d": ['b', 'c'],
    "e": ['f'],
    "f": ['e']
  };

//   function for checking has path or not 
function directedPathDFS(graph, start,dest, visited = new Set()){
    const stack = [start]

    while(stack.length>0){
        const node = stack.pop()
        if(node === dest){
            return true
        }

        if(!visited.has(node)){
            visited.add(node)
            for(const neighbour of graph[node]){
                stack.push(neighbour)
            }
        }
    }
    return false
}

// console.log(directedPathDFS(graph, 'a', 'f')) // false
// console.log(directedPathDFS(graph, 'a', 'd')) // true



function hasPathBFS(graph, start, dest, visited = new Set()){
    const queue = [start]

    while(queue.length > 0){
        const node = queue.shift();

        if(node === dest){
            return true
        }

        if(!visited.has(node)){
            visited.add(node)
            for(const neighbour of graph[node]){
                queue.push(neighbour)
            }
        }
    }
    return false
}


// console.log(hasPathBFS(graph, 'a', 'f')) 
// console.log(hasPathBFS(graph, 'a', 'd')) 



function recursiveHasPath (graph, start, dest, visited = new Set()){
    console.log(`Current node: ${start}`);
    if(start === dest){
        return true
    }

    if(visited.has(start)){
        return false
    }
    
    visited.add(start)
    for(const neighbour of graph[start]){
        console.log(`  Exploring neighbour: ${neighbour}`);
        if(recursiveHasPath(graph, neighbour, dest, visited) === true){
            return true
        }
    }
    return false
}

console.log(recursiveHasPath(graph, 'a','e'))