// Connected Island/ Compoents problem.
// Count how many island/compontens present in graph.

const graph = {
    a: ['c', 'b'],
    b: ['a', 'c', 'd'],
    c: ['a', 'b', 'd'],
    d: ['c', 'b'],
    e: ['f'],
    f: ['e']
};

function connectedIsland(graph){
    const visited = new Set()
    let count = 0

    // dfs
    function dfs(node){
        if (!visited.has(node)) {
            visited.add(node)
            for (const neibhours of graph[node]) {
                dfs(neibhours)
            }
        }
    }

    for (const node in graph) {
        if (!visited.has(node)) {
            dfs(node)
            count++;
        }
    }
    return count
}
console.log(connectedIsland(graph));