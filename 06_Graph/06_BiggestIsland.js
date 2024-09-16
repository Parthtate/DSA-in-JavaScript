// find the Biggest island/ Components from the graph

const graph = {
    a: ['c', 'b'],
    b: ['a', 'c', 'd'],
    c: ['a', 'b', 'd'],
    d: ['c', 'b'],
    
    e: ['f'],
    f: ['e']
};
function biggestIsland(graph){
    const visited = new Set()
    let largest = 0

    function dfs(node){
        if (visited.has(node)) {
            return 0
        }
        visited.add(node)
        let size = 1

        // find neibhours
        for (const neibhours of graph[node]) {
            size = size + dfs(neibhours) 
        }
        return size
    }

    // iterate over graph
    for (const node in graph) {
        if (!visited.has(node)) {
            const componentSize = dfs(node)
            if (componentSize > largest) {
                largest = componentSize
            }
        }
    }
    return largest
}

console.log(biggestIsland(graph));